import React from "react";
import {Inter} from "next/font/google";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Link from "@/components/Link";

export type PanelLayoutProps = {
    title?: string;
    children?: React.ReactNode;
}

const inter = Inter({subsets: ['latin']})

export default function PanelLayout({children, title}: PanelLayoutProps) {
    return (
        <>
            <Layout title={title}>
                <main className={`${inter.className} flex flex-row gap-10 w-full h-full min-h-screen `}>
                    <section className="bg-gray-200 w-[310px] flex flex-col p-5 rounded-r-3xl shadow-md justify-between">
                        <div>
                            <div className="flex flex-row text-xl items-center gap-2">
                                <Icon name="store"/>
                                <p>Управление магазином</p>
                            </div>
                            <hr className="border-t border-gray-600 w-full mt-2"/>
                            <div className="flex flex-col gap-2 mt-5">
                                <Link href="/admin" iconName="home" iconGroup="solid">Главная</Link>
                                <Link href="/admin/settings" iconName="cog" iconGroup="solid">Настройки магазина</Link>
                                <Link href="/admin/products" iconName="box" iconGroup="solid">Товары</Link>
                                <Link href="/admin/clients" iconName="users" iconGroup="solid">Клиенты</Link>
                                <Link href="/admin/orders" iconName="clipboard-list" iconGroup="solid">Заказы</Link>
                                <Link href="/admin/admins" iconName="shield-alt" iconGroup="solid">Администраторы</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-15">
                            <div className="flex-row flex gap-5 p-2 items-center bg-gray-300 rounded-lg">
                                <img src="/avatar.png" alt="Avatar" className="w-12 h-12 rounded-full object-cover"/>
                                <div className="gap-3 flex-col">
                                    <p>Арина Тестовая</p>
                                    <p className="text-gray-600 text-sm">Супер-Администратор</p>
                                </div>
                            </div>
                            <Link href="/admin/profile" iconName="user" iconGroup="solid">Редактировать профиль</Link>
                            <Link href="/admin/logout" iconName="sign-out-alt" iconGroup="solid">Выйти из
                                аккаунта</Link>
                        </div>
                    </section>
                    <section className={`${inter.className} flex flex-col gap-5 mt-5 mb-10`}>
                        {children}
                    </section>
                </main>
            </Layout>
        </>
    )
}