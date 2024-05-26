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
      </header>
      <main className="flex flex-col flex-1 justify-center">{children}</main>
    </div>
  );
}
