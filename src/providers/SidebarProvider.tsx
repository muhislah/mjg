import Sidebar from '@/components/Sidebar/Sidebar'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface IProps {
    children: React.ReactNode
}

type Value = {
    isOpen: boolean
    toggleOpen: () => void
}

const SidebarProvider = (props: IProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        if (window) {
            if (isOpen) {
                window.document.body.style.overflow = "hidden"
            } else {
                window.document.body.style.overflow = "auto"
            }
        }

        return () => {
            if (window) {
                window.document.body.style.overflow = "auto"
            }
        }
    }, [isOpen])

    return (
        <SidebarContext.Provider value={{ isOpen, toggleOpen }}>
            <Sidebar />
            {props.children}
        </SidebarContext.Provider>
    )
}

const SidebarContext = createContext({
    isOpen: false,
    toggleOpen: () => { }
})

export const SidebarConsumer = SidebarContext.Consumer
export const useSidebar = () => useContext(SidebarContext)

export default SidebarProvider