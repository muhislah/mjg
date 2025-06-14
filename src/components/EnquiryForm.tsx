import React, { useEffect, useState } from 'react'
import TextInput from './form/TextInput'
import { IValidationAlias, IValidationErrors, IValidationRules, validateData } from '@/utils/validation'
import Select from './form/Select'
import { ALL_PRODUCT } from '@/utils/constants'
import PhoneInput from './form/PhoneInput'
import TextArea from './form/TextArea'
import { toast } from 'react-toastify'

type Props = {
    defaultState?: Partial<IState>
    onSuccessCallback?: () => void
    redraw?: number
}

interface IState {
    name: string
    email: string
    phone: string
    dial_code: string
    product: string
    description: string
}

const initialState = {
    name: "",
    email: "",
    phone: "",
    dial_code: "+62",
    product: "",
    description: "",
}

const EnquiryForm = (props: Props) => {
    const [state, setState] = useState<IState>(initialState)
    const [error, setError] = useState<IValidationErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (name: string, value: string) => {
        const val = name === 'phone' ? value.replace(/[^0-9]/g, "") : value
        setState(prev => ({
            ...prev,
            [name]: val
        }))
    }

    const validationRules: IValidationRules = {
        name: "required",
        email: "required",
        phone: "required",
        product: "required",
        description: "required",
    }

    const validationAlias: IValidationAlias = {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        product: "Product",
        description: "Description",
    }

    const handleSubmit = async () => {
        const { isValid, errors } = validateData(state, validationRules, validationAlias)
        if (!isValid) {
            setError(errors)
            toast.error("Please fill every form!")
            return
        }

        setIsLoading(true)
        try {
            const result = await fetch("/api/add-row", {
                method: 'POST',
                body: JSON.stringify({
                    ...state,
                    phone: `${state.dial_code}${state.phone.replace(/0/, "")}`
                })
            })
            if (result.status === 200) {
                toast.success("Thanks for Your Submit, You Will be Contacted Soon")
                if (props.onSuccessCallback) props.onSuccessCallback()
            } else {
                toast.error("Something Error, Please contact admin!")
            }
        } catch (error) {
            toast.error("Something Error, Please contact admin!")
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (typeof props.defaultState !== 'undefined') {
            Object.entries(props.defaultState).forEach(([key, value]) => {
                setState(prev => ({ ...prev, [key]: value }))
            })
        }
    }, [props.defaultState])

    useEffect(() => {
        if (props.redraw) {
            setState(initialState)
            setError(error)
        }
    }, [props.redraw])

    return (
        <div className='flex flex-col gap-3 items-stretch'>
            <TextInput
                name='name'
                label='Name'
                value={state.name}
                error={error.name}
                onChange={handleChange}
                placeholder='Enter Name Here'
            />
            <TextInput
                name='email'
                label='Email'
                value={state.email}
                error={error.email}
                onChange={handleChange}
                placeholder='Enter email Here'
            />
            <Select
                name='product'
                label='Product'
                value={state.product}
                onChange={handleChange}
                options={ALL_PRODUCT.map(product => ({ label: product.name, value: product.id }))}
            />
            <PhoneInput
                name='phone'
                label='Phone'
                dialCode={state.dial_code}
                value={state.phone}
                onChangeDialCode={(value) => handleChange("dial_code", value)}
                error={error.phone}
                onChange={handleChange}
                placeholder='Enter phone Here'
            />
            <TextArea
                name='description'
                label='Description'
                value={state.description}
                error={error.description}
                onChange={handleChange}
                placeholder='Enter description Here'
            />
            <button
                className='flex items-center justify-center px-3 py-1.5 gap-2 disabled:bg-yellow-900/50 rounded-lg bg-yellow-900 text-white'
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? "Submitting..." : "Submit"}
            </button>
        </div>
    )
}

export default EnquiryForm