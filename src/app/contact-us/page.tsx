'use client';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@nextui-org/react';
import React from 'react'
import Title from '../components/Title';
import { useLangContext } from '@/context/useLangContext';

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
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-28 h-28 text-large mx-auto" />
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-xl font-bold'>Aji Febriyanto</p>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.8219803426703!2d109.4709258802505!3d-6.986856633948766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdde64b034a8b%3A0xa9c0114af3312d5!2sCV.%20Muji%20Jaya%20Gaharu!5e0!3m2!1sid!2sid!4v1704724049831!5m2!1sid!2sid"
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