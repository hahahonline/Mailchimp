import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MessageSquareMore } from "lucide-react";

const items = [
  {
    title: "Promoção de verão",
    audience: "1000",
    date: "01/01/2021",
  },
  {
    title: "Promoção de inverno",
    audience: "2000",
    date: "01/01/2021",
  },
  {
    title: "Promoção de primavera",
    audience: "3000",
    date: "01/01/2021",
  },
  {
    title: "Promoção de outono",
    audience: "4000",
    date: "01/01/2021",
  },
];

export function LastCampaignSentTable() {
  return (
    <div className="flex flex-col gap-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Qtd. audiência</TableHead>
            <TableHead>Data de envio</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.audience}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <MessageSquareMore
                  size={24}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination />
    </div>
  );
}

function TablePagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
