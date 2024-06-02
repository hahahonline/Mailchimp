import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "./ui/checkbox";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Contato ${a.length - i}`
);

export function ContactsSelector() {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-medium">
        Adicionar contatos à mensagem (opcional)
      </Label>
      <ScrollArea className="h-72 rounded-md border w-full">
        <div className="p-4">
          {tags.map((tag, index) => (
            <>
              {index !== 0 && <Separator className="my-4" />}
              <div key={tag} className="text-sm flex items-center gap-4">
                <Checkbox id="terms" />
                <span className="block">{tag}</span>
              </div>
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
