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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.9925890577306!2d24.485887301492927!3d47.14439211337335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749f7055021f9b9%3A0x1c252f3bd17f1887!2zRHJ1bXVsIENldMSDyJtpaSAySiwgQmlzdHJpyJthIDQyMDEyOQ!5e0!3m2!1sro!2sro!4v1689260902391!5m2!1sro!2sro"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <ContactForm />
          <Footer />
        </Layout>
      </div>
    </NextIntlProvider>
  );
}
