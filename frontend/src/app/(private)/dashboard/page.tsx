import { Send, Users } from "lucide-react";
import { SummarySection } from "./components/SummarySection";
import { RecentAddedUsersTable } from "./components/recent-added-users-table";
import { LastCampaignSentTable } from "./components/last-campaign-sent-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Início</h1>
        <SummarySection />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold flex items-center">
          <Users className="h-6 w-6 mr-3" strokeWidth={2.5} />
          Últimos contatos adicionados
        </h2>
        <div className="border rounded-md p-5">
          <RecentAddedUsersTable />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold flex items-center">
          <Send className="h-6 w-6 mr-3" strokeWidth={2.3} />
          Últimas campanhas enviadas
        </h2>
        <div className="border rounded-md p-5">
          <LastCampaignSentTable />
        </div>
      </div>
    </div>
  );
}
