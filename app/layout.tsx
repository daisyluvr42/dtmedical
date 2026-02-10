import type { Metadata } from "next";
import "./globals.css";
import GeminiChatWidget from "./components/GeminiChatWidget";

export const metadata: Metadata = {
  title: "DT Medical INC.",
  description: "DT Medical INC. - Enhancing mental well-being through innovative digital solutions.",
  icons: {
    icon: "/assets/icon-82667884.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/index-666d66b0.css" />
      </head>
      <body
        className={`antialiased`}
      >
        <div id="root">{children}</div>
        <GeminiChatWidget />
      </body>
    </html>
  );
}
