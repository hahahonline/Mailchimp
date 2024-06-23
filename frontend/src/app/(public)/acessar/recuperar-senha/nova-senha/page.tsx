import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";
import { NewPasswordForm } from "./components/new-password-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <Link href="/">
        <Image
          src="/assets/logos/zipmail.svg"
          alt="Página inicial do ZipMail"
          className=""
          width={157.58}
          height={46}
        />
      </Link>
      <div className="max-w-[520px] w-full border border-slate-300 min-h-[200px] rounded-md p-6">
        <Link
          href="/acessar/recuperar-senha"
          className="text-zinc-700 flex items-center gap-2 hover:underline mb-8"
        >
          <ArrowLeft size={24} className="text-zinc-700" />
          Voltar à recuperação de senha
        </Link>
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Mudar senha</h1>
            <span className="block">
              Insira sua nova senha abaixo
            </span>
          </div>
          <NewPasswordForm />
        </div>
      </div>
    </div>
  );
}
