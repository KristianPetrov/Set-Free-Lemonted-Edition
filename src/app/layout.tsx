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
  title: "Lemonted Edition – Playa Made. Holy But Hood.",
  description:
    "Lemonted Edition is more than streetwear—it's a lifestyle squeezed from the grind and served bold. Limited by design, legendary by nature.",
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
