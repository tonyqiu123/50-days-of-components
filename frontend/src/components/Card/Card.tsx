import React, { HTMLAttributes, useState } from 'react';
import './Card.css'

type CardProps = {
    darkMode?: boolean
    size?: 's' | 'm' | 'l'
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const Card: React.FC<CardProps> = ({ darkMode = false, size = 'm', children, ...props }) => {
    return (
        <div {...props} className={` ${props.className ? props.className : ''} card ${darkMode ? 'darkMode' : ''} ${size}`}>
            {children}
        </div>
    )
}

export default Card