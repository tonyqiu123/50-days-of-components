import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Alert.css'
import Backdrop from '../Backdrop/Backdrop';


type AlertProps = {
    children?: React.ReactNode
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
    showAlert: boolean
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

const Alert: React.FC<AlertProps> = ({ children, setShowAlert, showAlert, darkMode = false, ...props }) => {

    return (
        <React.Fragment >
            <div {...props} className={`${props.className ? props.className : ''} ${darkMode && 'darkMode'} alert ${showAlert ? 'showAlert' : ''}`}>
                {children}
            </div>
            <Backdrop darkMode={darkMode} showBackdrop={showAlert} setShowBackdrop={() => {}} />
        </React.Fragment>
    );
};

export default Alert;
