import {Icon, PanelLayout} from "@/components";
import Link from "@/components/Link";

export default function Home() {

    return (
        <PanelLayout title="Главная">
            <section className="w-[710px] h-[300px] flex flex-row shadow-md rounded-xl bg-gray-50">
                <div className="w-2/3 rounded-l-xl p-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg"><Icon name="user"/> Ваш профиль</h3>
                        <div className="flex flex-row gap-2">
                            <img src="/avatar.png" alt="Avatar" className="w-40 h-50 rounded-2xl object-cover"/>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg">Арина Тестовая</h3>
                                <p className="text-accent">Супер-Администратор</p>
                                <p className="text-gray-600">Обработано заказов: 1 944 433</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 rounded-r-xl flex flex-col p-3 gap-2 mt-6">
                    <Link href="/admin/logout" iconName="sign-out-alt" iconGroup="solid">Выйти из
                        аккаунта</Link>
                </div>
            </section>

            <section className="w-[710px] h-[300px] flex flex-row shadow-md rounded-xl bg-gray-50">
                <div className="rounded-l-xl p-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg"><Icon name="briefcase"/> В работе</h3>
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg">Заказы и задачи</h3>
                                <p className="text-gray-600">Ожидают обработки: 12</p>
                                <p className="text-gray-600">В работе командой: 5</p>
                                <p className="text-gray-600">В работе лично: 3</p>
                                <p className="text-gray-600">Просрочено: 2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PanelLayout>
    )
}
