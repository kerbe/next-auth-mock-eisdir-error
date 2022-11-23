// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/poppins/400.css'
import MainLayout from '../layout/MainLayout';

config.autoAddCss = false;

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', Arial, sans-serif`,
    body: `'Poppins', Arial, sans-serif`,
  },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
