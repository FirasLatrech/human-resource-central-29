
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
  FileText,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type SidebarItemProps = {
  to: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarItem = ({ to, icon: Icon, label, active, onClick }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        active
          ? "bg-hr-primary text-white"
          : "hover:bg-hr-light"
      )}
      onClick={onClick}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const { pathname } = useLocation();
  const { user, logout, hasPermission } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    toast.success("You have been logged out");
    navigate("/login");
  };

  // Define navigation items with permission checks
  const mainNavItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", permission: null },
    { to: "/employees", icon: Users, label: "Employees", permission: "view_employees" },
    { to: "/departments", icon: Building2, label: "Departments", permission: "manage_departments" },
    { to: "/leave", icon: Calendar, label: "Leave", permission: null },
  ];
  
  const secondaryNavItems = [
    { to: "/training", icon: BookOpen, label: "Training", permission: null },
    { to: "/recruitment", icon: UserPlus, label: "Recruitment", permission: "view_recruitment" },
    { to: "/benefits", icon: FileText, label: "Benefits & Salary", permission: "manage_benefits" },
    { to: "/positions", icon: Clock, label: "Positions & Grades", permission: "view_positions" },
  ];

  // Filter items based on user permissions
  const filteredMainItems = mainNavItems.filter(item => 
    item.permission === null || (user && hasPermission(item.permission))
  );
  
  const filteredSecondaryItems = secondaryNavItems.filter(item => 
    item.permission === null || (user && hasPermission(item.permission))
  );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-hr-primary">HR Central</h1>
        {user && (
          <p className="text-sm text-gray-500 mt-1">
            Logged in as <span className="font-medium">{user.role}</span>
          </p>
        )}
      </div>
      
      <div className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        <div className="mb-6">
          {filteredMainItems.map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={pathname === item.to}
            />
          ))}
        </div>
        
        {filteredSecondaryItems.length > 0 && (
          <div className="pt-2 border-t border-gray-200">
            <p className="px-3 py-1 text-sm font-medium text-gray-400">More Features</p>
            {filteredSecondaryItems.map((item) => (
              <SidebarItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                active={pathname === item.to}
              />
            ))}
          </div>
        )}
        
        {user?.role === "admin" && (
          <div className="pt-2 border-t border-gray-200 mt-4">
            <p className="px-3 py-1 text-sm font-medium text-gray-400">Admin</p>
            <SidebarItem to="/settings" icon={Settings} label="Settings" active={pathname === "/settings"} />
            <SidebarItem to="/rbac" icon={ShieldCheck} label="Access Control" active={pathname === "/rbac"} />
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-gray-200 space-y-1">
        <button 
          className="flex items-center gap-3 px-3 py-2 rounded-md w-full text-left transition-colors text-gray-600 hover:bg-red-50 hover:text-red-600"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
