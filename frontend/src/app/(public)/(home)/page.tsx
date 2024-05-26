import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex lg:flex-row flex-col justify-between items-center gap-4 lg:pt-0 pt-20">
      <div className="lg:max-w-[500px] flex flex-col gap-8">
        <h1 className="text-5xl font-bold whitespace-pre-line">
          Da sua mente para o {"\n"} mundo em um clique.
        </h1>
        <p>
          Com nossa plataforma intuitiva e poderosa, você pode transformar suas
          ideias em comunicações impactantes e alcançar instantaneamente
          milhares de destinatários, sem limites geográficos. Potencialize sua
          voz, expanda seu alcance e faça suas mensagens serem ouvidas, onde
          quer que seu público esteja.
        </p>
        <Link href="/cadastro" className="max-w-[200px]">
          <Button>
            <Zap size={24} className="mr-2 h-4 w-4" /> Quero saber mais
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src="/assets/images/home.png"
          alt="home"
          width={590}
          height={500}
        />
      </div>
    </section>
  );
}
