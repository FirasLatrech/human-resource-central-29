
import React from "react";
import { format } from "date-fns";
import { Check, Clock, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type LeaveDetailsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  leave: {
    id: string;
    employee: string;
    type: string;
    startDate: string;
    endDate: string;
    duration: string;
    status: string;
    requestedOn: string;
    reason?: string;
  };
};

export function LeaveDetailsDialog({
  open,
  onOpenChange,
  leave,
}: LeaveDetailsProps) {
  const handleApprove = () => {
    // In a real application, this would call an API endpoint to update the leave status
    toast.success(`Leave request ${leave.id} approved successfully.`);
    onOpenChange(false);
  };

  const handleReject = () => {
    // In a real application, this would call an API endpoint to update the leave status
    toast.success(`Leave request ${leave.id} rejected successfully.`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Leave Request Details</DialogTitle>
          <DialogDescription>
            Review the details of this leave request.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-muted-foreground">Request ID:</span>
            <span className="font-mono">{leave.id}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-muted-foreground">Employee:</span>
            <span>{leave.employee}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-muted-foreground">Leave Type:</span>
            <span>{leave.type}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-muted-foreground">Dates:</span>
            <span>
              {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()} ({leave.duration})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-muted-foreground">Status:</span>
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
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-muted-foreground">Requested On:</span>
            <span>{new Date(leave.requestedOn).toLocaleDateString()}</span>
          </div>

          {leave.reason && (
            <div className="space-y-2">
              <span className="font-medium text-muted-foreground">Reason:</span>
              <div className="rounded-md bg-muted p-3 text-sm">
                {leave.reason}
              </div>
            </div>
          )}
        </div>

        {leave.status === "Pending" && (
          <DialogFooter className="flex justify-between sm:justify-end space-x-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button variant="destructive" onClick={handleReject}>
              <X className="mr-2 h-4 w-4" /> Reject
            </Button>
            <Button variant="default" onClick={handleApprove}>
              <Check className="mr-2 h-4 w-4" /> Approve
            </Button>
          </DialogFooter>
        )}

        {leave.status !== "Pending" && (
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
