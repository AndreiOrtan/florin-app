import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages} locale={pageProps.locale}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
