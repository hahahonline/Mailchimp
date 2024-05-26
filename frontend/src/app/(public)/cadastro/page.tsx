import Image from "next/image";
import { RegisterForm } from "./components/register-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 items-center">
      <Image
        src="/assets/images/cadastro.png"
        alt=""
        width={590}
        height={590}
      />
      <div className="flex flex-col gap-6 lg:max-w-[450px] w-full ml-auto">
        <Link
          href="/"
          className="text-zinc-700 flex items-center gap-2 hover:underline mb-3"
        >
          <ArrowLeft size={24} className="text-zinc-700" />
          Voltar à página inicial
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Crie sua conta</h1>
          <p>Junte-se à nossa plataforma de envio de mensagens</p>
        </div>
        <RegisterForm className="" />
        <span className="text-center text-zinc-800">
          Já possui uma conta?{" "}
          <Link
            href="acessar"
            className="font-semibold text-zinc-900 hover:underline"
          >
            Fazer login
          </Link>
        </span>
      </div>
    </div>
  );
}
