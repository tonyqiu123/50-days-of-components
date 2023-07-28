import React, { useEffect, useState } from 'react';
import './Backdrop.css'


interface BackdropProps {
    setShowBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
    showBackdrop: boolean
    darkMode?: boolean
}

const Backdrop: React.FC<BackdropProps> = ({ setShowBackdrop, showBackdrop, darkMode = false }) => {

    return (
        <div onClick={() => setShowBackdrop(false)} className={`${darkMode && 'darkMode'} backdrop ${showBackdrop ? 'showBackdrop' : ''}`}>
        </div>
    );
};

export default Backdrop; 
