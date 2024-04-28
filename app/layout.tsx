import type { Metadata } from "next";
import { Hind_Siliguri, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-pop",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const hind = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-hind",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BasaBari",
  description: "BasaBari - Find Your Next Flat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${hind.variable}`}>
      <body className="w-screen h-screen bg-gradient-to-bl from-slate-50 to-amber-300 ">
        <section className="flex justify-center items-center">
          <Header />
        </section>
        <section className="px-[5%] py-[5%]">{children}</section>
      </body>
    </html>
  );
}
