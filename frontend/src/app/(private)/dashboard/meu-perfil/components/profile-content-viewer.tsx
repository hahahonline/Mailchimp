"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChangeUserInfosForm } from "./change-user-infos-form";
import { ChangeUserPasswordForm } from "./change-user-password-form";
import { LogOut } from "lucide-react";
import { ConfirmLogoutDialog } from "./confirm-logout-dialog";

export function ProfileContentViewer() {
  const [currentContent, setCurrentContent] = useState<
    "change-infos" | "change-password"
  >("change-infos");

  return (
    <div className="grid grid-cols-4 gap-16">
      <aside>
        <ul className="flex flex-col gap-3">
          <li>
            <Button
              className="justify-start w-full"
              variant={
                currentContent === "change-infos" ? "secondary" : "ghost"
              }
              onClick={() => setCurrentContent("change-infos")}
            >
              Informações pessoais
            </Button>
          </li>
          <li>
            <Button
              className="justify-start w-full"
              variant={
                currentContent === "change-password" ? "secondary" : "ghost"
              }
              onClick={() => setCurrentContent("change-password")}
            >
              Alterar senha
            </Button>
          </li>
          <li>
            <ConfirmLogoutDialog>
              <Button
                className="justify-start w-full text-red-600 hover:bg-red-50 hover:text-red-600"
                variant="ghost"
              >
                <LogOut size={16} className="mr-2" />
                Sair da conta
              </Button>
            </ConfirmLogoutDialog>
          </li>
        </ul>
      </aside>
      <div className="col-span-3 w-full">
        <ContentWrapper currentContent={currentContent} />
      </div>
    </div>
  );
}

function ContentWrapper({
  currentContent,
}: {
  currentContent: "change-infos" | "change-password";
}) {
  if (currentContent === "change-infos") {
    return <ChangeUserInfosForm />;
  }

  return <ChangeUserPasswordForm />;
}
