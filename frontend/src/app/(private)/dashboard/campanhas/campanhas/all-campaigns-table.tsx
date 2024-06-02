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
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Clientes",
    audienceCount: 10,
    createdAt: "14/09/2021",
  },
  {
    title: "Fornecedores",
    audienceCount: 15,
    createdAt: "15/09/2021",
  },
  {
    title: "Equipe de Vendas",
    audienceCount: 8,
    createdAt: "16/09/2021",
  },
  {
    title: "Desenvolvedores",
    audienceCount: 12,
    createdAt: "17/09/2021",
  },
  {
    title: "Marketing",
    audienceCount: 7,
    createdAt: "18/09/2021",
  },
  {
    title: "Suporte Técnico",
    audienceCount: 9,
    createdAt: "19/09/2021",
  },
  {
    title: "Recursos Humanos",
    audienceCount: 5,
    createdAt: "20/09/2021",
  },
  {
    title: "Financeiro",
    audienceCount: 6,
    createdAt: "21/09/2021",
  },
  {
    title: "Administrativo",
    audienceCount: 4,
    createdAt: "22/09/2021",
  },
  {
    title: "Gestão de Projetos",
    audienceCount: 11,
    createdAt: "23/09/2021",
  },
];

export function AllCampaignsTable() {
  return (
    <div className="flex flex-col gap-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Qtd. de participantes</TableHead>
            <TableHead>Data de envio</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.audienceCount}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell className="flex gap-4">
                <Button size="icon" variant="outline">
                  <Ellipsis className="h-4 w-4" />
                </Button>
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
