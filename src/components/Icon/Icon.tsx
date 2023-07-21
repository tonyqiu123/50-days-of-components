import React, { useState } from 'react';
import './Icon.css';
import Image from 'next/image';

interface AvatarProps {
    image: string
    alt?: string
    width?: number
    height?: number
    href?: string
    invert?: boolean
    text?: string
}

const Avatar: React.FC<AvatarProps> = ({ image, alt = 'avatar', width = 20, height = 20, href = '', invert = false, text = '', ...props }) => {

    return (
        <a href={href}  className={`${invert && 'inverted'} avatar`} style={{ height: `${height + 20}px` }}>
            <Image {...props} width={width} height={height} alt={alt} src={image} />
            {text && <p>{text}</p>}
        </a>
    );
};

export default Avatar;
