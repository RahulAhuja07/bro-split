import {ClerkProvider} from "@clerk/nextjs";
import { Inter} from "next/font/google";
import "./globals.css";
import header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Bro Split"
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
          <header />
          <main className="min-h-screen"> 
          {children}
          </main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}