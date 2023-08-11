import React, { HTMLAttributes, createContext, useContext, useEffect, useRef, useState } from "react";
import './Expandable.css'
import Image from "next/image";

interface ExpandableContextType {
    darkMode: boolean
}
const ExpandableContext = createContext<ExpandableContextType>({ darkMode: false })
const useExpandable = () => useContext(ExpandableContext);



type ExpandableProviderProps = {
    children?: React.ReactNode;
    darkMode?: boolean;
} & HTMLAttributes<HTMLElement>

export const ExpandableProvider: React.FC<ExpandableProviderProps> = ({ children, darkMode = false, ...props }) => (
    <ExpandableContext.Provider value={{ darkMode }}>
        <div {...props} className={`expandableProvider ${props.className ? props.className : ''}  ${darkMode ? 'darkMode' : ''}`}>
            {children}
        </div>
    </ExpandableContext.Provider>
);


type ExpandableProps = {
    children?: React.ReactNode;
    iconSrc?: string;
    text: string;
    handleClick?: () => void;
    open?: boolean
} & HTMLAttributes<HTMLElement>
export const Expandable: React.FC<ExpandableProps> = ({ children, iconSrc, text, handleClick, open = false, ...props }) => {
    const [expand, setExpand] = useState(open);
    const { darkMode } = useExpandable();
    const childRef = useRef<HTMLDivElement>(null)

    if (handleClick && children) {
        throw new Error("Cannot provide both 'handleClick' and 'children' to Expandable.");
    }

    return (
        <React.Fragment>
            <div {...props} onClick={() => setExpand(prev => !prev)} className={`expandable  ${props.className ? props.className : ''} ${expand ? 'expanded' : ''}  ${darkMode ? 'darkMode' : ''}`}>
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
        </React.Fragment>
    );
};