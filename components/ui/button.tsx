import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-medium transition-colors duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "border bg-transparent",
        ghost: "bg-transparent",
      },
      surface: {
        dark: "",
        light: "",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        surface: "dark",
        class: "bg-bone text-charcoal hover:bg-white",
      },
      {
        variant: "primary",
        surface: "light",
        class: "bg-charcoal text-bone hover:bg-charcoal/85",
      },
      {
        variant: "secondary",
        surface: "dark",
        class: "border-bone/40 text-bone hover:bg-bone/10",
      },
      {
        variant: "secondary",
        surface: "light",
        class: "border-charcoal/25 text-charcoal hover:bg-charcoal/5",
      },
      { variant: "ghost", surface: "dark", class: "text-bone hover:text-bone/70" },
      {
        variant: "ghost",
        surface: "light",
        class: "text-charcoal hover:text-charcoal/70",
      },
    ],
    defaultVariants: {
      variant: "primary",
      surface: "light",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, surface, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, surface, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
