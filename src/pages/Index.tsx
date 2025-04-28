
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Calendar, CheckCircle, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hr-light to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-hr-primary">HR Central</h1>
          <Button asChild variant="outline">
            <Link to="/dashboard">Log In</Link>
          </Button>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Human Resource <span className="text-hr-primary">Management Platform</span>
              </h1>
              <p className="text-xl text-gray-600">
                Streamline your HR operations with our comprehensive platform. Manage your employees, departments, leaves, and more with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-hr-primary hover:bg-hr-primary/90">
                  <Link to="/dashboard" className="flex items-center gap-2">
                    Get Started <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#features">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 transform rotate-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-hr-primary/10 p-5 rounded-lg flex flex-col items-center text-center">
                    <Users className="h-8 w-8 mb-2 text-hr-primary" />
                    <h3 className="font-medium">Employee Management</h3>
                  </div>
                  <div className="bg-hr-secondary/10 p-5 rounded-lg flex flex-col items-center text-center">
                    <Building2 className="h-8 w-8 mb-2 text-hr-secondary" />
                    <h3 className="font-medium">Department Management</h3>
                  </div>
                  <div className="bg-hr-accent/10 p-5 rounded-lg flex flex-col items-center text-center">
                    <Calendar className="h-8 w-8 mb-2 text-hr-accent" />
                    <h3 className="font-medium">Leave Management</h3>
                  </div>
                  <div className="bg-green-100 p-5 rounded-lg flex flex-col items-center text-center">
                    <CheckCircle className="h-8 w-8 mb-2 text-green-600" />
                    <h3 className="font-medium">Attendance Tracking</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="features" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need to manage your human resources effectively</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Users className="h-10 w-10 mb-4 text-hr-primary" />
                <h3 className="text-xl font-medium mb-2">Employee Management</h3>
                <p className="text-gray-600">
                  Complete employee profiles, history tracking, document management, and more.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Building2 className="h-10 w-10 mb-4 text-hr-secondary" />
                <h3 className="text-xl font-medium mb-2">Department Structure</h3>
                <p className="text-gray-600">
                  Organize your company structure, manage positions, and track department budgets.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Calendar className="h-10 w-10 mb-4 text-hr-accent" />
                <h3 className="text-xl font-medium mb-2">Leave Management</h3>
                <p className="text-gray-600">
                  Request and approve leave, track balances, and plan workforce availability.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-hr-primary hover:bg-hr-primary/90">
                <Link to="/dashboard">Explore the Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-hr-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HR Central</h3>
              <p className="text-gray-300">
                A comprehensive human resource management platform designed to streamline HR operations.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Employee Management</li>
                <li>Department Management</li>
                <li>Leave Management</li>
                <li>Recruitment</li>
                <li>Training</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@hrcentral.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Main St, City, Country</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HR Central. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
