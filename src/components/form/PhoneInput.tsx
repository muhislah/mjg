import { INTERNATIONAL_PHONE_DIAL } from '@/utils/country-code'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import classes from './PhoneInput.module.css'

type Props = {
    name: string
    dialCode: string
    value: string
    label: string
    onChangeDialCode: (value: string) => void
    onChange: (name: string, value: string) => void
    error?: string
    placeholder?: string
}

const PhoneInput = (props: Props) => {
    const handleChangePhone: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        props.onChangeDialCode(e.target.value)
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.name, e.target.value)
    }
    return (
        <div className='relative'>
            <label htmlFor={props.name} className={`block mb-2 text-sm font-medium ${props.error ? "text-red-700" : "text-neutral-900"}`}>{props.label}</label>
            <div className='relative'>
                <div className='absolute bottom-0 left-0 w-[100px]'>
                    <select value={props.dialCode} onChange={handleChangePhone} className={`${props.error ? " text-red-900 placeholder-red-700" : ""} appearance-none focus-within:outline-0 focus-within:border-0 focus:outline-0 focus:border-0 p-[10px] h-full w-full ${classes["opacity-gradient"]}`}>
                        {
                            INTERNATIONAL_PHONE_DIAL.map((option, index) => (
                                <option key={index} className='truncate' value={option.dial_code}>{`${option.dial_code} - ${option.name}`}</option>
                            ))
                        }
                    </select>
                    <div className='pointer-events-none absolute my-[10px] right-0 bottom-0 w-[40px] h-[22px] flex items-center'>
                        <FaChevronDown className='text-xs ml-auto mr-2' />
                    </div>
                </div>
                <input value={props.value} name={props.name} onChange={handleChange} type="text" id={props.name} className={`pl-[100px] border text-sm rounded-lg ${props.error ? "bg-red-50 focus:ring-red-500 focus:border-red-500 border-red-500 text-red-900 placeholder-red-700" : "focus:ring-yellow-950 focus:border-neutral-800 border-neutral-700 text-neutral-900 bg-neutral-50 placeholder-neutral-600"} block w-full p-2.5 `} placeholder={props.placeholder} />
            </div>
            {
                props.error ?
                    <p className="mt-2 text-sm text-red-600">{props.error}</p>
                    : null
            }
        </div>
    )
}

export default PhoneInput