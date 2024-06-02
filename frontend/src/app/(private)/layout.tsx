import { RestrictedArea } from "@/components/restricted-area";
import { DashboardHeader } from "./components/dashboard-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      <RestrictedArea className="py-6 min-h-[calc(100vh-73px)] flex flex-col flex-1">{children}</RestrictedArea>
    </>
  );
}
