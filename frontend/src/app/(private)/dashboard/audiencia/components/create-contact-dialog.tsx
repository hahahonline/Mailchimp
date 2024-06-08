"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent,
  DialogDescription, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome de usuário deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z
    .string()
    .min(8, { message: "O telefone deve ter no mínimo 8 caracteres" }),
  group: z.string().min(1, { message: "Campo obrigatório" }),
});

type Schema = z.infer<typeof schema>;

export function CreateContactDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      group: "",
    },
  });

  function onSubmit(data: Schema) {
    form.reset();

    toast.success("Contato criado com sucesso", {
      position: "top-center",
    });

    handleDialogClose();
  }

  function handleDialogClose() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-6 w-6" strokeWidth={2.5} />
            Novo contato
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para adicionar um novo contato.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Celular" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="group"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Vincular à um grupo" />
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
            <Button type="submit">Adicionar contato</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
