import { AppProps } from "next/app";
import { CartProvider } from "@/state/cartStore";
import { SearchProvider } from "@/state/searchStore";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <CartProvider>
        <div className="bg-neutral-200 min-h-screen flex flex-col dark:bg-neutral-800">
          <Header />
          <main className="flex-1">
            <Component {...pageProps} />
            <Toaster position="top-right" />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </SearchProvider>
  );
}

export default MyApp;
