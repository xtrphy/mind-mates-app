import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/custom-components/SessionWrapper";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700', '600', '500', '400', '300'],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
    title: "MindMates",
    description: "The best app to get harmony and peace",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.className} antialiased`}>
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <SessionWrapper>
                    {children}
                </SessionWrapper>
            </body>
        </html>
    );
}
