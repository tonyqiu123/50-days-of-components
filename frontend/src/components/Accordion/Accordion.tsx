import React, { createContext, useState, useContext, useRef, useEffect, useCallback, HTMLAttributes } from 'react';
import './Accordion.css'
import Icon from '@/components/Icon/Icon';

type AccordionContextType = {
    activeName: string | null;
    setActiveName: React.Dispatch<React.SetStateAction<string | null>>;
    darkMode?: boolean
    setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

type AccordionProviderProps = {
    children: React.ReactNode;
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

type AccordionProps = {
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

type AccordionTriggerProps = {
    name: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

type AccordionContentProps = {
    name: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>

const AccordionContext = createContext<AccordionContextType>({ activeName: null, setActiveName: () => { }, darkMode: false });

export const useAccordion = () => useContext(AccordionContext);

export const AccordionProvider: React.FC<AccordionProviderProps> = ({ children, darkMode = false }) => {
    const [activeName, setActiveName] = useState<string | null>(null);

    return (
        <AccordionContext.Provider value={{ activeName, setActiveName, darkMode }}>
            <div className={`accordionProvider `}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export const Accordion: React.FC<AccordionProps> = ({ children, ...props }) => {
    const { darkMode } = useAccordion();
    return (
        <div {...props} className={`accordion  ${darkMode && 'darkMode'}`}>
            {children}
        </div>
    );
};


export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ name, children, ...props }) => {
    const { activeName, setActiveName, darkMode } = useAccordion();

    const isActive = name === activeName;

    const handleClick = () => {
        setActiveName(isActive ? null : name);
    };

    return (
        <div {...props} onClick={handleClick} className={`accordionTrigger   ${isActive && 'active'} ${darkMode && 'darkMode'}`}>
            {children}
            <Icon invert={darkMode} image='/Accordion/arrow.svg' alt='' height={16} width={16} />
        </div>
    );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ name, children, ...props }) => {
    const { activeName, darkMode } = useAccordion();
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(0);

    const isActive = name === activeName;

    const updateHeightOnResize = useCallback(() => {
        if (isActive && contentRef?.current?.scrollHeight) {
            setHeight(contentRef.current.scrollHeight + 16);
        }
    }, [isActive]);

    useEffect(() => {
        window.addEventListener('resize', updateHeightOnResize);

        return () => {
            window.removeEventListener('resize', updateHeightOnResize);
        };
    }, [updateHeightOnResize]);


    useEffect(() => {
        if (isActive && contentRef?.current?.scrollHeight) {
            setHeight(contentRef.current.scrollHeight + 16);
        }
    }, [isActive]);

    return (
        <div
            {...props}
            className={`accordionContent ${props.className ? props.className : ''} ${isActive ? 'active' : ''}  ${darkMode && 'darkMode'}`}
            style={{ maxHeight: `${height}px` }}
            ref={contentRef}
        >
            {children}
        </div>
    );
};

