import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Backdrop.css'


type BackdropProps = {
    setShowBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
    showBackdrop: boolean
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

const Backdrop: React.FC<BackdropProps> = ({ setShowBackdrop, showBackdrop, darkMode = false, ...props }) => {

    return (
        <div {...props} onClick={() => setShowBackdrop(false)} className={` ${props.className ? props.className : ''} ${darkMode && 'darkMode'} backdrop ${showBackdrop ? 'showBackdrop' : ''}`}>
        </div>
    );
};

export default Backdrop; 
