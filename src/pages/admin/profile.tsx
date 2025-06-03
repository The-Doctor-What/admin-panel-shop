import {Button, Icon, Input, PanelLayout, PromoItem} from "@/components";
import React, {useState} from "react";

export default function Profile() {
    const [positions, setPositions] = useState("")

    return (
        <PanelLayout title="Редактирование профиля">
            <section className="w-[710px] h-[350px] flex flex-row shadow-md rounded-xl bg-gray-50">
                <div className="w-1/2 rounded-l-xl p-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl"><Icon name="user"/> Редактирование профиля</h3>
                        <div className="flex flex-col gap-2">
                            <img src="/avatar.png" alt="Avatar" className="w-40 h-50 rounded-2xl object-cover"/>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg">Загрузка нового аватара</h3>
                                <input type="file" accept="image/*"
                                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 rounded-r-xl">
                    <div className="flex flex-col justify-center items-center p-5">
                        <h1 className="font-normal text-xl">Основная информация</h1>
                    </div>

                    <form className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col gap-5 items-center w-full justify-between">
                            <Input type="text" onChange={(e: any) => setPositions(e.target.value)}
                                   label="Имя пользователя"/>
                            <Button type="submit" execute={(e: any) => {alert("hello")}} iconName="save" className="w-full">Сохранить изменения</Button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="w-[710px] h-[350px] flex flex-row shadow-md rounded-xl bg-gray-50">
                <div className="w-1/2 rounded-l-xl p-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl"><Icon name="shield-alt"/> Безопасность</h3>
                        <p className="text-text-alt">Рекомендации по безопасности</p>
                        <PromoItem iconName="lock">Используйте сложные пароли</PromoItem>
                        <PromoItem iconName="rotate">Регулярно обновляйте пароль</PromoItem>
                        <PromoItem iconName="link">Не переходите по подозрительным ссылкам</PromoItem>
                    </div>
                </div>
                <div className="w-1/2 rounded-r-xl">
                    <div className="flex flex-col justify-center items-center p-5">
                        <h1 className="font-normal text-xl">Смена пароля</h1>
                    </div>

                    <form className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col gap-5 items-center w-full justify-between">
                            <Input type="text" onChange={(e: any) => setPositions(e.target.value)}
                                   label="Текущий пароль"/>
                            <Input type="text" onChange={(e: any) => setPositions(e.target.value)}
                                   label="Новый пароль"/>
                            <Input type="text" onChange={(e: any) => setPositions(e.target.value)}
                                   label="Повторите новый пароль"/>
                            <Button type="submit" execute={(e: any) => {alert("hello")}} iconName="key" className="w-full">Сменить пароль</Button>
                        </div>
                    </form>
                </div>
            </section>
        </PanelLayout>
    )
}
