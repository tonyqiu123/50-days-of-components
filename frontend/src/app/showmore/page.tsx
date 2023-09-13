'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Image from 'next/image';

const ShowMoreDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `import ShowMore from '@/components/ShowMore/ShowMore'
import Image from 'next/image';

<ShowMore height={300} darkMode={isDarkMode}>
    <Image src='/ShowMore/e7.jpg' alt='' height={429} width={750} />
</ShowMore>`;

    const tsxCode = `import React, { HTMLAttributes, useState } from 'react';
import './ShowMore.css';

type ShowMoreProps = {
    children: React.ReactNode;
    height?: number
    text?: string
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const ShowMore: React.FC<ShowMoreProps> = ({ children, height, text = 'Show more', darkMode = false, ...props }) => {

    const [showFull, setShowFull] = useState(false);


    return (
        <div {...props} className={\`\${props.className ? props.className : ''} \${darkMode ? 'darkMode' : ''} showMoreContainer\`} style={{ height: \`\${showFull || !height ? 'auto ' : \`\${height}px\`}\` }}>
            {!showFull && (
                <div className="gradient" onClick={() => setShowFull(true)}>
                    <p className="showMoreText">{text}</p>
                </div>
            )}
            {children}
        </div>
    );
};

export default ShowMore;
`

    const cssCode = `.showMoreContainer {
    position: relative;
    overflow: hidden;
}

.gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to top,
            #FFFFFF 0%,
            rgba(255, 255, 255, 0.95) 20%,
            rgba(255, 255, 255, 0.851) 40%,
            rgba(255, 255, 255, 0.76) 50%,
            rgba(255, 255, 255, 0.45) 70%,
            rgba(255, 255, 255, 0.103) 90%,
            rgba(255, 255, 255, 0) 95%,
            rgba(255, 255, 255, 0) 100%);
    display: flex;
    cursor: pointer;
    justify-content: center;
}

.showMoreText {
    color: black;
    opacity: 0;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
    margin: auto 0 24px 0;
}

.gradient:hover>.showMoreText {
    opacity: 1;
}

/* darkMode */
.darkMode.showMoreContainer>.gradient {
    background: linear-gradient(to top,
            #000000 0%,
            rgba(0, 0, 0, 0.95) 20%,
            rgba(0, 0, 0, 0.85) 35%,
            rgba(0, 0, 0, 0.76) 50%,
            rgba(0, 0, 0, 0.3) 80%,
            rgba(0, 0, 0, 0.103) 90%,
            rgba(0, 0, 0, 0) 95%,
            rgba(0, 0, 0, 0) 100%);
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowMore from '@/components/ShowMore/ShowMore';

describe('ShowMore Component', () => {
    it('renders children', () => {
    const { getByText } = render(<ShowMore>Hello ShowMore</ShowMore>);
    const childrenElement = getByText('Hello ShowMore');
    expect(childrenElement).toBeInTheDocument();
    });

    it('expands content when "Show more" is clicked', () => {
    const { getByText, container } = render(
        <ShowMore height={100}>Hello ShowMore</ShowMore>
    );
    const showMoreButton = getByText('Show more');
    fireEvent.click(showMoreButton);
    const containerElement = container.querySelector('.showMoreContainer');
    expect(containerElement).toHaveStyle('height: auto');
    });

    it('renders custom "Show more" text', () => {
    const { getByText } = render(
        <ShowMore text="View all">Hello ShowMore</ShowMore>
    );
    const showMoreButton = getByText('View all');
    expect(showMoreButton).toBeInTheDocument();
    });

    it('renders with dark mode class', () => {
    const { container } = render(<ShowMore darkMode>Hello ShowMore</ShowMore>);
    const showMoreContainer = container.querySelector('.showMoreContainer.darkMode');
    expect(showMoreContainer).toBeInTheDocument();
    });

    // Add more tests as needed
});
`

    return (
        <React.Fragment>

            <h4>Day 27 / 50</h4>
            <Spacer y={2} />
            <h1>ShowMore component</h1>
            <Spacer y={4} />
            <p>The sheet component is a crucial user interface design element widely utilized in popular software applications such as Google ShowMores for data management, Microsoft Excel for financial analysis, and Adobe XD for planning and prototyping user interfaces. In these varied contexts, it provides a structured, flexible canvas where users can input, modify, and visualize information.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/ShowMore' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=UK7svbfuLI0' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>
                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <ShowMore height={300} darkMode={isDarkMode}>
                            <Image src='/ShowMore/e7.jpg' alt='' height={429} width={750} />
                        </ShowMore>
                    </div>

                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <ShowMore height={300} darkMode={isDarkMode}>
                            <Image src='/ShowMore/mcBuilding.png' alt='' height={550} width={700} />
                        </ShowMore>
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode} text='Reveal code' height={200}>
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

export default ShowMoreDemo;
