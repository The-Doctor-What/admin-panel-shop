import {PanelLayout, Link, Button} from "@/components";
import React from "react";

export default function Logout() {

    return (
        <PanelLayout title="Выход из системы">
            <section
                className="flex flex-col gap-4 items-center bg-gray-100 p-4 w-full max-w-md shadow-md rounded">
                <h1 className="text-2xl font-bold text-center">Выход из аккаунта</h1>
                <p className="text-gray-600 text-lg text-center font-normal">Вы уверены, что хотите выйти из
                    системы?</p>
                <Button className="w-full" iconName="sign-out-alt" iconGroup="solid" execute={() => {
                    alert("Вы вышли из системы")
                }}>Выйти из аккаунта</Button>
            </section>
        </PanelLayout>
    )
}
