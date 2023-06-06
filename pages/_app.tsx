import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      locale={pageProps.locale || "ro"}
    >
      <Layout>
        <Nav locale={`${pageProps.locale}`} />
        <div className="mt-[114px]">
          <Component {...pageProps} />
        </div>
      </Layout>
    </NextIntlProvider>
  );
}
