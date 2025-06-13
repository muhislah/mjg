import Avatar from '@/components/Avatar';
import Master from '@/components/Master';
import Title from '@/components/Title';
import { useLanguage } from '@/providers/LanguageProvider';
import { ALL_IMAGES, METAS } from '@/utils/constants';
import { sendWhatsApp } from '@/utils/helper';
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
    const { lang, locale } = useLanguage()
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
        <Master
            title={METAS[locale as keyof typeof METAS]['contact-us'].title}
            description={METAS[locale as keyof typeof METAS]['contact-us'].description}
            path='/contact-us'
        >
            <div className='md:max-w-5xl md:mx-auto mx-5'>
                <div className='py-10'>
                    <Title>{lang('contact_us')}</Title>
                    <div className='text-base py-5 flex flex-col gap-5 items-center'>
                        <Avatar src={ALL_IMAGES.profile} className="rounded-full border border-neutral-300 w-28 h-28 text-large" />
                        <div className='flex flex-col items-center gap-2'>
                            <div className='flex flex-col items-center gap-2'>
                                <p className='text-xl font-bold'>Abu Daffa</p>
                                <span className='text-sm text-center'>
                                    <span>{lang('owner')}</span><br />
                                    <span>Pemalang - Indonesia</span>
                                </span>
                            </div>
                            <div className='flex flex-col md:flex-row items-center gap-2'>
                                <button
                                    className='flex text-sm items-center justify-center px-3 py-1.5 gap-2 rounded-lg bg-green-600 text-white'
                                    onClick={() => sendWhatsApp(`6285867417482`)}
                                >
                                    <FaWhatsapp />
                                    +62 858-6741-7482
                                </button>
                                <button
                                    className='flex text-sm items-center justify-center px-3 py-1.5 gap-2 rounded-lg bg-green-600 text-white'
                                    onClick={() => sendWhatsApp(`6285225611505`)}
                                >
                                    <FaWhatsapp />
                                    +62 852-2561-1505
                                </button>
                            </div>
                            <button
                                className='flex text-sm bg-neutral-400 items-center justify-center px-3 py-1.5 gap-2 rounded-lg text-white hover:bg-blend-difference'
                                onClick={() => handleSendEmail()}
                            >
                                <FaEnvelope />
                                mujijayagaharu01@gmail.com
                            </button>
                        </div>
                    </div>
                    <Title>{lang('maps')}</Title>
                    <div className='py-5'>
                        <div className='border border-neutral-300 rounded-xl md:rounded-3xl overflow-hidden p-0 md:p-5 '>
                            <iframe
                                className='w-full rounded-xl'
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15840.783788161008!2d109.4717961!3d-6.9861847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdde64b034a8b%3A0xa9c0114af3312d5!2sPT.%20Muji%20Jaya%20Gaharu!5e0!3m2!1sid!2sid!4v1720675658260!5m2!1sid!2sid"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className='flex flex-row p-3 md:p-0 items-center mt-0 md:mt-5 gap-3'>
                                <FaMapMarkerAlt className='text-red-700' />
                                <div className='text-sm'>Bagolan, Karangbrai, Kec. Bodeh, Kabupaten Pemalang, Jawa Tengah 52365</div>
                            </div>
                        </div>

                    </div>
                    <Title>{lang('marketing_office')}</Title>
                    <div className='py-5'>
                        <div className='border border-neutral-300 rounded-xl md:rounded-3xl overflow-hidden p-0 md:p-5 '>
                            <iframe
                                className='w-full rounded-xl'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4416.276088846118!2d106.6843316!3d-6.1440326999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9aa3c9f1fdf%3A0x290ddc1c7cc775e5!2sPT.MUJI%20JAYA%20GAHARU%20(%20ABU%20DAFFA%20OUD%20)!5e1!3m2!1sen!2sid!4v1749814491643!5m2!1sen!2sid"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className='flex flex-row p-3 md:p-0 items-center mt-0 md:mt-5 gap-3'>
                                <FaMapMarkerAlt className='text-red-700' />
                                <div className='text-sm'>Grand Duta Garden Blok D.1 No. 47, Jurumudi Baru, Kec. Benda, Kota, Kota Tangerang, Banten 15124</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    )
}

export default ContactPage