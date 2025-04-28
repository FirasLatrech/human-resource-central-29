
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter, Users } from "lucide-react";

const Recruitment = () => {
  const [activeTab, setActiveTab] = React.useState("jobs");

  return (
    <Layout title="Recruitment">
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="jobs">Job Listings</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="post">Post Job</TabsTrigger>
            </TabsList>
            
            {activeTab !== "post" && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button size="sm" className="flex items-center gap-1" onClick={() => setActiveTab("post")}>
                  <Users className="h-4 w-4" />
                  <span>Post Job</span>
                </Button>
              </div>
            )}
          </div>
          
          <TabsContent value="jobs" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">No job listings found.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">No applications received yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="post" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <p className="text-muted-foreground">Job posting form will go here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Recruitment;
