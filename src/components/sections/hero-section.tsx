
import * as React from "react";
import { HeroButton } from "@/components/ui/hero-button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [inputValue, setInputValue] = React.useState("");

  const handleConnect = React.useCallback(() => {
    // Handle connection logic
    console.log("Connecting...");
  }, []);

  const handleRedeem = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle redemption logic
    console.log("Redeeming...", inputValue);
  }, [inputValue]);

  return (
    <main className="font-bold text-center"> {/* Added text-center to ensure text centralization */}
      <section className="bg-[rgba(19,20,21,1)] w-full flex flex-col pt-[17px] pb-[364px] max-md:max-w-full max-md:pb-[100px] relative">
        <div className="absolute top-5 right-5 text-center">
          <HeroButton 
            variant="connect" 
            onClick={handleConnect} 
            aria-label="Connect to service"
          >
            Conectar
          </HeroButton>
        </div>

        <div className="flex justify-center mt-32">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/dea07c8e855f45bf9281b53efc1ad73d/ae588b053803b4f8239c7a3e5b411dd6400f0e7f?placeholderIfAbsent=true" 
            alt="Hero illustration" 
            className="aspect-[0.99] object-contain w-[332px] max-w-full max-md:mt-10" 
          />
        </div>

        <div className="flex flex-col items-center mt-[47px] space-y-4">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite seu código"
            className="w-[332px] h-[58px] text-lg rounded-[20px] bg-[rgba(35,35,36,1)] border-[rgba(228,228,228,1)] text-white placeholder-gray-400 text-center focus:ring-2 focus:ring-[#00BF60]"
          />

          <form onSubmit={handleRedeem}>
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
