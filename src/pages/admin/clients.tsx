import {PanelLayout, User} from "@/components";
import {UserProfileProps} from "@/components/User";

export default function Clients() {
    const users: UserProfileProps[] = [
        {
            id: "uuid:1",
            name: "The Doctor What",
            username: "the_doctor_what",
            avatar: "/avatar.png",
            ip: "localhost",
            orders: 42,
            lastOrderDate: "2023-10-05"
        },
        {
            id: "uuid:2",
            name: "Jane Doe",
            username: "jane_doe",
            avatar: "https://zscomp.ru/files/3jcy.jpeg",
            ip: "131.48.0.1",
            orders: 17,
            lastOrderDate: "2023-10-01"
        },
        {
            id: "uuid:3",
            name: "Donald Trump",
            username: "donald_trump",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TrumpPortrait.jpg/960px-TrumpPortrait.jpg",
            ip: "localhost",
            orders: 5,
            lastOrderDate: "2023-09-28"
        },
        {
            id: "uuid:4",
            name: "Alice Johnson",
            username: "alice_johnson",
            avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
            ip: "localhost",
            orders: 12,
            lastOrderDate: "2023-10-03"
        }
    ];

    return (
        <PanelLayout title="Список клиентов">
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </PanelLayout>
    );
}