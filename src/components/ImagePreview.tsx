import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

type ImagePreviewProps = {
    isOpen: boolean;
    image: string;
    onClose: () => void;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ isOpen, image, onClose }) => {
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
        <div className={`fixed inset-0 z-50 flex items-center transform transition-opacity duration-200 justify-center bg-white/80 backdrop-blur-3xl p-4 ${!isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 transition"
                aria-label="Close"
            >
                <FaTimes size={20} />
            </button>
            <div className="relative max-w-full max-h-full overflow-auto rounded-lg shadow-lg bg-white dark:bg-gray-900">
                <img
                    src={image || ""}
                    alt="Preview"
                    className="max-h-[80vh] max-w-full object-contain rounded-md"
                />
            </div>
        </div>
    );
};

export default ImagePreview;
