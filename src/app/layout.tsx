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
      <body>{children}</body>
    </html>
  );
}
