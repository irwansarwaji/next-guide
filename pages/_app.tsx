import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

/**
 * One way to add your Layout is to wrap your app in layout
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
