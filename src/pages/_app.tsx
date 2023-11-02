import type { AppLayoutProps, AppProps } from 'next/app'
import './global.css';
import { ReactNode } from 'react';
import { AppInitialProps } from 'next/app';
import { AppContext } from 'next/app';
import { NextComponentType } from 'next';

// import { useMemo } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
 
export default function App({ Component, pageProps }: AppLayoutProps): NextComponentType<AppContext, AppInitialProps, AppLayoutProps> {
  
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? 'dark' : 'light',
  //       },
  //     }),
  //   [prefersDarkMode],
  // );
  
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
}