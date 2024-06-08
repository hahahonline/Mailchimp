"use client";

import { ContactsSelector } from "@/components/contacts-selector";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
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
import { CircleAlert, Mailbox, Search, UserPlus } from "lucide-react";
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

export function GetGroupContactsDialog({
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
            <Search className="h-6 w-6" strokeWidth={2.5} />
            Contatos em clientes
          </DialogTitle>
          <DialogDescription>
            Buscar contatos do grupo{" "}
            <strong className="font-medium text-zinc-900">Clientes</strong>
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Pesquisar contato por nome" />
        <ContactsSelector />
        <DialogFooter>
          <Button variant="destructive" type="submit">
            <CircleAlert className="h-5 w-5 mr-2" strokeWidth={2.5} />
            Excluir contatos selecionados
          </Button>
          <DialogClose>
            <Button type="submit" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
