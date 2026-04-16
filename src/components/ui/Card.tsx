import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "premium" | "simple";
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, variant = "premium", children, ...props }: CardProps) => {
  const variants = {
    premium: "card-premium",
    simple: "p-6 rounded-2xl border border-border bg-card-pure",
  };

  return (
    <div 
      className={cn(
        "transition-all duration-500",
        variants[variant],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};
