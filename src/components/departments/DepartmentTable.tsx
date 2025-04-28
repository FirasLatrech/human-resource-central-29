
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
import { MoreHorizontal, Pencil, Trash2, Users } from "lucide-react";

// Sample department data for demonstration
const departments = [
  {
    id: "DEP001",
    name: "Information Technology",
    manager: "John Smith",
    employeeCount: 42,
    location: "Floor 3, Main Building",
    budget: "$1,250,000",
  },
  {
    id: "DEP002",
    name: "Human Resources",
    manager: "Sarah Johnson",
    employeeCount: 18,
    location: "Floor 2, Main Building",
    budget: "$750,000",
  },
  {
    id: "DEP003",
    name: "Marketing",
    manager: "Michael Brown",
    employeeCount: 34,
    location: "Floor 4, East Wing",
    budget: "$1,500,000",
  },
  {
    id: "DEP004",
    name: "Finance",
    manager: "Emily Wilson",
    employeeCount: 23,
    location: "Floor 5, West Wing",
    budget: "$2,000,000",
  },
  {
    id: "DEP005",
    name: "Operations",
    manager: "David Lee",
    employeeCount: 29,
    location: "Floor 1, Annex Building",
    budget: "$1,800,000",
  },
];

const DepartmentTable = () => {
  return (
    <Table>
      <TableCaption>A list of all departments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Employees</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {departments.map((department) => (
          <TableRow key={department.id}>
            <TableCell className="font-medium">{department.id}</TableCell>
            <TableCell>{department.name}</TableCell>
            <TableCell>{department.manager}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <span className="mr-2">{department.employeeCount}</span>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  <Users className="h-3 w-3 mr-1" />
                  <span>Team</span>
                </Badge>
              </div>
            </TableCell>
            <TableCell>{department.location}</TableCell>
            <TableCell>{department.budget}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>View employees</span>
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

export default DepartmentTable;
