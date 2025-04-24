
import * as React from "react";
import { HeroButton } from "@/components/ui/hero-button";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function HeroSection() {
  const handleRedeem = React.useCallback(() => {
    // Handle redemption logic
    console.log("Redeeming...");
  }, []);

  return (
    <main className="font-bold whitespace-nowrap">
      <section className="bg-[rgba(19,20,21,1)] w-full flex flex-col pt-[17px] pb-[364px] max-md:max-w-full max-md:pb-[100px] relative">
        <div className="absolute top-5 right-5">
          <ConnectButton.Custom>
            {({ openConnectModal }) => (
              <HeroButton 
                variant="connect" 
                onClick={openConnectModal}
                aria-label="Connect to service"
              >
                Conectar
              </HeroButton>
            )}
          </ConnectButton.Custom>
        </div>

        <div className="flex justify-center mt-32">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/dea07c8e855f45bf9281b53efc1ad73d/ae588b053803b4f8239c7a3e5b411dd6400f0e7f?placeholderIfAbsent=true" 
            alt="Hero illustration" 
            className="aspect-[0.99] object-contain w-[332px] max-w-full max-md:mt-10" 
          />
        </div>

        <div className="flex justify-center mt-[47px]">
          <form onSubmit={e => {
            e.preventDefault();
            handleRedeem();
          }}>
            <HeroButton 
              variant="redeem" 
              type="submit" 
              aria-label="Redeem rewards"
            >
              RESGATAR
            </HeroButton>
          </form>
        </div>
      </section>
    </main>
  );
}
