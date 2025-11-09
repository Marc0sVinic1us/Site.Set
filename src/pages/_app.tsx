import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Site.Set</title>
        <link rel="shortcut icon" href="/app-favicon.svg" type='image/svg' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
