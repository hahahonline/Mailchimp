"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { ContactsSelector } from "@/components/contacts-selector";
import { Label } from "@/components/ui/label";

const schema = z.object({
  group: z.string().min(1, { message: "Selecione um grupo" }),
  title: z.string().min(1, { message: "O título é obrigatório" }),
  message: z.string().min(1, { message: "A mensagem é obrigatória" }),
});

type Schema = z.infer<typeof schema>;

export function NewCampaignForm({ className }: { className?: string }) {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      group: "",
      title: "",
      message: "",
    },
  });

  function onSubmit(data: Schema) {
    form.reset();
    toast.success("Campanha enviada com sucesso", {
      description:
        "Sua campanha foi enviada com sucesso para o grupo e contatos selecionados.",
      position: "top-center",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
        <FormField
          control={form.control}
          name="group"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grupo</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um grupo de contatos" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="grupo1">Grupo 1</SelectItem>
                  <SelectItem value="grupo2">Grupo 2</SelectItem>
                  <SelectItem value="grupo3">Grupo 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">
            Adicionar contatos à mensagem (opcional)
          </Label>
          <ContactsSelector />
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Digite o título da mensagem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-56"
                  placeholder="Digite sua mensagem aqui..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          <Send className="w-4 h-4 mr-2" />
          Enviar campanha de mensagens
        </Button>
      </form>
    </Form>
  );
}
