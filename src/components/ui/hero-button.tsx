import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "connect" | "redeem";
}

export const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const baseStyles = "font-bold transition-colors duration-200";

    const variantStyles = {
      connect:
        "bg-[rgba(0,191,96,1)] text-[64px] text-[rgba(184,184,184,1)] px-[39px] py-2 rounded-[70px] max-md:text-[40px] max-md:px-5",
      redeem:
        "bg-[rgba(35,35,36,1)] border w-[474px] max-w-full text-[76px] text-white px-[35px] py-2.5 rounded-[20px] border-[rgba(228,228,228,1)] border-solid max-md:text-[40px] max-md:px-5",
    };

    return (
      <Button
        className={cn(baseStyles, variantStyles[variant], className)}
        ref={ref}
        {...props}
      />
    );
  },
);

HeroButton.displayName = "HeroButton";
