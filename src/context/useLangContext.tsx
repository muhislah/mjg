'use client';

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from "react";
import en from '@/lang/database/en.json'
import id from '@/lang/database/id.json'
import ar from '@/lang/database/ar.json'

interface LangContextProps {
    langCode: string
    lang: typeof en
    setLangCode: (langCode: string) => void
}

const LanguageContext = createContext<LangContextProps | undefined>(undefined)

interface IProps {
    children: React.ReactNode
}

export const LangContextProvider = (props: IProps) => {
    const [langCode, setLangCodeState] = useState('en')

    const setLangCode = (langCode: string) => {
        setLangCodeState(prev => {
            window.localStorage.setItem('langCode', langCode)
            return langCode
        })
    }

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

    return (
        <LanguageContext.Provider value={{ lang, setLangCode, langCode }}>
            {props.children}
        </LanguageContext.Provider>
    )
};

export const useLangContext = (): LangContextProps => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }

    return context;
};