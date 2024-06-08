import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { AllCampaignsTable } from "./components/all-campaigns-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-semibold">Campanhas</h1>

      <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold flex items-center">
            <Send className="h-6 w-6 mr-3" strokeWidth={2.5} />
            Todas as campanhas enviadas
          </h2>
        <div className="border rounded-md p-5 flex flex-col gap-6">
          <Input placeholder="Pesquisar campanhas" />
          <AllCampaignsTable />
        </div>
      </div>
    </div>
  );
}
