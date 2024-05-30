import { RestrictedArea } from "@/components/restricted-area";
import { DashboardHeader } from "./components/DashboardHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      <RestrictedArea className="py-6">{children}</RestrictedArea>
    </>
  );
}
