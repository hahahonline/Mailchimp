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
import { PencilLine, Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetGroupContactsDialog } from "./get-group-contacts-dialog";
import { AddContactsToGroupDialog } from "./add-contacts-to-group-dialog";
import { EditGroupDialog } from "./edit-group-dialog";

const items = [
  {
    name: "Clientes",
    participantsCount: 10,
    createdAt: "14/09/2021",
  },
  {
    name: "Fornecedores",
    participantsCount: 15,
    createdAt: "15/09/2021",
  },
  {
    name: "Equipe de Vendas",
    participantsCount: 8,
    createdAt: "16/09/2021",
  },
  {
    name: "Desenvolvedores",
    participantsCount: 12,
    createdAt: "17/09/2021",
  },
  {
    name: "Marketing",
    participantsCount: 7,
    createdAt: "18/09/2021",
  },
  {
    name: "Suporte Técnico",
    participantsCount: 9,
    createdAt: "19/09/2021",
  },
  {
    name: "Recursos Humanos",
    participantsCount: 5,
    createdAt: "20/09/2021",
  },
  {
    name: "Financeiro",
    participantsCount: 6,
    createdAt: "21/09/2021",
  },
  {
    name: "Administrativo",
    participantsCount: 4,
    createdAt: "22/09/2021",
  },
  {
    name: "Gestão de Projetos",
    participantsCount: 11,
    createdAt: "23/09/2021",
  },
];

export function AllGroupsTable() {
  return (
    <div className="flex flex-col gap-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Qtd. de participantes</TableHead>
            <TableHead>Data do registro</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.participantsCount}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell className="flex gap-4">
                <GetGroupContactsDialog>
                  <Button size="icon" variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                </GetGroupContactsDialog>
                <AddContactsToGroupDialog>
                  <Button size="icon" variant="outline">
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </AddContactsToGroupDialog>
                <EditGroupDialog>
                  <Button size="icon" variant="outline">
                    <PencilLine className="h-4 w-4" />
                  </Button>
                </EditGroupDialog>
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
