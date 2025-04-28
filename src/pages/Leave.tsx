
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import LeaveTable from "@/components/leave/LeaveTable";
import { LeaveRequestDialog } from "@/components/leave/LeaveRequestDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Leave = () => {
  return (
    <Layout title="Leave Management">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Annual Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">12/24</div>
                  <p className="text-xs text-muted-foreground">days used</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Sick Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">3/10</div>
                  <p className="text-xs text-muted-foreground">days used</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">awaiting approval</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Today's Absences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">employees</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">
                All Requests
                <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-500">52</Badge>
              </TabsTrigger>
              <TabsTrigger value="pending">
                Pending
                <Badge variant="secondary" className="ml-2 bg-amber-100 text-amber-700">5</Badge>
              </TabsTrigger>
              <TabsTrigger value="approved">
                Approved
                <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">42</Badge>
              </TabsTrigger>
              <TabsTrigger value="rejected">
                Rejected
                <Badge variant="secondary" className="ml-2 bg-red-100 text-red-700">5</Badge>
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <LeaveRequestDialog />
            </div>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4">
                <LeaveTable />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pending" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4">
                <LeaveTable />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="approved" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4">
                <LeaveTable />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="rejected" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4">
                <LeaveTable />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Leave;
