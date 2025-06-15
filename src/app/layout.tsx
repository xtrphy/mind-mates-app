import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SessionWrapper from "@/components/custom-components/SessionWrapper";
import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700', '600', '500', '400', '300']
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
        <html lang="en">
            <body
                className={`${poppins.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
