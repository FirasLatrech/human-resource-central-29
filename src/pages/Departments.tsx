
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import DepartmentTable from "@/components/departments/DepartmentTable";
import DepartmentForm from "@/components/departments/DepartmentForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Filter } from "lucide-react";

const Departments = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <Layout title="Departments">
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="list">Department List</TabsTrigger>
              <TabsTrigger value="add">Add Department</TabsTrigger>
            </TabsList>
            
            {activeTab === "list" && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button size="sm" className="flex items-center gap-1" onClick={() => setActiveTab("add")}>
                  <Building2 className="h-4 w-4" />
                  <span>Add Department</span>
                </Button>
              </div>
            )}
          </div>
          
          <TabsContent value="list" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4">
                <DepartmentTable />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="add" className="mt-0">
            <DepartmentForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Departments;
