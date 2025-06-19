import Header from "@/components/custom-components/Header";
import "../globals.css"
import Footer from "@/components/custom-components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center">
                {children}
            </main>
            <Footer />
        </>
    );
}
