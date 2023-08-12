import React, { HTMLAttributes } from 'react';
import './Separator.css'

type SeparatorProps = {
    darkMode?: boolean
    orientation: 'v' | 'h'
} & HTMLAttributes<HTMLElement>;

const Separator: React.FC<SeparatorProps> = ({ darkMode = false, orientation, ...props }) => {
    return (
        <div {...props} className={`separator ${orientation} ${props.className ? props.className : ''} ${darkMode ? 'darkMode' : ''}`}></div>
    )
}

export default Separator