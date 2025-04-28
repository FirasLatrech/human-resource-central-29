
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import EmployeeTable from "@/components/employees/EmployeeTable";
import EmployeeForm from "@/components/employees/EmployeeForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Download, Upload, Filter } from "lucide-react";

const Employees = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <Layout title="Employees">
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="list">Employee List</TabsTrigger>
              <TabsTrigger value="add">Add Employee</TabsTrigger>
            </TabsList>
            
            {activeTab === "list" && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Upload className="h-4 w-4" />
                  <span>Import</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
                <Button size="sm" className="flex items-center gap-1" onClick={() => setActiveTab("add")}>
                  <UserPlus className="h-4 w-4" />
                  <span>Add Employee</span>
                </Button>
              </div>
            )}
          </div>
          
          <TabsContent value="list" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4">
                <EmployeeTable />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="add" className="mt-0">
            <EmployeeForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Employees;
