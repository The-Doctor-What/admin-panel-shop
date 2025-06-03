import Link from "@/components/Link";
import Icon from "@/components/Icon";

export type AdminProfileProps = {
    id: string;
    name: string;
    role: string;
    access: string;
    description: string;
    ordersProcessed: number;
    avatar?: string;
}

export default function AdminProfile({user}: { user: AdminProfileProps }) {
    return (
        <section className="w-[710px] h-[280px] flex flex-row shadow-md rounded-xl bg-gray-50">
            <div className="w-2/3 rounded-l-xl p-5 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg"><Icon name="user"/> {user.name}</h3>
                    <div className="flex flex-row gap-2">
                        <img src={user.avatar} alt="Avatar" className="object-cover w-40 h-52 rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <p>{user.role}</p>
                            <p className="text-gray-600">Описание: {user.description}</p>
                            <p className="text-gray-600">Обработано заказов: {user.ordersProcessed}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 rounded-r-xl flex flex-col p-2 gap-2 mt-6">
                <Link href="/admin/logout" iconName="briefcase" iconGroup="solid">Сменить описание</Link>
                {user.access === "admin" ? (
                    <Link href="/admin/logout" iconName="user-plus" iconGroup="solid">Выдать супер-админа</Link>
                ) : (
                    <Link href="/admin/logout" iconName="user-minus" iconGroup="solid">Выдать админа</Link>
                )}
                <Link href="/admin/logout" iconName="user-xmark" iconGroup="solid">Снять полномочие</Link>
            </div>
        </section>)
}