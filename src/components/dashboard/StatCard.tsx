
import React from "react";
import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg p-6 flex flex-col space-y-2 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-200",
        primary: "bg-hr-primary/10 border border-hr-primary/20",
        secondary: "bg-hr-secondary/10 border border-hr-secondary/20",
        accent: "bg-hr-accent/10 border border-hr-accent/20",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface StatCardProps extends VariantProps<typeof cardVariants> {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
  trend,
  variant,
  className
}: StatCardProps) => {
  return (
    <div className={cn(cardVariants({ variant }), className)}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className={cn(
          "p-2 rounded-lg",
          variant === "primary" ? "bg-hr-primary/20 text-hr-primary" : 
          variant === "secondary" ? "bg-hr-secondary/20 text-hr-secondary" : 
          variant === "accent" ? "bg-hr-accent/20 text-hr-accent" : 
          "bg-gray-100 text-gray-500"
        )}>
          <Icon size={20} />
        </div>
      </div>
      
      {(description || trend) && (
        <div className="flex items-center text-sm mt-2">
          {trend && (
            <span className={cn(
              "inline-flex items-center mr-1",
              trend.positive ? "text-green-500" : "text-red-500"
            )}>
              {trend.positive ? "+" : "-"}{Math.abs(trend.value)}%
            </span>
          )}
          {description && <span className="text-gray-500">{description}</span>}
        </div>
      )}
    </div>
  );
};

export default StatCard;
