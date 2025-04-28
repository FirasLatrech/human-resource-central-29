
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, UserPlus, FileText, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const activityData = [
  { 
    id: 1, 
    type: "leave", 
    title: "Leave Request Approved", 
    description: "Sarah Johnson's leave request was approved",
    time: "2 hours ago",
    icon: Calendar
  },
  { 
    id: 2, 
    type: "new_employee", 
    title: "New Employee Added", 
    description: "Michael Stevens joined as Senior Developer",
    time: "Yesterday",
    icon: UserPlus
  },
  { 
    id: 3, 
    type: "contract", 
    title: "Contract Generated", 
    description: "Employment contract created for Lisa Wong",
    time: "2 days ago",
    icon: FileText
  },
  { 
    id: 4, 
    type: "attendance", 
    title: "Late Attendance", 
    description: "3 employees marked late for today",
    time: "Today",
    icon: Clock
  },
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activityData.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={cn(
                "p-2 rounded-lg",
                activity.type === "leave" ? "bg-blue-100 text-blue-600" :
                activity.type === "new_employee" ? "bg-green-100 text-green-600" :
                activity.type === "contract" ? "bg-purple-100 text-purple-600" :
                "bg-amber-100 text-amber-600"
              )}>
                <activity.icon size={16} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <span className="text-xs text-gray-400 mt-1">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
