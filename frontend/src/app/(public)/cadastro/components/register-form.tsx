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
import { useRouter } from "next/navigation";

const schema = z
  .object({
    email: z.string().email({ message: "E-mail inválido" }),
    username: z
      .string()
      .min(3, { message: "O nome de usuário deve ter no mínimo 3 caracteres" }),
    password: z
      .string()
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
    passwordConfirmation: z
      .string()
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  });

type Schema = z.infer<typeof schema>;

export function RegisterForm({ className }: { className?: string }) {
  const router = useRouter();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  async function onSubmit(data: Schema) {
    try {
      await fetch("http://localhost:3000/clients/register", {
        method: "POST",
        body: JSON.stringify({
          name: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      router.push("/acessar");
      toast.success("Conta criada com sucesso", {
        description: "Agora você já pode acessar sua conta",
        position: "top-center",
      });
    } catch {
      toast.error("Erro ao criar conta", {
        description: "Tente novamente mais tarde",
        position: "top-center",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha"
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
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmação de senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha novamente"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Criar minha conta
        </Button>
      </form>
    </Form>
  );
}
