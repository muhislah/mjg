import { useRouter } from "next/router"
import { createContext, useCallback, useContext } from "react"
import { enDict } from "@/dictionaries/en"
import { idDict } from "@/dictionaries/id"
import { arDict } from "@/dictionaries/ar"

interface IProps {
    children: React.ReactNode
}

export type IDict = keyof typeof idDict

type Value = {
    locale: string
    lang: (key: IDict) => string
    generateUrl: (path: string, fixedLocale?: string) => string
}

export const LanguageProvider = (props: IProps) => {
    const { locale = 'id' } = useRouter()
    const direction = locale === 'ar' ? "rtl" : "ltr"

    /**
     * Get localized 
     * @param key dictionary key
     */
    const lang = useCallback((key: keyof (typeof idDict)): string => {
        switch (locale) {
            case 'id': {
                return idDict[key] as string
            }
            case 'ar': {
                return arDict[key] as string
            }
            case 'en': {
                return enDict[key] as string
            }
            default: return 'UNREGISTERED TEXT ON DICTIONARY'
        }
    }, [locale])

    /**
     * Generate url based on the page path and locale
     * @param path page path
     * @param fixedLocale fixed locale type
     * @returns final url including the locale
     */
    const generateUrl = (path: string, fixedLocale?: string) => {
        // Only show the locale url for en, since id doesnt use a suffix
        const localeString = (fixedLocale || locale) === 'id' ? '' : `/en`

        // Hide the forward slash for homepage
        const actualPath = path === '/' ? '' : `${path}`

        return `${process.env.NEXT_PUBLIC_MAINSITE_URL}${localeString}${actualPath}`
    }

    return (
        <LanguageContext.Provider value={{ locale, lang, generateUrl }}>
            <div dir={direction}>
                {props.children}
            </div>
        </LanguageContext.Provider>
    )
}

export const LanguageContext = createContext<Value>({
    locale: '',
    lang: () => '',
    generateUrl: () => '',
})

export const LanguageConsumer = LanguageContext.Consumer
export const useLanguage = () => useContext(LanguageContext)
