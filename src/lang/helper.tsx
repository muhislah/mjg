import { useEffect, useMemo, useState } from 'react'

/**
 * Language Database
 */
import en from './database/en.json'
import id from './database/id.json'
import ar from './database/ar.json'

export const useLang = () => {
    const [langCode, setLangCode] = useState('en')

    useEffect(() => {
        localStorage.setItem('langCode', langCode)
    }, [langCode])

    useEffect(() => {
        const localLangCode = localStorage.getItem('langCode')

        if (localLangCode) {
            setLangCode(localLangCode)
        } else {
            setLangCode('en')
        }
    }, [])

    const lang = useMemo(() => {
        switch (langCode) {
            case 'en':
                return en
            case 'id':
                return id
            case 'ar':
                return ar
            default:
                return en
        }
    }, [langCode])

    return { setLangCode, langCode, lang }
}