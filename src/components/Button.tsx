import {Icon} from "@/components";

export type ButtonsTypes = {
    iconName?: string,
    iconGroup?: string,
    execute?: any,
    children?: any,
    type?: any
    className?: string
}

export default function Button({iconName, iconGroup, execute, children, type, className}: ButtonsTypes) {
    return (
        <button onClick={execute} type={type || "button"}
                className={`bg-gray-200 p-2 cursor-pointer rounded hover:bg-gray-300 transition-colors flex flex-row gap-2 items-center border-none ${className ? className : ""}`}>
            {iconName && (<Icon name={iconName} group={iconGroup}/>)} {children}
        </button>
    )
}