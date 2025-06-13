import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import EnquiryForm from './EnquiryForm'

type Props = {
    isOpen: string
    onClose: () => void
}

const DirectEnquiryModal = (props: Props) => {
    const [redrawForm, setRedrawForm] = useState(0)
    useEffect(() => {
        if (window) {
            if (props.isOpen) {
                window.document.body.style.overflow = "hidden"
            } else {
                window.document.body.style.overflow = "auto"
                setRedrawForm(prev => prev + 1)
            }
        }

        return () => {
            if (window) {
                window.document.body.style.overflow = "auto"
            }
        }
    }, [props.isOpen])

    return (
        <div className={`fixed inset-0 z-50 flex items-center transform transition-opacity duration-200 justify-center bg-white/80 backdrop-blur-3xl p-4 ${!props.isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <button
                onClick={props.onClose}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 transition"
                aria-label="Close"
            >
                <FaTimes size={20} />
            </button>
            <div className="w-4xl">
                <div>
                    <h2 className='mb-6 font-bold text-2xl'>Order Form</h2>
                </div>
                <EnquiryForm
                    defaultState={{
                        product: props.isOpen
                    }}
                    redraw={redrawForm}
                    onSuccessCallback={() => {
                        props.onClose()
                        setRedrawForm(prev => prev + 1)
                    }}
                />
            </div>
        </div>
    )
}

export default DirectEnquiryModal