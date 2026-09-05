import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
    variable: "--font-display-family",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
    variable: "--font-body-family",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "Leo's Barber Shop",
        template: "%s | Leo's Barber Shop",
    },
    description:
        "Leo's Barber Shop — Feel Fresh. Look Great. Premium barbering with precision, style, and personal service.",
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/images/logo.png",
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${displayFont.variable} ${bodyFont.variable}`}
        >
        <body>{children}</body>
        </html>
    );
}