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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const schema = z
  .object({
    password: z.string().min(8, {
      message: "A senha deve ter no mínimo 8 caracteres",
    }),
    passwordConfirmation: z.string().min(8, {
      message: "A senha deve ter no mínimo 8 caracteres",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não conferem",
    path: ["passwordConfirmation"],
  });

type Schema = z.infer<typeof schema>;

export function NewPasswordForm({ className }: { className?: string }) {
  const router = useRouter();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  function onSubmit(data: Schema) {
    toast.success("Senha alterada com sucesso", {
      description: "Tente acessar com sua nova senha",
      position: 'top-center'
    });
    router.push("/acessar");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
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
          Mudar minha senha
        </Button>
      </form>
    </Form>
  );
}
