import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // If it's a Slot (asChild), we can't easily wrap it with motion without breaking composition in some cases,
    // but for standard buttons we can use motion.button.
    // However, for simplicity and compatibility with Slot, we'll use a wrapper or just CSS transitions for now
    // combined with a simple scale effect on click if it's a regular button.

    // Actually, let's use a motion wrapper if it's not a Slot, or just standard CSS for simplicity 
    // but enhanced with tailwind classes in buttonVariants.
    // To strictly follow the prompt "Buttons with hover and click animations (color change, scale, shadow, subtle motion)",
    // we can add active:scale-95 to the variants.

    return <Comp className={cn(buttonVariants({ variant, size, className }), "active:scale-95 transition-all duration-200 ease-in-out hover:shadow-md")} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
