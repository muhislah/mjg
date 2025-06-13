export type CustomRulesOuput = {
    isValid: boolean
    errorMessage: string
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IValidationErrors<T = any> = Partial<{
    [key in keyof T]: string
}>

export interface IValidationRules {
    [key: string]: string | ((value: string) => CustomRulesOuput)
}

export interface IValidationAlias {
    [key: string]: string
}

type MessageTypes = 'required' | 'email' | 'number' | 'file' | 'min-char' | 'max-char' | 'match' | 'match-var' | 'not-empty' | 'phone-number'

export type IMessages = {
    [key in MessageTypes]?: string
}

export type LocalizedMessages = {
    en: IMessages,
    id: IMessages,
}

const localizedMessages: LocalizedMessages = {
    en: {
        required: 'Field :key is required',
        email: 'Invalid format for Email',
        'phone-number': 'Please enter a phone number between 10 and 25 digits',
        number: 'Field :key need to be a number',
        file: 'File in not recognized',
        'min-char': 'Field :key have a minimum of :count character',
        'max-char': 'Field :key have a maximum of :count character',
        match: ':key is not valid',
        'match-var': ':key is not match with :match',
        'not-empty': 'Please fill :key',
    },
    id: {
        required: 'Form :key wajib diisi',
        email: 'Format email tidak sesuai',
        'phone-number': 'Harap isi nomor telepon di antara 10 sampai 25 digit angka',
        number: 'Form :key harus berupa angka',
        file: 'File tidak dapat dibaca',
        'min-char': 'Form :key minimal berisi :count karakter',
        'max-char': 'Form :key maksimum berisi :count karakter',
        match: ':key tidak sesuai',
        'match-var': ':key tidak sesuai dengan :match',
        'not-empty': 'Harap mengisi :key',
    }
}

type OtherKeys = {
    keyName: string
    value: string
}[]

class Messages {
    currentMessages: IMessages = localizedMessages.en

    constructor(langCode?: 'en' | 'id', customMessages?: IMessages | LocalizedMessages) {
        if (langCode) {
            this.currentMessages = localizedMessages[langCode]
        }

        if (customMessages) {
            if ('en' in customMessages && langCode) {
                this.currentMessages = {
                    ...this.currentMessages,
                    ...customMessages[langCode],
                }
            } else {
                this.currentMessages = {
                    ...this.currentMessages,
                    ...customMessages,
                }
            }
        }
    }

    parseMessage = (messageType: keyof IMessages, fieldName?: string, otherKeys?: OtherKeys) => {
        let message = this.currentMessages[messageType]

        if (!message) throw new Error('Message value is missing')

        if (fieldName) {
            message = message.replace(':key', fieldName)
        }

        if (otherKeys && otherKeys.length > 0) {
            otherKeys.forEach(key => {
                if (message) message = message.replace(key.keyName, key.value)
            })
        }

        return message
    }
}


/**
 * Validate data
 * @param data object with key value pair. e.g { name: 'Rakumairu' }
 * @param rules object with key for data and its rules. e.g { name: 'required|required_if|number|email|nullable' }
 *              for custom rules you can pass a function that returns isValid and error message
 * @param exceptions array of key that need to be skipped
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const validateData = (data: any, rules: IValidationRules, alias?: IValidationAlias, exceptions?: string[], customMessages?: IMessages | LocalizedMessages, langCode?: 'en' | 'id') => {
    const errors: IValidationErrors = {}
    let valid = true

    const Message = new Messages(langCode, customMessages)

    for (const key in data) {
        if (exceptions?.includes(key)) continue

        if (!(key in rules)) continue

        const currentValue = data[key]
        const keyName = alias ? alias[key] || key : key

        const currentRules = rules[key]

        // Default rules validation
        if (typeof currentRules === 'string') {
            const rulesList = typeof currentRules === 'string' ? currentRules.split('|') : currentRules

            if (rulesList.length === 0) continue

            if (rulesList.includes('nullable') && !currentValue) continue

            if (rulesList.includes('required') && !currentValue) {
                valid = false
                errors[key] = Message.parseMessage('required', keyName)
            }

            const requiredIfArray = rulesList.filter(value => /required_if/.test(value))
            if (requiredIfArray.length > 0 && !currentValue) {
                const requirementArray = requiredIfArray[0].split(':')
                // check if there's actually a requirement
                if (requirementArray.length < 2) throw new Error('required_if requires secondary parameter. e.g required_if:name=cat')

                const requirement = requirementArray[1]
                // check if the requirements is an equal comparison
                if (requirement.includes('=')) {
                    const splittedRequirement = requirement.split('=')

                    if (splittedRequirement.length !== 2) throw new Error('equal comparison requires key and value pair that need to be checked')

                    const secondKey = splittedRequirement[0]
                    const secondValue = ['true', 'false'].includes(splittedRequirement[1]) ? splittedRequirement[1] === 'true' ? true : false : splittedRequirement[1]

                    if (data[secondKey] === secondValue) {
                        valid = false
                        errors[key] = Message.parseMessage('required', keyName)
                    }
                }
            }

            if (rulesList.includes('email') && !!currentValue) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!re.test(String(currentValue).toLowerCase())) {
                    valid = false
                    errors[key] = Message.parseMessage('email')
                }
            }

            if (rulesList.includes('number') && !!currentValue) {
                if (!Number.isFinite(Number(String(currentValue).replace(/,/g, '').replace(/./g, '')))) {
                    valid = false
                    errors[key] = Message.parseMessage('number', keyName)
                }
            }

            if (rulesList.includes('File') && !!currentValue) {
                if (!('type' in currentValue)) {
                    valid = false
                    errors[key] = Message.parseMessage('file', keyName)
                }
            }

            const minCharArray = rulesList.filter(value => /min-char/.test(value))
            if (minCharArray.length > 0 && !!currentValue) {
                const minChar = minCharArray[0]
                const keyValueArray = minChar.split('=')

                if (keyValueArray.length < 2) {
                    throw new Error('Value for min-char validation is required')
                } else {
                    const minimumCharacterValue = keyValueArray[1]
                    if (currentValue.length < Number(minimumCharacterValue)) {
                        valid = false
                        errors[key] = Message.parseMessage('min-char', keyName, [{ keyName: ':count', value: minimumCharacterValue }])
                    }
                }
            }

            const maxCharArray = rulesList.filter(value => /max-char/.test(value))
            if (maxCharArray.length > 0 && !!currentValue) {
                const maxChar = maxCharArray[0]
                const keyValueArray = maxChar.split('=')

                if (keyValueArray.length < 2) {
                    throw new Error('Value for max-char validation is required')
                } else {
                    const maximumCharacterValue = keyValueArray[1]
                    if (currentValue.length > Number(maximumCharacterValue)) {
                        valid = false
                        errors[key] = Message.parseMessage('max-char', keyName, [{ keyName: ':count', value: maximumCharacterValue }])
                    }
                }
            }

            const matchArray = rulesList.filter(value => /match=/.test(value))
            if (matchArray.length > 0 && !!currentValue) {
                const match = matchArray[0]
                const keyValueArray = match.split('=')

                if (keyValueArray.length < 2) {
                    throw new Error('Value for match validation is required')
                } else {
                    const matchValueAndRules = keyValueArray[1]
                    const matchValueAndRulesArray = matchValueAndRules.split('~')

                    if (matchValueAndRulesArray.length < 2) {
                        throw new Error('RegExp options is required for match validation')
                    } else {
                        const matcher = new RegExp(matchValueAndRulesArray[0], matchValueAndRulesArray[1])

                        if (!matcher.test(currentValue)) {
                            valid = false
                            errors[key] = Message.parseMessage('match', keyName)
                        }
                    }
                }
            }

            const matchVarArray = rulesList.filter(value => /match-var=/.test(value))
            if (matchVarArray.length > 0 && !!currentValue) {
                const match = matchVarArray[0]
                const keyValueArray = match.split('=')

                if (keyValueArray.length < 2) {
                    throw new Error('Value for match-var validation is required')
                } else {
                    const matchVar = keyValueArray[1]

                    if (currentValue !== data[matchVar]) {
                        valid = false
                        errors[key] = Message.parseMessage('match-var', keyName, [{ keyName: ':match', value: alias && matchVar in alias ? alias[matchVar] : matchVar }])
                    }
                }
            }

            if (rulesList.includes('not-empty') && !!currentValue && Array.isArray(currentValue)) {
                if (currentValue.length === 0) {
                    valid = false
                    errors[key] = Message.parseMessage('not-empty', keyName)
                }
            }
        } else {
            // Custom validation
            const { isValid, errorMessage } = currentRules(currentValue)
            if (!isValid) {
                valid = false
                errors[key] = errorMessage
            }
        }
    }

    return {
        isValid: valid,
        errors,
    }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const validateOne = (key: string, value: any, rules: IValidationRules, alias?: IValidationAlias, exceptions?: string[], customMessages?: IMessages) => {
    return validateData({ [key]: value }, rules, alias, exceptions, customMessages)
}
