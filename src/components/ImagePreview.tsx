import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

type ImagePreviewProps = {
    isOpen: boolean;
    image: string;
    onClose: () => void;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ isOpen, image, onClose }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        }

        return () => {
            if (typeof window !== 'undefined') {
                document.body.style.overflow = 'auto';
            }
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transform transition-opacity duration-200 bg-white/80 backdrop-blur-3xl p-4 ${!isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 transition"
                aria-label="Close"
            >
                <FaTimes size={20} />
            </button>

            <div className="relative max-h-[80vh] max-w-full overflow-auto rounded-lg shadow-lg bg-white dark:bg-gray-900">
                <div className="relative w-fit h-fit max-h-[80vh] max-w-full">
                    {
                        image.endsWith("mp4") ?
                            < video
                                className="object-cover max-w-full h-full rounded-lg"
                                src={image}
                                autoPlay
                                muted
                            /> :
                            <Image
                                src={image || ''}
                                alt="Preview"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-auto max-h-[80vh] w-auto max-w-full rounded-md object-contain"
                                unoptimized
                            />
                    }
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
