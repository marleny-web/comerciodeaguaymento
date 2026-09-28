import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/data/products";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo."),
  empresa: z.string().optional(),
  email: z.string().email("Ingresa un correo electrónico válido."),
  telefono: z.string().min(6, "Ingresa un teléfono de contacto."),
  ciudad: z.string().min(2, "Ingresa tu ciudad."),
  tipoCliente: z.string().min(1, "Selecciona el tipo de cliente."),
  producto: z.string().min(1, "Selecciona un producto de interés."),
  cantidad: z.string().optional(),
  asunto: z.string().min(3, "Indica el asunto de tu consulta."),
  mensaje: z.string().min(10, "Cuéntanos brevemente qué necesitas."),
});

type FormValues = z.infer<typeof schema>;

const clientTypes = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      ciudad: "",
      tipoCliente: "",
      producto: "",
      cantidad: "",
      asunto: "",
      mensaje: "",
    },
  });

  // Preparado para conectarse luego con un servicio de email, CRM o backend.
  const onSubmit = async (values: FormValues) => {
    console.info("Consulta recibida", values);
    setSent(true);
    form.reset();
  };

  if (sent) {
    return (
      <div className="rounded-xl border border-secondary/30 bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto size-12 text-secondary" aria-hidden="true" />
        <h3 className="mt-4 text-2xl text-primary">Gracias por contactarnos</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="outline" size="lg" className="mt-6" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-xl border border-border bg-card p-6 shadow-soft md:p-8"
        noValidate
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo *</FormLabel>
                <FormControl>
                  <Input autoComplete="name" placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa</FormLabel>
                <FormControl>
                  <Input autoComplete="organization" placeholder="Opcional" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico *</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" placeholder="correo@empresa.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono *</FormLabel>
                <FormControl>
                  <Input type="tel" autoComplete="tel" placeholder="+51 ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ciudad"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad *</FormLabel>
                <FormControl>
                  <Input autoComplete="address-level2" placeholder="Ciudad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tipoCliente"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de cliente *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {clientTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="producto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Producto de interés *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un producto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {products.map((p) => (
                      <SelectItem key={p.slug} value={p.name}>
                        {p.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="Otro / aún no lo sé">Otro / aún no lo sé</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cantidad"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad aproximada</FormLabel>
                <FormControl>
                  <Input placeholder="Ej. 50 kg por semana" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="asunto"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Asunto *</FormLabel>
                <FormControl>
                  <Input placeholder="Motivo de tu consulta" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Mensaje *</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="Cuéntanos qué necesitas" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" variant="gold" size="xl" className="mt-7 w-full md:w-auto">
          Enviar consulta
        </Button>
      </form>
    </Form>
  );
}
