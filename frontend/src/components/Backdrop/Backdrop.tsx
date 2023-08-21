import React, { useEffect } from 'react';
import './Backdrop.css';

type BackdropProps = {
    setShowBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
    showBackdrop: boolean;
    darkMode?: boolean;
};

const Backdrop: React.FC<BackdropProps> = ({ setShowBackdrop, showBackdrop, darkMode = false }) => {
    useEffect(() => {
        if (showBackdrop) {
            // Disable scrolling when backdrop is active
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when backdrop is not active
            document.body.style.overflow = 'auto';
        }

        // Cleanup: Re-enable scrolling when component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showBackdrop]);

    return (
        <div
            onClick={() => setShowBackdrop(false)}
            className={` ${darkMode && 'darkMode'} backdrop ${showBackdrop ? 'showBackdrop' : ''}`}
        ></div>
    );
};

export default Backdrop;
