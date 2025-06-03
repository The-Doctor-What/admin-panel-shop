export type InputProps = {
    type: string;
    onChange: any;
    label?: string;
}

export default function Input({type, onChange, label}: InputProps) {
    return (
        <div className={`relative w-full`}>
            <input type={type} onChange={onChange}
                   className="peer w-full bg-gray-50 p-2 rounded transition-colors focus:outline-none border border-stone-400 focus:border-components-alt-active"/>
            <label className={`peer-focus:bg-gray-50 peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-sm peer-[:not(:placeholder-shown)]:bg-gray-50 peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:rounded peer-focus:rounded peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1
             font-light text-stone-700 absolute top-2.5 left-2.5 pointer-events-none transition-all`}>
                {label}
            </label>
        </div>
    )
}