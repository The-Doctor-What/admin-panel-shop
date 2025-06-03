import {Button, Input, PanelLayout, PromoItem} from "@/components";
import {useState} from "react";

export default function Settings() {
    const [positions, setPositions] = useState("")

    return (
        <PanelLayout title="Управление магазином">
            <section className="w-[710px] h-[300px] flex flex-row shadow-md rounded-xl bg-gray-50">
                <div className="w-1/2 rounded-l-xl p-7 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-light text-lg">Управление магазином</h3>
                        <PromoItem iconName="edit">Редактирование основных данных о магазине</PromoItem>
                    </div>
                </div>
                <div className="w-1/2 rounded-r-xl">
                    <div className="flex flex-col justify-center items-center p-5">
                        <h1 className="font-normal text-xl">Основная информация</h1>
                    </div>

                    <form className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col gap-5 items-center w-full justify-between">
                            <Input type="text" onChange={(e: any) => setPositions(e.target.value)}
                                   label="Название магазина"/>
                            <Input type="text" onChange={(e: any) => setPositions(e.target.value)}
                                   label="Описание магазина"/>
                            <Button type="submit" execute={(e: any) => {
                                alert("hello")
                            }} iconName="save" className="w-full">Сохранить изменения</Button>
                        </div>
                    </form>
                </div>
            </section>
        </PanelLayout>
    )
}
