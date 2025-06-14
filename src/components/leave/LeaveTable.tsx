
import React, { useState } from "react";
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
import { MoreHorizontal, Check, X, Clock, FileText } from "lucide-react";
import { LeaveDetailsDialog } from "./LeaveDetailsDialog";
import { toast } from "sonner";

// Sample leave data for demonstration
const initialLeaves = [
  {
    id: "LEA001",
    employee: "John Smith",
    type: "Annual Leave",
    startDate: "2023-06-15",
    endDate: "2023-06-20",
    duration: "5 days",
    status: "Approved",
    requestedOn: "2023-05-28",
    reason: "Family vacation to visit relatives overseas."
  },
  {
    id: "LEA002",
    employee: "Sarah Johnson",
    type: "Sick Leave",
    startDate: "2023-06-05",
    endDate: "2023-06-07",
    duration: "2 days",
    status: "Approved",
    requestedOn: "2023-06-04",
    reason: "Doctor recommended rest due to flu symptoms."
  },
  {
    id: "LEA003",
    employee: "Michael Brown",
    type: "Personal Leave",
    startDate: "2023-07-10",
    endDate: "2023-07-12",
    duration: "2 days",
    status: "Pending",
    requestedOn: "2023-06-20",
    reason: "Need to attend a family event."
  },
  {
    id: "LEA004",
    employee: "Emily Wilson",
    type: "Annual Leave",
    startDate: "2023-08-01",
    endDate: "2023-08-10",
    duration: "9 days",
    status: "Pending",
    requestedOn: "2023-06-25",
    reason: "Summer vacation with family."
  },
  {
    id: "LEA005",
    employee: "David Lee",
    type: "Sick Leave",
    startDate: "2023-06-22",
    endDate: "2023-06-23",
    duration: "1 day",
    status: "Rejected",
    requestedOn: "2023-06-21",
    reason: "Medical appointment."
  },
];

const LeaveTable = () => {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [selectedLeave, setSelectedLeave] = useState<null | typeof leaves[0]>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleViewDetails = (leave: typeof leaves[0]) => {
    setSelectedLeave(leave);
    setDetailsOpen(true);
  };

  const handleApprove = (id: string) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id ? { ...leave, status: "Approved" } : leave
      )
    );
    toast.success(`Leave request ${id} approved successfully.`);
  };

  const handleReject = (id: string) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id ? { ...leave, status: "Rejected" } : leave
      )
    );
    toast.success(`Leave request ${id} rejected successfully.`);
  };

  return (
    <>
      <Table>
        <TableCaption>A list of all leave requests.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaves.map((leave) => (
            <TableRow key={leave.id}>
              <TableCell className="font-medium">{leave.id}</TableCell>
              <TableCell>{leave.employee}</TableCell>
              <TableCell>{leave.type}</TableCell>
              <TableCell>{leave.duration}</TableCell>
              <TableCell>
                {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    leave.status === "Approved"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : leave.status === "Rejected"
                      ? "bg-red-50 text-red-700 border-red-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }
                >
                  {leave.status === "Approved" ? (
                    <Check className="h-3 w-3 mr-1" />
                  ) : leave.status === "Rejected" ? (
                    <X className="h-3 w-3 mr-1" />
                  ) : (
                    <Clock className="h-3 w-3 mr-1" />
                  )}
                  {leave.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {leave.status === "Pending" && (
                      <>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-green-600"
                          onClick={() => handleApprove(leave.id)}
                        >
                          <Check className="h-4 w-4" />
                          <span>Approve</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-red-600"
                          onClick={() => handleReject(leave.id)}
                        >
                          <X className="h-4 w-4" />
                          <span>Reject</span>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuItem onClick={() => handleViewDetails(leave)}>
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedLeave && (
        <LeaveDetailsDialog
          open={detailsOpen}
          onOpenChange={setDetailsOpen}
          leave={selectedLeave}
        />
      )}
    </>
  );
};

export default LeaveTable;
