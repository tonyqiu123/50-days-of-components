import React, { useEffect, useState } from 'react';
import './Toast.css';
import Image from 'next/image';

interface ToastProps {
    children?: React.ReactNode;
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
    showToast: boolean;
    darkMode?: boolean;
}

const Toast: React.FC<ToastProps> = ({
    children,
    setShowToast,
    showToast,
    darkMode = false,
}) => {
    const [shouldRender, setShouldRender] = useState(showToast);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (showToast) {
            setShouldRender(true);
            if (timeout) {
                clearTimeout(timeout);
            }
        } else {
            timeout = setTimeout(() => {
                setShouldRender(false);
            }, 200);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [showToast]);

    useEffect(() => {
        if (showToast) {
            const timeout = setTimeout(() => {
                setShowToast(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [showToast, setShowToast]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div className={`${darkMode && 'darkMode'} toast ${showToast && 'showToast'}`}>
            <Image
                onMouseDown={() => setShowToast(false)}
                width={12}
                height={12}
                alt="close toast"
                src="/Toast/closeIcon.svg"
            />
            {children}
        </div>
    );
};

export default Toast;
