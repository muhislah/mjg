import React, { useEffect, useState } from 'react'
import TextInput from './form/TextInput'
import { IValidationAlias, IValidationErrors, IValidationRules, validateData } from '@/utils/validation'
import Select from './form/Select'
import { NEW_PRODUCTS } from '@/utils/constants'
import PhoneInput from './form/PhoneInput'
import TextArea from './form/TextArea'
import { toast } from 'react-toastify'
import { createSlugFromName } from '@/utils/helper'
import { useLanguage } from '@/providers/LanguageProvider'

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
    const { lang } = useLanguage()
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
            toast.error(lang("please_fill_every_form"))
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
                toast.success(lang("submit_success"))
                if (props.onSuccessCallback) props.onSuccessCallback()
            } else {
                toast.error(lang("submit_error"))
            }
        } catch (error) {
            toast.error(lang("submit_error"))
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
                label={lang("name_label")}
                value={state.name}
                error={error.name}
                onChange={handleChange}
                placeholder={lang("name_placeholder")}
            />
            <TextInput
                name='email'
                label={lang("email_label")}
                value={state.email}
                error={error.email}
                onChange={handleChange}
                placeholder={lang("email_placeholder")}
            />
            <Select
                name='product'
                label={lang("product_label")}
                value={state.product}
                onChange={handleChange}
                options={NEW_PRODUCTS.map(product => ({ label: product.name, value: createSlugFromName(product.name) }))}
            />
            <PhoneInput
                name='phone'
                label={lang("phone_label")}
                dialCode={state.dial_code}
                value={state.phone}
                onChangeDialCode={(value) => handleChange("dial_code", value)}
                error={error.phone}
                onChange={handleChange}
                placeholder={lang('phone_placeholder')}
            />
            <TextArea
                name='description'
                label={lang("description_label")}
                value={state.description}
                error={error.description}
                onChange={handleChange}
                placeholder={lang("description_placeholder")}
            />
            <button
                className='flex items-center justify-center px-3 py-1.5 gap-2 disabled:bg-yellow-900/50 rounded-lg bg-yellow-900 text-white'
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? lang("submitting") : lang("submit")}
            </button>
        </div>
    )
}

export default EnquiryForm