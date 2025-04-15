
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "connect" | "redeem";
}

export const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    const baseStyles = "font-bold transition-colors duration-200";

    const variantStyles = {
      connect:
        "bg-[#00BF60] text-white text-lg px-9 py-3 rounded-full hover:bg-[#00AB56]",
      redeem:
        "bg-[rgba(35,35,36,1)] border text-white text-lg px-9 py-3 rounded-[20px] border-[rgba(228,228,228,1)] border-solid hover:bg-[rgba(50,50,51,1)]",
    };

    return (
      <Button
        className={cn(baseStyles, variantStyles[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);

HeroButton.displayName = "HeroButton";
