"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "brand";
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    const variants = {
      primary: "bg-primary text-white hover:shadow-glow hover:-translate-y-0.5 active:scale-[0.98]",
      brand: "bg-brand-blue text-white shadow-[0_15px_35px_rgba(37,113,184,0.25)] hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] font-medium tracking-tight",
      secondary: "bg-secondary text-white hover:opacity-90 active:scale-[0.98]",
      outline: "border-2 border-border text-foreground hover:bg-card-muted hover:border-muted/30 active:scale-[0.98]",
      ghost: "text-foreground hover:bg-card-muted active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3.5 text-base",
      lg: "px-10 py-5 text-lg",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "cursor-pointer transition-all duration-300 font-semibold rounded-xl inline-flex items-center justify-center gap-2 select-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
