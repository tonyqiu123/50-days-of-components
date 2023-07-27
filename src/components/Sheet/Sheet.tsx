import React, { useState, ReactNode, useEffect } from "react";
import './Sheet.css'
import Icon from "@/components/Icon/Icon";


interface SheetProps {
    children: ReactNode;
    darkMode?: boolean;
}

export const Sheet: React.FC<SheetProps> = ({ children, darkMode = false }) => {
    const [active, setActive] = useState(false);

    return (
        <div className={`sheet ${darkMode && "darkMode"}`}>

            {React.Children.map(children, (child: any) => {
                // clone the child with the active state
                return React.cloneElement(child, { active, setActive, darkMode });
            })}
        </div>
    );
};

interface SheetTriggerProps {
    children: ReactNode;
    active?: boolean;
    setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ children, active = false, setActive }) => {
    const handleClick = () => {
        if (setActive) {
            setActive(!active);
        }
    };

    return (
        <div className={`sheetTrigger ${active ? "active" : ""}`} onClick={handleClick}>
            {children}
        </div>
    );
};

interface SheetContentProps {
    children: ReactNode;
    active?: boolean;
    setActive?: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode?: boolean
}

export const SheetContent: React.FC<SheetContentProps> = ({ children, active = false, setActive = () => { }, darkMode }) => {

    return (
        <div className={`sheetContent ${active && "active"}`}>
            <Icon handleClick={() => setActive(false)} width={12} height={12} image='/Sheet/closeIcon.svg' invert={darkMode} />
            {children}
        </div>
    );
};
