import * as React from "react";
import { HeroButton } from "@/components/ui/hero-button";

export function HeroSection() {
  const handleConnect = React.useCallback(() => {
    // Handle connection logic
    console.log("Connecting...");
  }, []);

  const handleRedeem = React.useCallback(() => {
    // Handle redemption logic
    console.log("Redeeming...");
  }, []);

  return (
    <main className="font-bold whitespace-nowrap">
      <section className="bg-[rgba(19,20,21,1)] flex w-full flex-col items-center pl-20 pr-[11px] pt-[17px] pb-[364px] max-md:max-w-full max-md:pl-5 max-md:pb-[100px]">
        <HeroButton
          variant="connect"
          onClick={handleConnect}
          aria-label="Connect to service"
        >
          Conectar
        </HeroButton>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/dea07c8e855f45bf9281b53efc1ad73d/ae588b053803b4f8239c7a3e5b411dd6400f0e7f?placeholderIfAbsent=true"
          alt="Hero illustration"
          className="aspect-[0.99] object-contain w-[332px] max-w-full mt-28 max-md:mt-10"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRedeem();
          }}
        >
          <HeroButton
            variant="redeem"
            type="submit"
            className="ml-2.5 mt-[47px] mb-[-73px]"
            aria-label="Redeem rewards"
          >
            RESGATAR
          </HeroButton>
        </form>
      </section>
    </main>
  );
}
