import { MailCheck, MailOpen, MailWarning, User } from "lucide-react";

const summaryItems = [
  {
    title: "Audiência",
    counter: "+ 200",
    description: "No último mês",
    Icon: <User className="h-4 w-4" />,
  },
  {
    title: "Campanhas enviadas",
    counter: "+ 12",
    description: "No último mês",
    Icon: <MailCheck className="h-4 w-4" />,
  },
  {
    title: "Mensagens lidas",
    counter: "+ 3273",
    description: "No último mês",
    Icon: <MailOpen className="h-4 w-4" />,
  },
  {
    title: "Mensagens recebidas",
    counter: "+ 4928",
    description: "No último mês",
    Icon: <MailWarning className="h-4 w-4" />,
  },
];

export function SummarySection() {
  return (
    <section className="grid grid-cols-4 gap-6">
      {summaryItems.map((summaryItem) => (
        <SummaryCard key={summaryItem.title} {...summaryItem} />
      ))}
    </section>
  );
}

function SummaryCard({
  title,
  counter,
  description,
  Icon,
}: {
  title: string;
  counter: string;
  description: string;
  Icon: React.ReactNode;
}) {
  return (
    <div className="rounded-md border p-4 flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-center">
        <span className="block">{title}</span>
        {Icon}
      </div>
      <div className="flex flex-col gap-1">
        <strong className="block text-2xl font-semibold text-zinc-950">
          {counter}
        </strong>
        <span className="block text-xs text-zinc-800">{description}</span>
      </div>
    </div>
  );
}
