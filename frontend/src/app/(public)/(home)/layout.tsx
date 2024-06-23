import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen mx-auto max-w-[1212px] flex flex-col p-4">
      <header className="flex justify-between items-center mt-6">
        <Link href="/">
          <Image
            src="/assets/logos/zipmail.svg"
            alt="Página inicial do ZipMail"
            className=""
            width={131.4}
            height={38.4}
          />
        </Link>
        <div className="flex items-center gap-6">
          <Button asChild variant="outline">
            <Link href="/acessar">Acessar</Link>
          </Button>
          <Button asChild>
            <Link href="/cadastro">
              <UserPlus size={24} className="mr-2 h-4 w-4" /> Cadastre-se
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex flex-col flex-1 justify-center">{children}</main>
    </div>
  );
}
