import React, { useState, ReactNode, useEffect } from "react";
import './Sheet.css'
import Icon from "@/components/Icon/Icon";
import Backdrop from "@/components/Backdrop/Backdrop";

interface SheetProps {
    children: ReactNode;
    darkMode?: boolean;
    showSheet: boolean
    setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string
}

const Sheet: React.FC<SheetProps> = ({ children, darkMode = false, showSheet = false, setShowSheet, className = '' }) => {

    return (
        <div className={`sheet ${darkMode && "darkMode"} ${className}`}>
            <Backdrop darkMode={darkMode} showBackdrop={showSheet} setShowBackdrop={setShowSheet} />
            <div className={`sheetContent ${showSheet && "active"}`}>
                <Icon handleClick={() => setShowSheet(false)} width={12} height={12} image='/Sheet/closeIcon.svg' invert={darkMode} />
                {children}
            </div>
        </div>
    );
};

export default Sheet