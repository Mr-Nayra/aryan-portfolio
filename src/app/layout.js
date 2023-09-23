import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan portfolio",
  description:
    "Experienced Front-End Developer with a Passion for Cryptocurrencies and Blockchain. Known for Creative Problem-Solving, Analytical Precision, and Commitment to Excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
