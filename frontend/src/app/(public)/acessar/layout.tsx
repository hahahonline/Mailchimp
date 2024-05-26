import { Zap } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center items-center">
      <Zap size={426} className="absolute -top-32 -left-32 text-zinc-800" />
      <div className="max-w-[520px] w-full border border-slate-300 min-h-[200px] rounded-md p-6">
        {children}
      </div>
      <Zap size={426} className="absolute -bottom-32 -right-32 text-zinc-800" />
    </div>
  );
}
