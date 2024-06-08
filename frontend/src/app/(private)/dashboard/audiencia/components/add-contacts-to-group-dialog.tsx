"use client";

import { ContactsSelector } from "@/components/contacts-selector";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus, UserPlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome do grupo deve ter no mínimo 3 caracteres" }),
});

type Schema = z.infer<typeof schema>;

export function AddContactsToGroupDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: Schema) {
    form.reset();

    toast.success("Contato(s) adicionados com sucesso", {
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
            Adicionar Contatos em clientes
          </DialogTitle>
          <DialogDescription>
            Buscar contatos do grupo{" "}
            <strong className="font-medium text-zinc-900">Clientes</strong>
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Pesquisar contato por nome" />
        <ContactsSelector />
        <DialogFooter>
          <Button type="submit">
            <CirclePlus className="h-5 w-5 mr-2" strokeWidth={2.5} />
            Adicionar contatos selecionados
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
