import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/providers/LanguageProvider';

const Custom404 = () => {
    const { lang } = useLanguage()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">{lang("not_found")}</p>
            <Link href="/">
                <div className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Go back home
                </div>
            </Link>
        </div>
    );
};

export default Custom404;
