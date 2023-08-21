import React from 'react';
import './Icon.css';
import Image from 'next/image';

interface IconProps extends React.HTMLProps<HTMLAnchorElement> {
    image: string
    alt?: string
    width?: number
    height?: number
    invert?: boolean
    text?: string
    handleClick?: () => void
} 

const Icon: React.FC<IconProps> = ({ image, alt = 'icon', width = 20, height = 20, invert = false, text = '', handleClick = () => { }, ...props }) => {

    return (
        <a {...props} onClick={handleClick} className={`${props.className ? props.className : ''} ${invert && 'inverted'} icon`} >
            <Image width={width} height={height} alt={alt} src={image} />
            {text && <p>{text}</p>}
        </a>
    );
};

export default Icon;
