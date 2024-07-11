'use client';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@nextui-org/react';
import React from 'react'
import Title from '../components/Title';
import { useLangContext } from '@/context/useLangContext';
import images from '@/database/image.json'

type Props = {}

const ContactPage = (props: Props) => {
    const { lang } = useLangContext()

    const handleSendEmail = (text: string = '') => {
        const toEmail = 'mujijayagaharu01@gmail.com';
        const subject = 'Parthership in Bussiness';
        const body = text ? text : ''

        // Construct the mailto link
        const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the default email client
        window.location.href = mailtoLink;
    }

    return (
        <div className='md:max-w-5xl md:mx-auto mx-5'>
            <div className='py-10'>
                <Title>{lang['contact_us']}</Title>
                <div className='text-base py-5 flex flex-col gap-5'>
                    <Avatar src={images.profile} className="w-28 h-28 text-large mx-auto" />
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-xl font-bold'>Abu Daffa</p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className='ml-2 underline cursor-pointer' onClick={() => handleSendEmail()}>mujijayagaharu01@gmail.com</span>
                        </p>
                        <p>{lang['owner']}</p>
                        <p>Pemalang - Indonesia</p>
                    </div>
                </div>
                <Title>{lang['maps']}</Title>
                <div className='py-5'>
                    <iframe
                        className='w-full'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15840.783788161008!2d109.4717961!3d-6.9861847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdde64b034a8b%3A0xa9c0114af3312d5!2sPT.%20Muji%20Jaya%20Gaharu!5e0!3m2!1sid!2sid!4v1720675658260!5m2!1sid!2sid"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>
        </div>
    )
}

export default ContactPage