
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type DepartmentFormValues = {
  name: string;
  manager: string;
  location: string;
  budget: string;
  description: string;
};

const DepartmentForm = () => {
  const { toast } = useToast();
  const form = useForm<DepartmentFormValues>({
    defaultValues: {
      name: "",
      manager: "",
      location: "",
      budget: "",
      description: "",
    },
  });

  function onSubmit(data: DepartmentFormValues) {
    console.log(data);
    toast({
      title: "Department Added",
      description: `${data.name} department has been successfully added.`,
    });
    form.reset();
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add New Department</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Human Resources" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="manager"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department Manager</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a manager" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="john_smith">John Smith</SelectItem>
                        <SelectItem value="sarah_johnson">Sarah Johnson</SelectItem>
                        <SelectItem value="michael_brown">Michael Brown</SelectItem>
                        <SelectItem value="emily_wilson">Emily Wilson</SelectItem>
                        <SelectItem value="david_lee">David Lee</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Floor 3, Main Building" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Budget</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., $500,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the department's responsibilities and objectives..."
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Save Department</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DepartmentForm;
