import React, { useEffect, useState } from 'react';
import './Modal.css'


interface ModalProps {
    children?: React.ReactNode
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean
    darkMode?: boolean
}

const Modal: React.FC<ModalProps> = ({ children, setShowModal, showModal, darkMode = false }) => {

    return (
        <>
            <div className={`${darkMode && 'darkMode'} modal ${showModal && 'showModal'}`}>
                {children}
            </div>
            <div onClick={() => setShowModal(false)} className={`${darkMode && 'darkMode'} backdrop ${showModal ? 'showModal' : ''}`}>
            </div>
        </>
    );
};

export default Modal;
