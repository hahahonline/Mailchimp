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

const items = [
  {
    name: "Yuri Queiroz Paiva",
    email: "yuri.paiva@sempreceub.com",
    phone: "(31) 98765-4321",
    createdAt: "14/09/2021",
  },
  {
    name: "Joao Vitor Braga",
    email: "joaovitorbragalima@sempreceub.com",
    phone: "(31) 98765-4321",
    createdAt: "14/09/2021",
  },
  {
    name: "Markus Vinicius de Oliveira Viana",
    email: "mvdeov@sempreceub.com",
    phone: "(31) 98765-4321",
    createdAt: "14/09/2021",
  },
  {
    name: "Robert Martins dos Santos",
    email: "robertpc2021@sempreceub.com",
    phone: "(31) 98765-4321",
    createdAt: "14/09/2021",
  },
  {
    name: "Ana Clara Souza",
    email: "anaclara.souza@sempreceub.com",
    phone: "(31) 99876-5432",
    createdAt: "15/09/2021",
  },
  {
    name: "Lucas Pereira",
    email: "lucas.pereira@sempreceub.com",
    phone: "(31) 98765-1234",
    createdAt: "15/09/2021",
  },
  {
    name: "Mariana Ferreira",
    email: "mariana.ferreira@sempreceub.com",
    phone: "(31) 91234-5678",
    createdAt: "15/09/2021",
  },
  {
    name: "Carlos Eduardo Lima",
    email: "carlos.eduardo@sempreceub.com",
    phone: "(31) 97654-3210",
    createdAt: "15/09/2021",
  },
  {
    name: "Julia Mendes",
    email: "julia.mendes@sempreceub.com",
    phone: "(31) 96543-2109",
    createdAt: "16/09/2021",
  },
  {
    name: "Pedro Henrique Silva",
    email: "pedro.silva@sempreceub.com",
    phone: "(31) 95432-1098",
    createdAt: "16/09/2021",
  },
];

export function AllContactsTable() {
  return (
    <div className="flex flex-col gap-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Celular</TableHead>
            <TableHead>Data do registro</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.email}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
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
