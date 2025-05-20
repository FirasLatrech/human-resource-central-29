
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-accent to-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 flex flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <Shield className="h-10 w-10 text-destructive" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Access Denied
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
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
