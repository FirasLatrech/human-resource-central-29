
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import PrivateRoute from "@/components/auth/PrivateRoute";
import GuidedTour from "@/components/tour/GuidedTour";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import Leave from "./pages/Leave";
import Training from "./pages/Training";
import Recruitment from "./pages/Recruitment";
import Benefits from "./pages/Benefits";
import Positions from "./pages/Positions";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Employee management - Admin & Manager only */}
            <Route element={<PrivateRoute requiredPermission="manage_employees" />}>
              <Route path="/employees" element={<Employees />} />
            </Route>

            {/* Department management - Admin only */}
            <Route element={<PrivateRoute requiredPermission="manage_departments" />}>
              <Route path="/departments" element={<Departments />} />
            </Route>

            {/* Leave management - All users */}
            <Route element={<PrivateRoute />}>
              <Route path="/leave" element={<Leave />} />
            </Route>

            {/* Training management - All users */}
            <Route element={<PrivateRoute />}>
              <Route path="/training" element={<Training />} />
            </Route>

            {/* Recruitment - Admin & Manager only */}
            <Route element={<PrivateRoute requiredPermission="manage_recruitment" />}>
              <Route path="/recruitment" element={<Recruitment />} />
            </Route>

            {/* Benefits - Admin only */}
            <Route element={<PrivateRoute requiredPermission="manage_benefits" />}>
              <Route path="/benefits" element={<Benefits />} />
            </Route>

            {/* Positions - Admin only */}
            <Route element={<PrivateRoute requiredPermission="manage_positions" />}>
              <Route path="/positions" element={<Positions />} />
            </Route>

            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GuidedTour />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
