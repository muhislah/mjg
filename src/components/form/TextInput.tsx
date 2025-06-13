import React from 'react'

type Props = {
    name: string
    value: string
    label: string
    onChange: (name: string, value: string) => void
    error?: string
    placeholder?: string
}

const TextInput = (props: Props) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.name, e.target.value)
    }
    return (
        <div>
            <label htmlFor={props.name} className={`block mb-2 text-sm font-medium ${props.error ? "text-red-700" : "text-neutral-900"}`}>{props.label}</label>
            <input value={props.value} name={props.name} onChange={handleChange} type="text" id={props.name} className={` border text-sm rounded-lg ${props.error ? "bg-red-50 focus:ring-red-500 focus:border-red-500 border-red-500 text-red-900 placeholder-red-700" : "focus:ring-yellow-950 focus:border-neutral-800 border-neutral-700 text-neutral-900 bg-neutral-50 placeholder-neutral-600"} block w-full p-2.5 `} placeholder={props.placeholder} />
            {
                props.error ?
                    <p className="mt-2 text-sm text-red-600">{props.error}</p>
                    : null
            }
        </div>
    )
}

export default TextInput