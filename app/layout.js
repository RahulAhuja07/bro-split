import {ClerkProvider} from "@clerk/nextjs";
import { Inter} from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Bro Split",
  icons: {
    icon: "/logos/Logo_favicon_final.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body 
      className="min-h-full flex flex-col">
        <ClerkProvider>
          <ConvexClientProvider>
          <Header />
          <main className="min-h-screen"> 
          {children}
          <Toaster richColors/>
          </main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}