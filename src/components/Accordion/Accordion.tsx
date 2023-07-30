import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import './Accordion.css'
import Icon from '@/components/Icon/Icon';

type AccordionContextType = {
    activeName: string | null;
    setActiveName: React.Dispatch<React.SetStateAction<string | null>>;
    darkMode?: boolean
    setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
};

type AccordionProviderProps = {
    children: React.ReactNode;
    className?: string;
    darkMode?: boolean
};

type AccordionProps = {
    children: React.ReactNode;
    className?: string;
};

type AccordionTriggerProps = {
    name: string;
    children: React.ReactNode;
    className?: string;
};

type AccordionContentProps = {
    name: string;
    children: React.ReactNode;
    className?: string;
};

const AccordionContext = createContext<AccordionContextType>({ activeName: null, setActiveName: () => { }, darkMode: false });

export const useAccordion = () => useContext(AccordionContext);

export const AccordionProvider: React.FC<AccordionProviderProps> = ({ children, className = '', darkMode = false }) => {
    const [activeName, setActiveName] = useState<string | null>(null);

    return (
        <AccordionContext.Provider value={{ activeName, setActiveName, darkMode }}>
            <div className={`accordionProvider ${className}`}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => {
    const { darkMode } = useAccordion();
    return (
        <div className={`accordion ${className} ${darkMode && 'darkMode'}`}>
            {children}
        </div>
    );
};


export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ name, children, className = '' }) => {
    const { activeName, setActiveName, darkMode } = useAccordion();

    const isActive = name === activeName;

    const handleClick = () => {
        setActiveName(isActive ? null : name);
    };

    return (
        <div onClick={handleClick} className={`accordionTrigger ${className} ${isActive && 'active'} ${darkMode && 'darkMode'}`}>
            {children}
            <Icon invert={darkMode} image='/Accordion/arrow.svg' alt='' height={16} width={16} />
        </div>
    );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ name, children, className = '' }) => {
    const { activeName, darkMode } = useAccordion();
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(0);

    const isActive = name === activeName;

    const updateHeightOnResize = () => {
        if (isActive) {
            setHeight(contentRef.current?.scrollHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateHeightOnResize);

        return () => {
            window.removeEventListener('resize', updateHeightOnResize);
        };
    }, [isActive, updateHeightOnResize]);

    useEffect(() => {
        setHeight(isActive ? contentRef.current?.scrollHeight : 0);
    }, [isActive]);

    return (
        <div
            className={`accordionContent ${isActive ? 'active' : ''} ${className} ${darkMode && 'darkMode'}`}
            style={{ maxHeight: `${height}px` }}
            ref={contentRef}
        >
            {children}
        </div>
    );
};

