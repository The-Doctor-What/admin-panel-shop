import {Icon} from "@/components";

export type NotificationProps = {
    notification: any,
    execute: any
}

export default function Notification({notification, execute}: NotificationProps) {
    return (
        <div className="flex flex-col gap-2 items-center p-2 rounded-md bg-gray-100 w-full max-w-md">
            <div className="flex flex-row gap-2 items-center w-full">
                <div>
                    {notification.type == "error" && (<Icon name="triangle-exclamation" className="text-red-500"/>)}
                    {notification.type == "success" && (<Icon name="thumbs-up" className="text-green-400"/>)}
                    {notification.type == "info" && (<Icon name="circle-info"/>)}
                </div>
                <p className="m-0 w-full">
                    {notification.title}
                </p>
                <button type="button" onClick={execute} className="hover:text-gray-600 transition-colors">
                    <Icon name="xmark"/>
                </button>
            </div>
            <p className="m-0 w-full text-gray-700">
                {notification.text}
            </p>
        </div>
    )
}