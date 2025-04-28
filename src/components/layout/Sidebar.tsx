
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Users, 
  Building2, 
  Calendar,
  LayoutDashboard, 
  BookOpen,
  UserPlus,
  Settings,
  LogOut,
  Clock,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  to: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
};

const SidebarItem = ({ to, icon: Icon, label, active }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        active
          ? "bg-hr-primary text-white"
          : "hover:bg-hr-light"
      )}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const { pathname } = useLocation();
  
  const mainNavItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/employees", icon: Users, label: "Employees" },
    { to: "/departments", icon: Building2, label: "Departments" },
    { to: "/leave", icon: Calendar, label: "Leave" },
  ];
  
  const secondaryNavItems = [
    { to: "/training", icon: BookOpen, label: "Training" },
    { to: "/recruitment", icon: UserPlus, label: "Recruitment" },
    { to: "/benefits", icon: FileText, label: "Benefits & Salary" },
    { to: "/positions", icon: Clock, label: "Positions & Grades" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-hr-primary">HR Central</h1>
      </div>
      
      <div className="flex-1 px-3 py-2 space-y-1">
        <div className="mb-6">
          {mainNavItems.map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={pathname === item.to}
            />
          ))}
        </div>
        
        <div className="pt-2 border-t border-gray-200">
          <p className="px-3 py-1 text-sm font-medium text-gray-400">More Features</p>
          {secondaryNavItems.map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={pathname === item.to}
            />
          ))}
        </div>
      </div>
      
      <div className="p-3 border-t border-gray-200 space-y-1">
        <SidebarItem to="/settings" icon={Settings} label="Settings" active={pathname === "/settings"} />
        <button className="flex items-center gap-3 px-3 py-2 rounded-md w-full text-left transition-colors text-gray-600 hover:bg-red-50 hover:text-red-600">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
