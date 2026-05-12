import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peachy Kean DevOps LLC — West Asheville, NC",
  description:
    "Simple, affordable digital tools for independent local businesses in Asheville, NC.",
  openGraph: {
    title: "Peachy Kean DevOps LLC",
    description:
      "Simple, affordable digital tools for the shops and organizations that make Asheville worth living in.",
    url: "https://peachykeandev.com",
    siteName: "Peachy Kean DevOps LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍑</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
