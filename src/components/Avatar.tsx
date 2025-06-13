import React from 'react';
import Image from 'next/image';

type AvatarProps = {
    src: string;
    className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, className = '' }) => {
    return (
        <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
            <Image
                src={src}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                unoptimized={false} // You can set to true if image is external and not allowed in next.config.js
                priority={false}
            />
        </div>
    );
};

export default Avatar;
