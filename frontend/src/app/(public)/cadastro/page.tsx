import Image from "next/image";
import { RegisterForm } from "./components/register-form";
import Link from "next/link";

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
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Crie sua conta</h1>
          <p>Junte-se à nossa plataforma de envio de mensagens</p>
        </div>
        <RegisterForm className="" />
        <span className="text-center text-zinc-800">
          Já possui uma conta?{" "}
          <Link href="acessar" className="font-semibold text-zinc-900">
            Fazer login
          </Link>
        </span>
      </div>
    </div>
  );
}
