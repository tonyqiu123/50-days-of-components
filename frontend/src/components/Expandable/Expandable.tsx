import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import './Expandable.css'
import Image from "next/image";

interface ExpandableContextType {
    darkMode: boolean
}
const ExpandableContext = createContext<ExpandableContextType>({ darkMode: false })
const useExpandable = () => useContext(ExpandableContext);



interface ExpandableProviderProps {
    className?: string;
    children?: React.ReactNode;
    darkMode?: boolean;
}

export const ExpandableProvider: React.FC<ExpandableProviderProps> = ({ className = '', children, darkMode = false }) => (
    <ExpandableContext.Provider value={{ darkMode }}>
        <div className={`expandableProvider ${className} ${darkMode ? 'darkMode' : ''}`}>
            {children}
        </div>
    </ExpandableContext.Provider>
);


interface ExpandableProps {
    className?: string;
    children?: React.ReactNode;
    iconSrc?: string;
    text: string;
    handleClick?: () => void;
    open?: boolean
}
export const Expandable: React.FC<ExpandableProps> = ({ className = '', children, iconSrc, text, handleClick, open = false }) => {
    const [expand, setExpand] = useState(open);
    const { darkMode } = useExpandable();
    const childRef = useRef<HTMLDivElement>(null)

    if (handleClick && children) {
        throw new Error("Cannot provide both 'handleClick' and 'children' to Expandable.");
    }

    return (
        <>
            <div onClick={() => setExpand(prev => !prev)} className={`expandable ${expand ? 'expanded' : ''} ${className} ${darkMode ? 'darkMode' : ''}`}>
                <div className="expandableLeft">
                    <div className="expandableIcon">
                        {iconSrc && <Image src={iconSrc} width={20} height={20} alt='' />}
                    </div>
                    {text}
                </div>
                {children && <Image className={`expandableArrow ${expand ? 'expanded' : ''}`} src='/Expandable/downArrow.svg' width={16} height={16} alt='' />}
            </div>
            <div className="expandableChildContainer" style={{ maxHeight: `${expand ? 'unset' : '0'}` }} ref={childRef}>
                {children}
            </div>
        </>
    );
};