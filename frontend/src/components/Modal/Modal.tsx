import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';


type ModalProps = {
    children?: React.ReactNode
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

const Modal: React.FC<ModalProps> = ({ children, setShowModal, showModal, darkMode = false, ...props }) => {

    return (
        <React.Fragment >
            <div {...props} className={`${props.className ? props.className : ''} ${darkMode && 'darkMode'} modal ${showModal ? 'showModal' : ''}`}>
                {children}
            </div>
            <Backdrop darkMode={darkMode} showBackdrop={showModal} setShowBackdrop={setShowModal} />
        </React.Fragment>
    );
};

export default Modal;
