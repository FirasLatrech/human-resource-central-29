
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-hr-light to-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 flex flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <Shield className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Access Denied
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          You don't have the necessary permissions to access this page.
        </p>
        <div className="mt-10">
          <Button asChild>
            <Link to="/dashboard">Return to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
