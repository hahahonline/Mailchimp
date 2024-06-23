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

const schema = z
  .object({
    currentPassword: z.string().min(8, {
      message: "A senha atual deve ter no mínimo 8 caracteres",
    }),
    newPassword: z.string().min(8, {
      message: "A nova senha deve ter no mínimo 8 caracteres",
    }),
    confirmNewPassword: z.string().min(8, {
      message: "A confirmação da nova senha deve ter no mínimo 8 caracteres",
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "As senhas não coincidem",
    path: ["confirmNewPassword"],
  });

type Schema = z.infer<typeof schema>;

export function ChangeUserPasswordForm({ className }: { className?: string }) {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  function onSubmit(data: Schema) {
    console.log(data);
  }

  return (
    <div className="max-w-[500px]">
      <h2 className="text-xl font-semibold text-zinc-900">
        Alterar senha
      </h2>
      <Separator className="my-3" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-8", className)}
        >
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha atual</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite sua senha atual"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nova senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite sua nova senha"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar nova senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirme sua nova senha"
                    type="password"
                    {...field}
                  />
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
