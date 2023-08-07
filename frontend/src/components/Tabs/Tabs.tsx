import React, { useState, ReactNode } from "react";
import './Tabs.css'


interface TabsProps {
    children: ReactNode;
    darkMode: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ children, darkMode }) => {
    const [activeTab, setActiveTab] = useState((children as any)[0].props.value);

    return (
        <div className={`tabs ${darkMode && "darkMode"}`}>
            {React.Children.map(children, (child: any) => {
                // clone the child with the active state
                return React.cloneElement(child, { active: child.props.value === activeTab, setActiveTab: setActiveTab });
            })}
        </div>
    );
};

interface TabsTriggerProps {
    value: string;
    children: ReactNode;
    active?: boolean;
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, active, setActiveTab }) => {
    const handleClick = () => {
        if (setActiveTab) {
            setActiveTab(value);
        }
    };

    return (
        <div className={`tabsTrigger ${active ? "active" : ""}`} onClick={handleClick}>
            {children}
        </div>
    );
};

interface TabsContentProps {
    value: string;
    children: ReactNode;
    active?: boolean;
}

export const TabsContent: React.FC<TabsContentProps> = ({ children, active = false }) => {
    if (!active) {
        return null;
    }

    return (
        <div className="tabsContent">
            {children}
        </div>
    );
};