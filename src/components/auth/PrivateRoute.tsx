
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface PrivateRouteProps {
  requiredPermission?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredPermission }) => {
  const { isAuthenticated, isLoading, hasPermission } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // You could add a loading spinner here
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    // Redirect to unauthorized page if permission is required but not granted
    return <Navigate to="/unauthorized" replace />;
  }

  // Render child routes if authenticated and authorized
  return <Outlet />;
};

export default PrivateRoute;
