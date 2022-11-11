import { AppProps } from 'next/app';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import "../src/components/bufferFill";
import { Header } from '../src/components/Header';
import { Providers } from '../src/components/Providers';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  console.log("Hello");
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
      <Toaster
          position="bottom-center"
          containerStyle={{
            margin: "auto",
            width: "420px",
          }}
        />
    </Providers>
  );
};

export default App;
