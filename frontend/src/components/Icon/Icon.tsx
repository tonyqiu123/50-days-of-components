import React from 'react';
import './Icon.css';
import Image from 'next/image';

interface AvatarProps extends React.HTMLProps<HTMLAnchorElement> {
    image: string
    alt?: string
    width?: number
    height?: number
    invert?: boolean
    text?: string
    handleClick?: () => void
}

const Avatar: React.FC<AvatarProps> = ({ image, alt = 'avatar', width = 20, height = 20, invert = false, text = '', handleClick = () => { }, ...props }) => {

    return (
        <a onClick={handleClick} className={`${invert && 'inverted'} avatar`} {...props}>
            <Image width={width} height={height} alt={alt} src={image} />
            {text && <p>{text}</p>}
        </a>
    );
};

export default Avatar;
