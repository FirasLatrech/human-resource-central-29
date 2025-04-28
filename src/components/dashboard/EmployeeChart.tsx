
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const departmentData = [
  { name: "IT", employees: 42 },
  { name: "HR", employees: 18 },
  { name: "Finance", employees: 23 },
  { name: "Marketing", employees: 34 },
  { name: "Operations", employees: 29 },
  { name: "Sales", employees: 38 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-hr-primary">{`${payload[0].value} employees`}</p>
      </div>
    );
  }
  return null;
};

const EmployeeChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={departmentData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="employees" 
                fill="#9b87f5" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeChart;
