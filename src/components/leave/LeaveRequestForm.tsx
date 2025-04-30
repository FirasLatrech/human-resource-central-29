
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { format, addDays, differenceInBusinessDays } from "date-fns";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { DialogClose } from "@/components/ui/dialog";

interface LeaveRequestFormProps {
  onSuccess?: () => void;
}

type FormValues = {
  leaveType: string;
  startDate: Date;
  endDate: Date;
  reason: string;
};

export function LeaveRequestForm({ onSuccess }: LeaveRequestFormProps) {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessDays, setBusinessDays] = useState(0);

  const form = useForm<FormValues>({
    defaultValues: {
      leaveType: "",
      reason: "",
    },
  });

  const { watch } = form;
  const startDate = watch("startDate");
  const endDate = watch("endDate");

  // Calculate business days between dates
  useEffect(() => {
    if (startDate && endDate) {
      const days = differenceInBusinessDays(endDate, startDate) + 1;
      setBusinessDays(Math.max(0, days));
    } else {
      setBusinessDays(0);
    }
  }, [startDate, endDate]);

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create leave request object
    const leaveRequest = {
      id: `leave-${Date.now()}`,
      employeeId: user?.id,
      employeeName: user?.name,
      leaveType: values.leaveType,
      startDate: values.startDate,
      endDate: values.endDate,
      days: businessDays,
      reason: values.reason,
      status: "pending",
      createdAt: new Date(),
    };
    
    // Save to localStorage for demo purposes
    const existingRequests = JSON.parse(localStorage.getItem("leaveRequests") || "[]");
    existingRequests.push(leaveRequest);
    localStorage.setItem("leaveRequests", JSON.stringify(existingRequests));
    
    toast({
      title: "Leave Request Submitted",
      description: "Your leave request has been submitted successfully.",
    });
    
    setIsSubmitting(false);
    
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="leaveType"
            rules={{ required: "Please select a leave type" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leave Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a leave type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="annual">Annual Leave</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="personal">Personal Leave</SelectItem>
                    <SelectItem value="maternity">Maternity Leave</SelectItem>
                    <SelectItem value="paternity">Paternity Leave</SelectItem>
                    <SelectItem value="unpaid">Unpaid Leave</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startDate"
            rules={{ required: "Start date is required" }}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            rules={{ 
              required: "End date is required",
              validate: (value) => {
                if (startDate && value < startDate) {
                  return "End date must be after start date";
                }
                return true;
              }
            }}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => startDate ? date < startDate : date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Duration</FormLabel>
            <Input value={`${businessDays} business day(s)`} readOnly className="bg-gray-50" />
            <FormDescription>
              Calculated based on business days
            </FormDescription>
          </FormItem>
        </div>

        <FormField
          control={form.control}
          name="reason"
          rules={{ required: "Reason is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for Leave</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Please provide details about the reason for your leave request" 
                  {...field} 
                  className="h-20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button 
            type="submit" 
            className="bg-hr-primary hover:bg-hr-primary/90" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
