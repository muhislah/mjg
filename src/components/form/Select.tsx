import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'

type Props = {
    name: string
    value: string
    label: string
    onChange: (name: string, value: string) => void
    error?: string
    placeholder?: string
    options: {
        label: string,
        value: string
    }[]
}

const Select = (props: Props) => {
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        props.onChange(e.target.name, e.target.value)
    }
    return (
        <div className='relative'>
            <label htmlFor={props.name} className={`block mb-2 text-sm font-medium ${props.error ? "text-red-700" : "text-neutral-900"}`}>{props.label}</label>
            <select name={props.name} value={props.value} onChange={handleChange} id={props.name} className={`appearance-none relative pr-10 border text-sm rounded-lg ${props.error ? "bg-red-50 focus:ring-red-500 focus:border-red-500 border-red-500 text-red-900 placeholder-red-700" : "focus:ring-yellow-950 focus:border-neutral-800 border-neutral-700 text-neutral-900 bg-neutral-50 placeholder-neutral-600"} block w-full p-2.5 `}>
                {
                    props.options.map((option, index) => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
            <div className='pointer-events-none absolute right-0 bottom-0 w-[40px] h-[42px] flex items-center justify-center'>
                <FaChevronDown className='text-xs' />
            </div>
            {
                props.error ?
                    <p className="mt-2 text-sm text-red-600">{props.error}</p>
                    : null
            }
        </div>
    )
}

export default Select