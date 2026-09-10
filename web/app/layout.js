import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "GPT-6 Astra Showcase - 3360 Copy-Ready Prompts",
  description: "Interactive showcase for the GPT-6 Astra Awesome Hub. Search and copy 3360 Astra-tuned prompts across 28 categories, plus 3D pipeline, builds, and quickstarts."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable + " " + mono.variable}>{children}</body>
    </html>
  );
}
