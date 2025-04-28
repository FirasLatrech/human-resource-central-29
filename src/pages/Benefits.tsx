
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter, Users } from "lucide-react";

const Benefits = () => {
  const [activeTab, setActiveTab] = React.useState("list");

  return (
    <Layout title="Benefits & Salary">
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="list">Benefits List</TabsTrigger>
              <TabsTrigger value="salary">Salary Structure</TabsTrigger>
              <TabsTrigger value="add">Add Benefit</TabsTrigger>
            </TabsList>
            
            {activeTab === "list" && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button size="sm" className="flex items-center gap-1" onClick={() => setActiveTab("add")}>
                  <Users className="h-4 w-4" />
                  <span>Add Benefit</span>
                </Button>
              </div>
            )}
          </div>
          
          <TabsContent value="list" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">No benefits found.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="salary" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">Salary structure will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="add" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">Benefit form will go here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Benefits;
