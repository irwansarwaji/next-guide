import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

/**
 * One way to add your Layout is to wrap your app in layout.
 * Because its typescript we need to add some props to the layout
 * getLayout is optional. And it has a page property that is ReactElement
 */

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextpageWithLayout }; // just extend AppProps

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page); // Means a component can either use a layout or not use a layout. So an optional function
  return getLayout(<Component {...pageProps} />);
}

export default App;
