
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

// Define your project ID - replace with your actual WalletConnect project ID
// Get one from https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID';

// Define chains
const chains = [mainnet];

// Create connectors for wallets
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId }),
      coinbaseWallet({ appName: 'My Web3 App', projectId }),
      walletConnectWallet({ projectId })
    ],
  },
]);

// Create the wagmi config
const wagmiConfig = createConfig({
  chains,
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
