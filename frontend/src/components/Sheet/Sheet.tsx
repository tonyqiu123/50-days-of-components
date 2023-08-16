import React, { useState, ReactNode, useEffect, HTMLAttributes } from "react";
import './Sheet.css'
import Icon from "@/components/Icon/Icon";
import Backdrop from "@/components/Backdrop/Backdrop";
import Swipeable from "@/components/Swipeable/Swipeable";

type SheetProps = {
    children: ReactNode;
    darkMode?: boolean;
    showSheet: boolean
    setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
} & HTMLAttributes<HTMLElement>;

const Sheet: React.FC<SheetProps> = ({ children, darkMode = false, showSheet = false, setShowSheet, ...props }) => {

    return (
        <div {...props} className={`${props.className ? props.className : ''} sheet ${darkMode && "darkMode"}  `}>
            <Backdrop darkMode={darkMode} showBackdrop={showSheet} setShowBackdrop={setShowSheet} />
            <Swipeable closeDirection="right" visible={showSheet} setVisible={setShowSheet}>
                <div className={`sheetContent ${showSheet ? "active" : ''}`}>
                    <Icon handleClick={() => setShowSheet(false)} width={12} height={12} image='/Sheet/closeIcon.svg' invert={darkMode} />
                    {children}
                </div>
            </Swipeable>
        </div>
    );
};

export default Sheet