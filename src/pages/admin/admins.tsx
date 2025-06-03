import {Admin, PanelLayout} from "@/components";
import {AdminProfileProps} from "@/components/Admin";

export default function Admins() {

    const admins: AdminProfileProps[] = [
        {
            id: "user-1",
            name: "Арина Тестовая",
            role: "Супер-Администратор",
            description: "Тестовая учетная запись",
            ordersProcessed: 1944433,
            avatar: "/avatar.png",
            access: "root"
        },
        {
            id: "user-2",
            name: "Алексей С.",
            role: "Супер-Администратор",
            description: "Владелец проекта",
            ordersProcessed: 0,
            avatar: "https://pl99.kg/wp-content/uploads/2015/12/ie9g7yfwuzi6tal168o7f9bb0z87p1g6-1.jpg",
            access: "root"
        },
        {
            id: "user-3",
            name: "Александр Лукашенко",
            role: "Администратор",
            description: "Ответственный за управление заказами из картошки",
            ordersProcessed: 97,
            avatar: "https://img2.fedpress.ru/thumbs/800/2025/03/3115/6c213c490b2a63b4fdf5af13fea0e0a7.jpg",
            access: "admin"
        }
    ];


    return (
        <PanelLayout title="Администрация">
            {admins.map((user) => (
                <Admin user={user} key={user.id} />
            ))}
        </PanelLayout>
    )
}
