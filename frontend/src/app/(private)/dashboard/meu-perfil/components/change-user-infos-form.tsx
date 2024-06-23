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
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "O nome de usuário deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
});

type Schema = z.infer<typeof schema>;

export function ChangeUserInfosForm({ className }: { className?: string }) {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(data: Schema) {
    console.log(data);
  }

  return (
    <div className="max-w-[500px]">
      <h2 className="text-xl font-semibold text-zinc-900">
        Informações pessoais
      </h2>
      <Separator className="my-3" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-8", className)}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de usuário</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome de usuário" {...field} />
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu e-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Salvar mudanças</Button>
        </form>
      </Form>
    </div>
  );
}
