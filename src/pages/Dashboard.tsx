
import React from "react";
import Layout from "@/components/layout/Layout";
import StatCard from "@/components/dashboard/StatCard";
import EmployeeChart from "@/components/dashboard/EmployeeChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Users, Calendar, Building2, Award, UserCheck } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Employees"
            value="184"
            icon={Users}
            description="Active workforce"
            variant="primary"
            trend={{ value: 5, positive: true }}
          />
          <StatCard
            title="Departments"
            value="8"
            icon={Building2}
            description="Across organization"
            variant="secondary"
          />
          <StatCard
            title="Leave Requests"
            value="12"
            icon={Calendar}
            description="Pending approval"
            variant="default"
            trend={{ value: 3, positive: true }}
          />
          <StatCard
            title="New Hires"
            value="7"
            icon={UserCheck}
            description="This month"
            variant="accent"
            trend={{ value: 12, positive: true }}
          />
        </div>

        {/* Charts & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EmployeeChart />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-hr-light rounded-lg p-4 text-center hover:bg-hr-primary/10 transition-colors cursor-pointer">
              <UserCheck className="h-6 w-6 mx-auto mb-2 text-hr-primary" />
              <span className="text-sm font-medium">New Employee</span>
            </div>
            <div className="bg-hr-light rounded-lg p-4 text-center hover:bg-hr-primary/10 transition-colors cursor-pointer">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-hr-primary" />
              <span className="text-sm font-medium">Leave Request</span>
            </div>
            <div className="bg-hr-light rounded-lg p-4 text-center hover:bg-hr-primary/10 transition-colors cursor-pointer">
              <Award className="h-6 w-6 mx-auto mb-2 text-hr-primary" />
              <span className="text-sm font-medium">Add Position</span>
            </div>
            <div className="bg-hr-light rounded-lg p-4 text-center hover:bg-hr-primary/10 transition-colors cursor-pointer">
              <Building2 className="h-6 w-6 mx-auto mb-2 text-hr-primary" />
              <span className="text-sm font-medium">New Department</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
