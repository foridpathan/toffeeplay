import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import Providers from "./providers";

const inter = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toffee Live | On demand streaming",
  description: "On demand streaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-dry")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
