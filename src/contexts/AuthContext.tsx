
import React, { createContext, useContext, useState, useEffect } from "react";

// Define user roles
export type UserRole = "admin" | "employee" | "manager";

// Define user object structure
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  departmentId?: string;
}

// Define the context value shape
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

// Mock user data for demonstration
const mockUsers = [
  {
    id: "1",
    name: "John Admin",
    email: "admin@hrcentral.com",
    role: "admin" as UserRole,
  },
  {
    id: "2",
    name: "Sarah Employee",
    email: "employee@hrcentral.com",
    role: "employee" as UserRole,
    departmentId: "1",
  },
  {
    id: "3",
    name: "Michael Manager",
    email: "manager@hrcentral.com",
    role: "manager" as UserRole,
    departmentId: "2",
  },
];

// Permission mapping based on roles
const rolePermissions: Record<UserRole, string[]> = {
  admin: ["manage_employees", "manage_departments", "manage_leaves", "approve_leaves", "view_reports", "manage_positions", "manage_recruitment", "manage_training", "manage_benefits"],
  manager: ["view_employees", "manage_leaves", "approve_leaves", "view_reports", "view_positions", "view_recruitment", "manage_training"],
  employee: ["view_profile", "request_leave", "view_calendar", "view_training"],
};

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  hasPermission: () => false,
});

// Custom hook for using the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component to wrap the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function - in a real app, this would make an API request
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
    } else {
      throw new Error("Invalid credentials");
    }
    
    setIsLoading(false);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if user has a specific permission
  const hasPermission = (permission: string) => {
    if (!user) return false;
    
    const permissions = rolePermissions[user.role];
    return permissions.includes(permission);
  };

  // Provide the auth context to the app
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
