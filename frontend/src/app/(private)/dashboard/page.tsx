import { SummarySection } from "./components/SummarySection";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Início</h1>
        <SummarySection />
      </div>
    </div>
  );
}
