"use client";

import { ContactsSelector } from "@/components/contacts-selector";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquareMore } from "lucide-react";
import { useState } from "react";
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

export function CampaignDetailsDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDialogClose() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[620px] w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquareMore className="h-6 w-6" strokeWidth={2.5} />
            Detalhes da campanha
          </DialogTitle>
          <DialogDescription>
            Confira os detalhes da campanha abaixo
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 w-full">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="picture">Grupo</Label>
            <Input disabled defaultValue="Clientes Premium" />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label>Contatos adicionados à mensagem</Label>
            <ContactsSelector disabled />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="picture">Título</Label>
            <Input disabled defaultValue="Mensagem importante" />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              disabled
              className="min-h-24"
              defaultValue="Olá, tudo bem? Estamos entrando em contato para informar que..."
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
