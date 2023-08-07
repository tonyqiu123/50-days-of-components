import React, { useState, ReactNode, useEffect } from "react";
import './Sheet.css'
import Icon from "@/components/Icon/Icon";
import Backdrop from "@/components/Backdrop/Backdrop";
import Swipeable from "@/components/Swipeable/Swipeable";

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
            <Swipeable closeDirection="right" visible={showSheet} setVisible={setShowSheet}>
                <div className={`sheetContent ${showSheet && "active"}`}>
                    <Icon handleClick={() => setShowSheet(false)} width={12} height={12} image='/Sheet/closeIcon.svg' invert={darkMode} />
                    {children}
                </div>
            </Swipeable>
        </div>
    );
};

export default Sheet