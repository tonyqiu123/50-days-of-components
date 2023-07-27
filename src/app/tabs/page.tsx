'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';

const TabsDemo: React.FC = () => {


  const [isDarkMode, setIsDarkMode] = useState(false)

  const reactCode = `import React, { useState, ReactNode } from "react";
  import './Tabs.css'
  
  
  interface TabsProps {
      children: ReactNode;
      darkMode: boolean;
  }
  
  export const Tabs: React.FC<TabsProps> = ({ children, darkMode }) => {
      const [activeTab, setActiveTab] = useState((children as any)[0].props.value);
  
      return (
          <div className={\`tabs \${ darkMode && "darkMode"
}\`}>
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
          <div className={\`tabsTrigger \${ active ? "active" : "" } \`} onClick={handleClick}>
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
  };`;



  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <Button variant='secondary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Tooltip darkMode={isDarkMode} toolTipText='A stack of content sections, referred to as tab panels, that are displayed individually, one after the other.'><p>Tabs component</p></Tooltip>

      <Tabs darkMode={isDarkMode}>

        <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>

        <TabsContent value='preview'><div className='demoBox'></div></TabsContent>
        <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

      </Tabs>

    </div>
  );
};

export default TabsDemo;
