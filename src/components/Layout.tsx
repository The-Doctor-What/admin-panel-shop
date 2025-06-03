import {Head} from "@/components/index";
import {Inter} from "next/font/google";
import React from "react";

export type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
}

const inter = Inter({subsets: ['latin']})

export default function Layout({children, title}: LayoutProps) {

    return (
        <>
            <Head title={title}/>
            <main className={`${inter.className}`}>
                {children}
            </main>
        </>
    )
}