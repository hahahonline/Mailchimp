"use client";

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
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {deleteCookie} from 'cookies-next'

export function ConfirmLogoutDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  function handleLogout() {
    deleteCookie('token')
    router.push("/acessar");
    toast.info("Você saiu da sua conta", {
      position: "top-center",
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <LogOut className="h-6 w-6" strokeWidth={2.5} />
            Sair da conta
          </DialogTitle>
          <DialogDescription>
            Deseja realmente sair da sua conta?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleLogout} variant="destructive">
            Sair da conta
          </Button>
          <DialogClose>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
