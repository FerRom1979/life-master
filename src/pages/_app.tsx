import "../styles/globals.css";
import MainLayout from "@/layout/MainLayout";
import { StoreProvider } from "@/providers";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </StoreProvider>
    </>
  );
}
