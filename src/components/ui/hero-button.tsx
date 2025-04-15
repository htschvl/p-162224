
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "connect" | "redeem";
  label: string;
}

export const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, label, ...props }, ref) => {
    const baseStyles = "font-bold transition-colors duration-200";

    const variantStyles = {
      connect:
        "bg-[rgba(0,191,96,1)] rounded-[70px] w-14 h-14 flex items-center justify-center hover:bg-[rgba(0,171,86,1)]",
      redeem:
        "bg-[rgba(35,35,36,1)] border rounded-[20px] w-14 h-14 flex items-center justify-center border-[rgba(228,228,228,1)] border-solid hover:bg-[rgba(50,50,51,1)]",
    };

    const containerStyles = {
      connect: "flex flex-col items-center",
      redeem: "flex flex-col items-center",
    };

    const labelStyles = {
      connect: "text-[64px] text-[rgba(184,184,184,1)] mt-2 max-md:text-[40px]",
      redeem: "text-[76px] text-white mt-2 max-md:text-[40px]",
    };

    const iconStyles = {
      connect: "w-6 h-6 text-white",
      redeem: "w-6 h-6 text-white",
    };

    return (
      <div className={containerStyles[variant]}>
        <Button
          className={cn(baseStyles, variantStyles[variant], className)}
          ref={ref}
          {...props}
        >
          <span className={iconStyles[variant]}>
            {variant === "connect" ? "+" : "★"}
          </span>
        </Button>
        <span className={labelStyles[variant]}>{label}</span>
      </div>
    );
  },
);

HeroButton.displayName = "HeroButton";
