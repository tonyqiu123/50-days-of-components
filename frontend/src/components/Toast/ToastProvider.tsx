import React, { useEffect, useState, useRef } from 'react';
import './Toast.css'

interface ToastProviderProps {
    children?: React.ReactNode
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

    return (
        <div className='toastProvider'>
            {children}
        </div>
    );
};

export default ToastProvider;
