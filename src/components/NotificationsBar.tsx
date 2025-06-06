import {Notification} from "@/components";
import {useContext} from "react";
import {NotificationsContext} from "@/pages/_app";

export default function NotificationsBar() {
    const {notifications, deleteNotification} = useContext(NotificationsContext)

    return (
        <section className="flex flex-col gap-5 absolute right-5 top-10 z-50">
            {notifications ? notifications.map((notification, index) =>
                <Notification notification={notification} execute={() => deleteNotification(notification.id)}/>) : ""
            }
        </section>
    )
}