import Header from "@/components/custom-components/Header";
import type { Metadata } from "next";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Get started with MindMates",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <>
            <Header session={session} />
            <main className='pt-[68px]'>
                {children}
            </main>
        </>
    );
}
