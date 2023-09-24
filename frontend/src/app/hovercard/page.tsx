'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import HoverCard from '@/components/HoverCard/HoverCard';
import Image from 'next/image';

const HoverCardDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import HoverCard from '@/components/HoverCard/HoverCard';

<HoverCard darkMode={isDarkMode}>
    {/* First child is the trigger */}
    <Image style={{ filter: \`\${isDarkMode ? 'invert(1)' : 'unset'}\` }} width={24} height={24} src='/HoverCard/Heart.svg' alt='heart' />
    {/* Second child is the popover content */}
    <div className='column'>
        <p>Add to liked songs</p>
    </div>
</HoverCard>`;

    const tsxCode = `import React, { HTMLAttributes, useState } from 'react';
import './HoverCard.css'

type HoverCardProps = {
    children: React.ReactElement[];
    darkMode?: boolean 
} & HTMLAttributes<HTMLElement>

const HoverCard: React.FC<HoverCardProps> = ({ children, darkMode = false, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const trigger = React.cloneElement(children[0], {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
    });

    const content = children[1]
        ? React.cloneElement(children[1], {
            className: \`\${props.className ? props.className : ''} hoverCardContent \${isOpen ? 'showHoverCardContent' : ''}\`
        })
        : null;

    return (
        <div {...props} className={\`hoverCard \${darkMode && 'darkMode'}\`}
            onMouseLeave={() => setIsOpen(false)}>
            {trigger}
            {content}
        </div>
    );
};

export default HoverCard;
`

    const cssCode = `.hoverCard {
    position: relative;
    width: fit-content;
}

.hoverCardContent {
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    margin-top: 5px;
    top: 100%;
    left: 50%;
    margin: auto;
    transform: translate(-50%, 4px) scale(0.8);
    background-color: white;
    border: 1px solid #d4d4d4;
    padding: 12px;
    z-index: 1001;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.showHoverCardContent {
    pointer-events: unset;
    opacity: 1;
    perspective: 1000px;
    transform: translate(-50%, 4px) scale(1);
}

.darkMode.hoverCard>.hoverCardContent {
    border: 1px solid #313131;
    background-color: rgb(0, 0, 0);
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HoverCard from '@/components/HoverCard/HoverCard';

describe('HoverCard Component', () => {
    it('renders trigger element', () => {
    const { getByText } = render(
        <HoverCard>
        <button>Trigger</button>
        <div>Card Content</div>
        </HoverCard>
    );

    const triggerElement = getByText('Trigger');
    expect(triggerElement).toBeInTheDocument();
    });

    it('opens and closes content on hover', () => {
    const { getByText, queryByText } = render(
        <HoverCard>
        <button>Trigger</button>
        <div>Card Content</div>
        </HoverCard>
    );

    const triggerElement = getByText('Trigger');
    fireEvent.mouseEnter(triggerElement);

    const contentElement = getByText('Card Content');
    expect(contentElement).toHaveClass('showHoverCardContent');

    fireEvent.mouseLeave(triggerElement);

    const closedContentElement = queryByText('Card Content');
    expect(closedContentElement).not.toHaveClass('showHoverCardContent');
    });

    it('renders in dark mode', () => {
    const { container } = render(
        <HoverCard darkMode>
        <button>Trigger</button>
        <div>Card Content</div>
        </HoverCard>
    );

    const hoverCardContainer = container.querySelector('.hoverCard');
    expect(hoverCardContainer).toHaveClass('darkMode');
    });

    // Add more tests as needed
});
`

    return (
        <React.Fragment>

            <h4>Day 17 / 50</h4>
            <Spacer y={2} />
            <h1>HoverCard component</h1>
            <Spacer y={4} />
            <p>The HoverCard component is essentially a Popover component that toggles on hover after a certain delay except with 1 big change: a short 750ms delay. The thing is that HoverCards are used much more often than Popovers. For example, Spotify implements HoverCards over the 'like' and 'download' icons in their desktop app. Instagram also uses delayed HoverCards to show user profiles when you hover over comments.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/HoverCard' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=QVJPWRHIs-8' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox' style={{ height:'200px' }}>
                        <HoverCard darkMode={isDarkMode}>
                            {/* First child is the trigger */}
                            <Image style={{ filter: `${isDarkMode ? 'invert(1)' : 'unset'}` }} width={24} height={24} src='/HoverCard/Heart.svg' alt='heart' />
                            {/* Second child is the popover content */}
                            <div className='column'>
                                <p>Add to liked songs</p>
                            </div>
                        </HoverCard>
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

export default HoverCardDemo;
