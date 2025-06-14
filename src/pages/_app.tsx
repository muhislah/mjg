import { LanguageProvider } from "@/providers/LanguageProvider";
import SidebarProvider from "@/providers/SidebarProvider";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css"
import "@/styles/custom.css"
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { FaTimesCircle } from "react-icons/fa";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <SidebarProvider>
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          className="red"
          toastClassName={"relative md:pr-4! pr-10! "}
          closeButton={({ closeToast }) => (
            <>
              <div onClick={closeToast} className="absolute bg-white p-1 w-6 h-6 rounded-full md:hidden block right-2 inset-y-auto">
                <FaTimesCircle />
              </div>
              <div onClick={closeToast} className="absolute hidden md:block bg-white p-1 w-6 h-6 rounded-full -top-2 -right-2">
                <FaTimesCircle />
              </div>
            </>
          )}
        />
        <Component {...pageProps} />
      </SidebarProvider>
    </LanguageProvider>
  )
}
