import Header from "@/components/custom-components/Header";
import "../globals.css";
import SessionWrapper from "@/components/custom-components/SessionWrapper";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <SessionWrapper>{children}</SessionWrapper>
        </>
    );
}
