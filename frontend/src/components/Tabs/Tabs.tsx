import React, { useState, ReactNode, HTMLAttributes } from "react";
import './Tabs.css'


type TabsProps = {
    children: ReactNode;
    darkMode: boolean;
} & HTMLAttributes<HTMLElement>;

export const Tabs: React.FC<TabsProps> = ({ children, darkMode, ...props }) => {
    const [activeTab, setActiveTab] = useState((children as any)[0].props.value);

    return (
        <div {...props} className={` ${props.className ? props.className : ''} tabs ${darkMode && "darkMode"}`}>
            {React.Children.map(children, (child: any) => {
                // clone the child with the active state
                return React.cloneElement(child, { active: child.props.value === activeTab, setActiveTab: setActiveTab });
            })}
        </div>
    );
};

type TabsTriggerProps = {
    value: string;
    children: ReactNode;
    active?: boolean;
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
} & HTMLAttributes<HTMLElement>;

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, active, setActiveTab, ...props }) => {
    const handleClick = () => {
        if (setActiveTab) {
            setActiveTab(value);
        }
    };

    return (
        <div {...props} className={`${props.className ? props.className : ''} tabsTrigger ${active ? "active" : ""}`} onClick={handleClick}>
            {children}
        </div>
    );
};

type TabsContentProps = {
    value: string;
    children: ReactNode;
    active?: boolean;
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
} & HTMLAttributes<HTMLElement>;

export const TabsContent: React.FC<TabsContentProps> = ({ children, setActiveTab, active = false, ...props }) => {
    if (!active) {
        return null;
    }

    return (
        <div {...props} className={`tabsContent ${props.className ? props.className : ''}`}>
            {children}
        </div>
    );
};