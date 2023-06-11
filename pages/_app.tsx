import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import React from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      locale={pageProps.locale || "ro"}
    >
      {/* POSSIBLE BUG WITH INTE */}
      <Head>
        <title>Suhard Biomedical</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Layout>
          <Nav locale={`${pageProps.locale}`} />
          <div className="mt-[114px]">
            <Component {...pageProps} />
          </div>
          <ContactForm />
          <Footer />
        </Layout>
      </div>
    </NextIntlProvider>
  );
}
