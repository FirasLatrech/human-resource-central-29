
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react";

// Sample employee data for demonstration
const employees = [
  {
    id: "EMP001",
    name: "John Smith",
    position: "Software Engineer",
    department: "IT",
    joinDate: "2021-05-12",
    status: "Active",
    email: "john.smith@example.com",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    position: "HR Manager",
    department: "Human Resources",
    joinDate: "2020-03-14",
    status: "Active",
    email: "sarah.johnson@example.com",
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    position: "Marketing Specialist",
    department: "Marketing",
    joinDate: "2022-01-10",
    status: "Active",
    email: "michael.brown@example.com",
  },
  {
    id: "EMP004",
    name: "Emily Wilson",
    position: "Financial Analyst",
    department: "Finance",
    joinDate: "2021-09-22",
    status: "On Leave",
    email: "emily.wilson@example.com",
  },
  {
    id: "EMP005",
    name: "David Lee",
    position: "Product Manager",
    department: "Product",
    joinDate: "2019-11-05",
    status: "Active",
    email: "david.lee@example.com",
  },
];

const EmployeeTable = () => {
  return (
    <Table>
      <TableCaption>A list of all employees.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell className="font-medium">{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.position}</TableCell>
            <TableCell>{employee.department}</TableCell>
            <TableCell>
              <Badge
                variant={employee.status === "Active" ? "default" : "secondary"}
                className={
                  employee.status === "Active"
                    ? "bg-green-100 text-green-800 hover:bg-green-200"
                    : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                }
              >
                {employee.status}
              </Badge>
            </TableCell>
            <TableCell>
              {new Date(employee.joinDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>View details</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Pencil className="h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 text-red-600 focus:text-red-600">
                    <Trash2 className="h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeTable;
