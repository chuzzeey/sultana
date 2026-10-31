import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. Sultana Agro Lestari | Home",
  description:
    "Premium importer and distributor of high-quality food products in Jakarta, Indonesia. Specializing in Daawat Basmati Rice and Antebella spread creams.",
  icons: { icon: "/assets/images/sal-logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
