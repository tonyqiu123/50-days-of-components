'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import ScrollIndicator from '@/components/ScrollIndicator/ScrollIndicator';

const ScrollIndicatorDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `import ScrollIndicator from '@/components/ScrollIndicator/ScrollIndicator';
    
<ScrollIndicator darkMode={isDarkMode} />`

    const tsxCode = `import React, { useState, useEffect, HTMLAttributes } from 'react';
import './ScrollIndicator.css';

type ScrolIndicatorProps = {
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

const ScrollIndicator: React.FC<ScrolIndicatorProps> = ({ darkMode = false, ...props }) => {

    const [scrollWidth, setScrollWidth] = useState<number>(0);

    const handleScroll = () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        setScrollWidth(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div {...props} className={\`scroll-indicator-container \${darkMode ? 'darkMode' : ''} \${props.className ? props.className : ''}\`}>
            <div className="scroll-indicator-bar">
                <div className="scroll-indicator-overlay" style={{ transform: \`translateX(\${scrollWidth - 100}%)\` }}></div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
`

    const cssCode = `.scroll-indicator-container {
    width: 100%;
    height: 5px;
    overflow: hidden;
}
    
.scroll-indicator-bar {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #E2E2E2;
}
    
.scroll-indicator-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000000;
}
    
/* darkMode */
.darkMode .scroll-indicator-bar {
    background-color: #313131;
}
    
.darkMode .scroll-indicator-overlay {
    background-color: #ffffff;
}`

    const unitTestCode = `import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import ScrollIndicator from '@/components/ScrollIndicator/ScrollIndicator';

describe('ScrollIndicator', () => {
    it('renders without crashing', () => {
    render(<ScrollIndicator />);
    });

    it('renders with default class when no props are provided', () => {
    const { container } = render(<ScrollIndicator />);
    expect(container.firstChild).toHaveClass('scroll-indicator-container');
    expect(container.firstChild).not.toHaveClass('darkMode');
    });

    it('renders with custom class when className prop is provided', () => {
    const { container } = render(<ScrollIndicator className="custom-class" />);
    expect(container.firstChild).toHaveClass('scroll-indicator-container custom-class');
    });

    it('renders with dark mode class when darkMode prop is true', () => {
    const { container } = render(<ScrollIndicator darkMode={true} />);
    expect(container.firstChild).toHaveClass('scroll-indicator-container darkMode');
    });

    it('renders with correct transform style for scroll indicator overlay', () => {
    const { container } = render(<ScrollIndicator />);
    const scrollIndicatorOverlay = container.querySelector('.scroll-indicator-overlay');
    expect(scrollIndicatorOverlay).toHaveStyle({ transform: 'translateX(-100%)' }); // Initial value
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 49 / 50</h4>
            <Spacer y={2} />
            <h1>ScrollIndicator component</h1>
            <Spacer y={4} />
            <p>The ScrollIndicator component in React dynamically visualizes the user's scroll progress by overlaying a fixed-width bar with an adjustable colored overlay, elegantly revealing the extent of the scroll. This engaging UI element enhances user experience by providing a clear indication of the scrolled content's proportion.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/ScrollIndicator' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>

                        <ScrollIndicator darkMode={isDarkMode} />

                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Expand' darkMode={isDarkMode}>
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

export default ScrollIndicatorDemo;
