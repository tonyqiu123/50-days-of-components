'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import DataIndicator from '@/components/DataIndicator/DataIndicator';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const DataIndicatorDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `import DataIndicator from '@/components/DataIndicator/DataIndicator';
    
<DataIndicator currentData={50} previousData={20} text='from last month' />`

    const tsxCode = `import React, { HTMLAttributes, createContext, useContext, useEffect, useRef, useState } from "react";
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
            <div {...props} className={\`expandableProvider \${props.className ? props.className : ''}  \${darkMode ? 'darkMode' : ''}\`}>
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
                <div {...props} onClick={() => setExpand(prev => !prev)} className={\`expandable  \${props.className ? props.className : ''} \${expand ? 'expanded' : ''}  \${darkMode ? 'darkMode' : ''}\`}>
                    <div className="expandableLeft">
                        <div className="expandableIcon">
                            {iconSrc && <Image src={iconSrc} width={20} height={20} alt='' />}
                        </div>
                        <p>
                            {text}
                        </p>
                    </div>
                    {children && <Image className={\`expandableArrow \${expand ? 'expanded' : ''}\`} src='/Expandable/downArrow.svg' width={16} height={16} alt='' />}
                </div>
                <div className="expandableChildContainer" style={{ maxHeight: \`\${expand ? 'unset' : '0'}\` }} ref={childRef}>
                    {children}
                </div>
            </React.Fragment>
        );
    };`

const cssCode = `.dataIndicator {
    display: flex;
    flex-direction: column;
}

.currentData {
    font-size: 40px;
}

.positive.difference {
    color: green !important;
}
.negative.difference {
    color: red !important;
}
.neutral.difference {
    color: #979797 !important;
}`

    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ExpandableProvider, Expandable } from '@/components/Expandable/Expandable';

describe('Expandable Components', () => {
    it('renders Expandable component with text', () => {
    const { getByText } = render(
        <ExpandableProvider>
        <Expandable text="Click to expand" />
        </ExpandableProvider>
    );

    const expandableText = getByText('Click to expand');
    expect(expandableText).toBeInTheDocument();
    });

    it('expands when clicked', () => {
    const { getByText, queryByText } = render(
        <ExpandableProvider>
        <Expandable text="Click to expand">
            <Expandable text="Expanded content" />
        </Expandable>
        </ExpandableProvider>
    );

    const expandable = getByText('Click to expand');
    fireEvent.click(expandable);

    const expandedContent = queryByText('Expanded content');
    expect(expandedContent).toBeInTheDocument();
    });


    it('renders expanded content when expanded', () => {
    const { getByText } = render(
        <ExpandableProvider>
        <Expandable text="Click to expand" open>
            <div>Expanded content</div>
        </Expandable>
        </ExpandableProvider>
    );

    const expandedContent = getByText('Expanded content');
    expect(expandedContent).toBeInTheDocument();
    });

    // Add more test cases as needed
});
`    

    return (
        <React.Fragment>

            <h4>Day 46 / 50</h4>
            <Spacer y={2} />
            <h1>DataIndicator component</h1>
            <Spacer y={4} />
            <p>A genuinely helpful component that will add visual flavor whenever you need to visualize data compared to a previous timeframe. I found it useful while building a job portal admin dashboard and while building a web analytics dashboard.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/DataIndicator' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=z-UiOh0E-fM' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Positive</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Negative</p></TabsTrigger>
                <TabsTrigger value='preview3'><p>Neutral</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <DataIndicator currentData={50} previousData={20} text='from last month' />
                    </div>
                </TabsContent>

                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <DataIndicator currentData={5} previousData={20} text='from last month' />
                    </div>
                </TabsContent>

                <TabsContent value='preview3'>
                    <div className='demoBox'>
                        <DataIndicator currentData={20} previousData={20} text='from last month' />
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>


            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />
            <h1>Component Code</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='tsx'><p>tsx</p></TabsTrigger>
                <TabsTrigger value='css'><p>css</p></TabsTrigger>
                <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

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

                <TabsContent value='test'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={unitTestCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    );
};

export default DataIndicatorDemo;
