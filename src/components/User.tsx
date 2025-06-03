import Link from "@/components/Link";
import Icon from "@/components/Icon";

export type UserProfileProps = {
    id: string;
    name: string;
    username: string;
    ip: string;
    orders: number;
    lastOrderDate: string;
    avatar?: string;
}

export default function User({user}: { user: UserProfileProps }) {
    return (<section className="w-[710px] h-[280px] flex flex-row shadow-md rounded-xl bg-gray-50">
        <div className="w-2/3 rounded-l-xl p-5 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg"><Icon name="user"/> {user.name}</h3>
                <div className="flex flex-row gap-2" key={user.id}>
                    <img src={user.avatar} alt="Avatar" className="w-40 h-50 rounded-2xl object-cover"/>
                    <div className="flex flex-col gap-2">
                        <p>@{user.username}</p>
                        <p className="text-gray-600">ID: {user.id}</p>
                        <p className="text-gray-600">IP: {user.ip}</p>
                        <p className="text-gray-600">Заказов: {user.orders}</p>
                        <p className="text-gray-600">Последний заказ: {user.lastOrderDate}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/3 rounded-r-xl flex flex-col p-2 gap-2 mt-6">
            <Link href="/admin/logout" iconName="user-plus" iconGroup="solid">Взять в команду</Link>
            <Link href="/admin/logout" iconName="ban" iconGroup="solid">Заблокировать</Link>
            <Link href="/admin/logout" iconName="trash-alt" iconGroup="solid">Удалить</Link>
        </div>

    </section>)
}