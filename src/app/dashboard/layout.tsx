import Header from "@/components/custom-components/Header";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

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
            <footer className="flex justify-center border-t-1 bg-[#f4feff] shadow font-semibold text-lg py-6">
                <Link href='/' className="flex items-center hover:text-gray-500 duration-200 transition-colors">
                    <Image
                        src='/favicon.png'
                        alt="MindMates logo"
                        width={40}
                        height={40}
                    />
                    MindMates
                </Link>
            </footer>
        </>
    );
}
