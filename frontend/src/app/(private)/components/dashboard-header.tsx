"use client";

import { RestrictedArea } from "@/components/restricted-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleUserRound, Home, Mail, MailPlus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200">
      <RestrictedArea className="py-4 flex justify-between">
        <Link href="/dashboard">
          <Image
            src="/assets/logos/zipmail.svg"
            alt="Página inicial do ZipMail"
            className=""
            width={131.4}
            height={38.4}
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavButton href="/dashboard" isActive={pathname === "/dashboard"}>
                <Home className="mr-2 h-4 w-4" />
                Início
              </NavButton>
            </li>
            <li>
              <NavButton
                href="/dashboard/audiencia"
                isActive={pathname === "/dashboard/audiencia"}
              >
                <Users className="mr-2 h-4 w-4" />
                Audiência
              </NavButton>
            </li>
            <li>
              <NavButton
                href="/dashboard/campanhas"
                isActive={pathname === "/dashboard/campanhas"}
              >
                <Mail className="mr-2 h-4 w-4" />
                Campanhas
              </NavButton>
            </li>
            <li>
              <NavButton
                href="/dashboard/meu-perfil"
                isActive={pathname === "/dashboard/meu-perfil"}
              >
                <CircleUserRound className="mr-2 h-4 w-4" />
                Meu Perfil
              </NavButton>
            </li>
          </ul>
        </nav>
        <Button asChild>
          <Link href="/dashboard/nova-campanha">
            <MailPlus className="mr-2 h-4 w-4" />
            Nova campanha
          </Link>
        </Button>
      </RestrictedArea>
    </header>
  );
}

function NavButton({
  isActive,
  href,
  children,
}: {
  isActive?: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      className={cn("flex items-center gap-2", {
        "text-zinc-600": !isActive,
      })}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
