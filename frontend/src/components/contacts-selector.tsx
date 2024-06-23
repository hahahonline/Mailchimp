import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "./ui/checkbox";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Contato ${a.length - i}`
);

export function ContactsSelector({ disabled = false }: { disabled?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-72 rounded-md border w-full overflow-y-scroll">
        <ScrollArea>
          <div className="p-4">
            {tags.map((tag, index) => (
              <>
                {index !== 0 && <Separator className="my-4" />}
                <div key={tag} className="text-sm flex items-center gap-4">
                  {!disabled && <Checkbox id="terms" />}
                  <span className="block">{tag}</span>
                </div>
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
