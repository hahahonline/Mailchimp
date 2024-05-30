import { cn } from "@/lib/utils";

export function RestrictedArea({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1212px] px-4", className)}>
      {children}
    </div>
  );
}
