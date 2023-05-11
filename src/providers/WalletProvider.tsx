import { PropsWithChildren } from 'react';
import { publicProvider } from 'wagmi/providers/public';
import { arbitrumGoerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import '@rainbow-me/rainbowkit/styles.css';
import * as allChains from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { InjectedConnector } from 'wagmi/connectors/injected';
// import { arbitrumGoerli } from '../config/chains';

export const chainsParams = [arbitrumGoerli];

const { chains, provider } = configureChains(chainsParams, [
  jsonRpcProvider({
    rpc: () => ({
      http: `https://endpoints.omniatech.io/v1/arbitrum/goerli/public`,
    }),
  }),
  alchemyProvider({ apiKey: '3G7hlGqp_3AyP4XspL_vMa5nJTpwKIxT' }),
  // infuraProvider({ apiKey: 'b45700eac1464695b569b4151c36b672' }),
  publicProvider(),
]);

export const connectors = [
  new InjectedConnector({
    chains: chains,
  }),
];

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const WalletProvider = ({ children }: PropsWithChildren) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: '#DABEF1',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        chains={chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
