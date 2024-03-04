import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navegacion from "./components/Navegacion";
import Pie from "./components/Pie";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pagina Leila",
  description: "2022143062",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navegacion />
          {children}
        <Pie/>
        </body>
    </html>
  );
}
