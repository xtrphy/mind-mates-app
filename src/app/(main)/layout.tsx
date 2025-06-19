import Header from "@/components/custom-components/Header";
import Footer from "@/components/custom-components/Footer";
import "../globals.css"

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <>
            <Header session={session} />
            <main className="flex flex-col items-center">
                {children}
            </main>
            <Footer />
        </>
    );
}
