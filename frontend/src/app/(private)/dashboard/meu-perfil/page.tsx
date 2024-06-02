import { Separator } from "@/components/ui/separator";
import { ProfileContentViewer } from "./components/profile-content-viewer";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Meu Perfil</h1>
        <span className="block text-zinc-800">Gerencie as configurações da sua conta e defina preferências de e-mail.</span>
      </div>
      <Separator />
      <div>
        <ProfileContentViewer />
      </div>
    </div>
  );
}
