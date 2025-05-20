
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JoyRide, { STATUS, CallBackProps, ACTIONS } from "react-joyride";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Define the strict placement type
type Placement = "top" | "bottom" | "left" | "right";

// Define the step type with strict placement
interface TourStep {
  target: string;
  content: React.ReactNode;
  title: string;
  placement: Placement; // Ensure placement is strictly typed
  disableBeacon?: boolean;
}

const GuidedTour: React.FC = () => {
  const [run, setRun] = useState(false);
  const location = useLocation();
  const [steps, setSteps] = useState<TourStep[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Check if tour has been completed before
    const tourCompleted = localStorage.getItem("tourCompleted");
    
    if (location.pathname === "/dashboard" && !tourCompleted) {
      setRun(true);
      setSteps(dashboardSteps);
    } else if (location.pathname === "/employees" && !tourCompleted) {
      setRun(true);
      setSteps(employeesSteps);
    } else if (location.pathname === "/leave" && !tourCompleted) {
      setRun(true);
      setSteps(leaveSteps);
    } else {
      setRun(false);
    }
  }, [location.pathname]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, action } = data;

    if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
      setRun(false);
      // Mark tour as completed in localStorage
      localStorage.setItem("tourCompleted", "true");
      
      // Show toast when tour is completed or skipped
      toast({
        title: status === STATUS.FINISHED ? "Tour Completed!" : "Tour Skipped",
        description: status === STATUS.FINISHED 
          ? "You've completed the guided tour. You can restart it anytime from the help menu."
          : "You've skipped the guided tour. You can restart it anytime from the help menu.",
      });
    }

    // If user presses back button, restart the tour
    if (action === ACTIONS.RESET) {
      setRun(true);
    }
  };

  const Tooltip = ({
    step,
    tooltipProps,
    isLastStep,
    primaryProps,
    skipProps,
    backProps,
  }: any) => (
    <Card className="w-80 p-0 z-50">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
        <div className="text-sm text-muted-foreground mb-4">{step.content}</div>
        
        <div className="flex justify-between">
          {step.index > 0 && (
            <Button variant="outline" size="sm" {...backProps}>
              Back
            </Button>
          )}
          <div className="grow" />
          <Button variant="ghost" size="sm" {...skipProps}>
            Skip
          </Button>
          <Button size="sm" {...primaryProps}>
            {isLastStep ? "Finish" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  // Define tour steps for each section with proper typing
  const dashboardSteps: TourStep[] = [
    {
      target: "body",
      content: "Welcome to the HR Management System! This tour will guide you through the main features.",
      title: "Welcome",
      placement: "center" as unknown as Placement, // Handle special case for body
    },
    {
      target: "#dashboard-stats",
      content: "Here you can see key metrics for your organization at a glance.",
      title: "Dashboard Statistics",
      placement: "bottom",
    },
    {
      target: "#recent-activities",
      content: "View recent activities across the system to stay informed about changes.",
      title: "Recent Activities",
      placement: "top",
    }
  ];

  const employeesSteps: TourStep[] = [
    {
      target: "#employee-table",
      content: "Here you can view and manage all employees in your organization.",
      title: "Employee Management",
      placement: "top",
    },
    {
      target: "#add-employee-button",
      content: "Click here to add a new employee to the system.",
      title: "Add Employee",
      placement: "bottom",
    }
  ];

  const leaveSteps: TourStep[] = [
    {
      target: "#leave-requests",
      content: "View all leave requests and their status.",
      title: "Leave Requests",
      placement: "top",
    },
    {
      target: "#request-leave-button",
      content: "Click here to submit a new leave request.",
      title: "Request Leave",
      placement: "right",
    }
  ];

  if (!run || steps.length === 0) return null;

  return (
    <JoyRide
      steps={steps}
      run={run}
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: "#6366f1", // Use primary color from our theme
          zIndex: 1000,
        },
      }}
      tooltipComponent={Tooltip}
    />
  );
};

export default GuidedTour;
