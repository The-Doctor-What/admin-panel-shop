import React from "react";
import Link from 'next/link';
import {Icon} from "@/components/index";

export type LinkProps = {
    iconName?: string;
    iconGroup?: string;
    className?: string;
    href: string;
    children: React.ReactNode;
}

export default function LinkButton({iconName, iconGroup, className, href, children}: LinkProps) {
    return (
        <Link href={href} className={`bg-gray-300 p-2 rounded hover:bg-gray-400 transition-colors focus:outline-none focus:bg-gray-400 ${className ? className : ""}`}>
            {iconName && (<Icon name={iconName} group={iconGroup}/>)} {children}
        </Link>
    )
}