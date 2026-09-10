import "./globals.css";

export const metadata = {
  title: "GPT-6 Astra Showcase - 2520 Copy-Ready Prompts",
  description: "Interactive showcase for the GPT-6 Astra Awesome Hub. Search and copy 2520 Astra-tuned prompts across 28 categories, plus 3D pipeline, builds, and quickstarts."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
