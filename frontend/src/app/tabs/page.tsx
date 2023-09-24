'use client'

import React, { useState } from 'react';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import { Tabs, TabsContent, TabsTrigger } from '@/components/Tabs/Tabs';
import Separator from '@/components/Separator/Separator';

const TabsDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import { Tabs, TabsContent, TabsTrigger } from '@/components/Tabs/Tabs';
    
<Tabs darkMode={isDarkMode}>

    <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
    <TabsTrigger value='code'><p>Code</p></TabsTrigger>

    <TabsContent value='preview'><div className='demoBox'></div></TabsContent>
    <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

</Tabs>`;

    const tsxCode = `import React, { useState, ReactNode, HTMLAttributes } from "react";
import './Tabs.css'


type TabsProps = {
    children: ReactNode;
    darkMode: boolean;
} & HTMLAttributes<HTMLElement>;

export const Tabs: React.FC<TabsProps> = ({ children, darkMode, ...props }) => {
    const [activeTab, setActiveTab] = useState((children as any)[0].props.value);

    return (
        <div {...props} className={\` \${props.className ? props.className : ''} tabs \${darkMode && "darkMode"}\`}>
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
        <div {...props} className={\`\${props.className ? props.className : ''} tabsTrigger \${active ? "active" : ""}\`} onClick={handleClick}>
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
        <div {...props} className={\`tabsContent \${props.className ? props.className : ''}\`}>
            {children}
        </div>
    );
};`

    const cssCode = `.tabs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.tabsTrigger {
    position: relative;
    z-index: 1;
    padding: 8px 24px;
    cursor: pointer;
    color: #A0A0A0;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
}

.active.tabsTrigger {
    border-bottom: 2px solid rgb(0, 0, 0);
    color: black;
}

.tabsContent {
    border-top: 2px solid #d4d4d4;
    margin-top: -2px;
    padding-top: 16px;
    width: 100%;
}

.tabsTrigger,
.tabsTrigger>p {
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

/* Darkmode */
.darkMode.tabs>.tabsTrigger>p {
    color: #A0A0A0;
}

.darkMode.tabs>.active.tabsTrigger {
    border-bottom: 2px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
}

.darkMode.tabs>.active.tabsTrigger>p {
    color: rgb(243, 243, 243);
}

.darkMode.tabs>.tabsContent {
    border-top: 2px solid #313131;
}`




    return (
        <React.Fragment>

            <h1>Tabs component</h1>
            <Spacer y={4} />
            <p>The "Tabs" component serves to display a jsx element on demand. The visual design is borrowed from shadcn while the developer experience is enhanced by eliminating unnecessary nested components. I highly recommend using this component in your next.js projects. Enjoy.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Tabs' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=q2HqHt8Bcmc' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Tabs darkMode={isDarkMode}>

                            <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                            <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                            <TabsContent value='preview'><div className='demoBox'></div></TabsContent>
                            <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

                        </Tabs>
                    </div>
                </TabsContent>

                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={125} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />
            <h1>Component Code</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='tsx'><p>tsx</p></TabsTrigger>
                <TabsTrigger value='css'><p>css</p></TabsTrigger>

                <TabsContent value='tsx'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

                <TabsContent value='css'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='css' code={cssCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>


            </Tabs>
        </React.Fragment>
    );
};

export default TabsDemo;
