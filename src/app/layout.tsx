import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lemonted Edition – Playa Made. Holy But Hood.",
    template: "%s | Lemonted Edition",
  },
  description:
    "Lemonted Edition is more than streetwear—it's a lifestyle squeezed from the grind and served bold. Limited by design, legendary by nature.",
  applicationName: "Lemonted Edition",
  keywords: [
    "Lemonted Edition",
    "lemonted",
    "streetwear",
    "skate",
    "hood",
    "limited drops",
    "apparel",
    "hoodies",
    "tees",
    "caps",
  ],
  authors: [{ name: "Lemonted Edition" }],
  creator: "Lemonted Edition",
  publisher: "Lemonted Edition",
  category: "streetwear",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lemonted Edition – Playa Made. Holy But Hood.",
    description:
      "Lemonted Edition is more than streetwear—it's a lifestyle squeezed from the grind and served bold. Limited by design, legendary by nature.",
    url: "/",
    siteName: "Lemonted Edition",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/fresh-squeezed-set-free-lemonted-edition.png",
        width: 1024,
        height: 1024,
        alt: "Lemonted Edition – Holy But Hood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemonted Edition – Playa Made. Holy But Hood.",
    description:
      "Lemonted Edition is more than streetwear—it's a lifestyle squeezed from the grind and served bold.",
    images: ["/fresh-squeezed-set-free-lemonted-edition.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/SetFreeDigitalDisciplesPortal.png", type: "image/png", rel: "icon" },
      { url: "/SetFreeDigitalDisciplesPortal.png", type: "image/png", rel: "shortcut icon" },
      { url: "/SetFreeDigitalDisciplesPortal.png", type: "image/png", rel: "apple-touch-icon" },
    ],
  },
  themeColor: "#552583",
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baloo2.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
