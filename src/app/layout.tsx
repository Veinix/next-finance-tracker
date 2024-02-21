import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "@/Components/Molecules/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Finance Tracker",
    description: "Webapp for personal finance tracking",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="min-h-100 flex flex-col">
            <body className={inter.className + `flex flex-grow bg-pl-bg text-pl-font-main`}>
                <main className="flex items-center justify-center">
                    {children}
                </main>
                <MenuBar/>
            </body>
        </html>
    );
}
