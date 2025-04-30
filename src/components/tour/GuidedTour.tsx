
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Check, ChevronRight, HelpCircle, Info, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "react-router-dom";

interface TourStep {
  title: string;
  description: string;
  target?: string; // CSS selector for the element to highlight
  placement?: "right" | "left" | "top" | "bottom";
}

// Tour steps based on user role
const getTourSteps = (role: string): { [key: string]: TourStep[] } => {
  const commonSteps = [
    {
      title: "Welcome to HR Central",
      description: "This guided tour will show you how to use the HR Central platform effectively.",
    },
    {
      title: "Navigation Sidebar",
      description: "Use the sidebar to navigate between different sections of the application.",
      target: "aside",
      placement: "right",
    },
    {
      title: "Dashboard Overview",
      description: "The dashboard gives you a quick overview of the key metrics and recent activities.",
      target: "main",
      placement: "left",
    }
  ];

  const adminSteps = [
    ...commonSteps,
    {
      title: "Employee Management",
      description: "As an admin, you can add, edit, and delete employee records. You also have access to all departments and positions.",
    },
    {
      title: "Leave Approval",
      description: "Review and approve leave requests from employees through the Leave section.",
    },
    {
      title: "Reports and Analytics",
      description: "Access comprehensive reports and analytics to make data-driven decisions.",
    }
  ];

  const managerSteps = [
    ...commonSteps,
    {
      title: "Team Management",
      description: "As a manager, you can view employees in your department and manage their leave requests.",
    },
    {
      title: "Leave Approval",
      description: "Review and approve leave requests from employees in your department.",
    },
    {
      title: "Training Management",
      description: "Assign training modules to your team members and track their progress.",
    }
  ];

  const employeeSteps = [
    ...commonSteps,
    {
      title: "Your Profile",
      description: "View and update your personal information and employment details.",
    },
    {
      title: "Leave Requests",
      description: "Submit leave requests and check their approval status.",
    },
    {
      title: "Training Modules",
      description: "Access assigned training modules and track your progress.",
    }
  ];

  return {
    admin: adminSteps,
    manager: managerSteps,
    employee: employeeSteps,
    // Default to common steps if role not recognized
    default: commonSteps,
  };
};

const GuidedTour: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { user } = useAuth();
  const location = useLocation();
  const [tourCompleted, setTourCompleted] = useState<boolean>(() => {
    return localStorage.getItem("tourCompleted") === "true";
  });
  
  const role = user?.role || "default";
  const steps = getTourSteps(role)[role] || getTourSteps("default").default;

  // Open the tour automatically on first visit to dashboard
  useEffect(() => {
    if (location.pathname === "/dashboard" && !tourCompleted && user) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, tourCompleted, user]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeTour = () => {
    localStorage.setItem("tourCompleted", "true");
    setTourCompleted(true);
    setIsOpen(false);
    setCurrentStep(0);
  };

  const restartTour = () => {
    localStorage.removeItem("tourCompleted");
    setTourCompleted(false);
    setCurrentStep(0);
    setIsOpen(true);
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <>
      {/* Help button to trigger tour */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-white border-hr-primary/30 hover:bg-hr-primary/10"
        onClick={() => setIsOpen(true)}
      >
        <HelpCircle className="h-6 w-6 text-hr-primary" />
      </Button>

      {/* Tour dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{steps[currentStep].title}</DialogTitle>
            <DialogDescription>
              {steps[currentStep].description}
            </DialogDescription>
          </DialogHeader>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 mx-1 rounded-full ${
                  index === currentStep ? "bg-hr-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <DialogFooter className="flex flex-row justify-between sm:justify-between">
            <div>
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="mr-2"
              >
                Previous
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="bg-hr-primary hover:bg-hr-primary/90"
              >
                {isLastStep ? "Finish" : "Next"}
                {!isLastStep && <ChevronRight className="ml-1 h-4 w-4" />}
                {isLastStep && <Check className="ml-1 h-4 w-4" />}
              </Button>
            </div>
            {!isLastStep && (
              <Button
                type="button"
                variant="ghost"
                onClick={completeTour}
                className="text-gray-500"
              >
                Skip tour
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Feature highlight sheet - for targeted help */}
      {steps[currentStep].target && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side={steps[currentStep].placement as any || "right"}>
            <SheetHeader>
              <SheetTitle>{steps[currentStep].title}</SheetTitle>
              <SheetDescription>{steps[currentStep].description}</SheetDescription>
            </SheetHeader>
            <SheetFooter className="mt-auto">
              <Button onClick={handleNext} className="bg-hr-primary hover:bg-hr-primary/90">
                {isLastStep ? "Finish" : "Next"} 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default GuidedTour;
