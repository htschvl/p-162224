
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a custom wallet list
const wallets = [
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet
];

// Create connectors from the wallet list
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: wallets.map(wallet => wallet({
      projectId: 'YOUR_PROJECT_ID',
      chains: [mainnet],
    }))
  }
]);

// Create the wagmi config
const wagmiConfig = createConfig({
  connectors,
  transports: {
    [mainnet.id]: http()
  }
});

// Create a query client for RainbowKit
const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
