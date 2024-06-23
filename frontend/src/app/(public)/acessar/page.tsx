import Link from "next/link";
import { LoginForm } from "./components/login-form";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

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
        <Link href="/" className="text-zinc-700 flex items-center gap-2 hover:underline mb-8">
          <ArrowLeft size={24} className="text-zinc-700" />
          Voltar à página inicial
        </Link>
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Acessar conta</h1>
            <span className="block">
              Faça o login para gerenciar sua conta.
            </span>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="text-center space-y-3">
        <span className="block">
          Não tem conta?{" "}
          <Link
            href="/cadastro"
            className="hover:underline font-semibold text-zinc-900"
          >
            Cadastre-se
          </Link>
        </span>
        <Link
          href="/acessar/recuperar-senha"
          className="hover:underline font-semibold text-zinc-900 block"
        >
          Esqueceu a senha?
        </Link>
      </div>
    </div>
  );
}
