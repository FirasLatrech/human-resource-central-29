
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Filter } from "lucide-react";

const Training = () => {
  const [activeTab, setActiveTab] = React.useState("list");

  return (
    <Layout title="Training Management">
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="list">Training Programs</TabsTrigger>
              <TabsTrigger value="add">Add Program</TabsTrigger>
            </TabsList>
            
            {activeTab === "list" && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button size="sm" className="flex items-center gap-1" onClick={() => setActiveTab("add")}>
                  <Calendar className="h-4 w-4" />
                  <span>Add Program</span>
                </Button>
              </div>
            )}
          </div>
          
          <TabsContent value="list" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">No training programs found.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="add" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">Training program form will go here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Training;
