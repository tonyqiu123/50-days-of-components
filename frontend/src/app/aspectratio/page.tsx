'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import AspectRatio from '@/components/AspectRatio/AspectRatio';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const AspectRatioDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import AspectRatio from '@/components/AspectRatio/AspectRatio';
    
<AspectRatio maxHeight={700} ratio={1 / 1}>
    <img
        src="https://cdn.discordapp.com/attachments/715319623637270638/1141796329564147772/image.png"
        alt="Photo by Drew Beamer"
    />
</AspectRatio>`;

    const tsxCode = `import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
    import './AspectRatio.css'; // Import the CSS file
    
    type AspectRatioProps = {
        ratio: number;
        children: ReactNode;
        maxHeight?: number;
    } & HTMLAttributes<HTMLElement>;
    
    const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, maxHeight, ...props }) => {
        const wrapperRef = useRef<HTMLDivElement | null>(null);
        const [hasReachedMaxSize, setHasReachedMaxSize] = useState(false);
    
        useEffect(() => {
            if (wrapperRef.current) {
                const wrapperHeight = wrapperRef.current.offsetHeight;
    
                if ((maxHeight && wrapperHeight >= maxHeight)) {
                    setHasReachedMaxSize(true);
                } else {
                    setHasReachedMaxSize(false);
                }
            }
        }, [maxHeight]);
    
        // Calculate maximum dimensions while maintaining the aspect ratio
        let calculatedMaxHeight = maxHeight;
        let calculatedMaxWidth;
    
        if (maxHeight) {
            calculatedMaxWidth = maxHeight * ratio;
        }
    
        const aspectStyle = {
            paddingTop: \`\${(1 / ratio) * 100}%\`,
            maxWidth: calculatedMaxWidth,
            maxHeight: calculatedMaxHeight,
            ...props.style,
        };
    
        return (
            <div {...props} className={\`aspectRatio \${props.className ? props.className : ''}\`} style={aspectStyle}>
                <div
                    ref={wrapperRef}
                    className={\`contentWrapper \${hasReachedMaxSize ? 'reachedMaxSize' : ''}\`}
                >
                    {children}
                </div>
            </div>
        );
    };
    
    export default AspectRatio;
    
`

    const cssCode = `.aspectRatio {
    position: relative;
    width: 100%;
}

.contentWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
}

.contentWrapper img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;  
}

.reachedMaxSize img {
    object-fit: contain !important;
}`

    const unitTestCode = `import React from 'react';
    import { render, screen } from '@testing-library/react';
    import AspectRatio from '@/components/AspectRatio/AspectRatio';
    
    describe('AspectRatio Component', () => {
        it('renders children', () => {
            render(<AspectRatio ratio={16 / 9}>Child Content</AspectRatio>);
            const childElement = screen.getByText('Child Content');
            expect(childElement).toBeInTheDocument();
        });
    
        it('applies provided style', () => {
            render(<AspectRatio ratio={16 / 9} style={{ color: 'red' }} data-testid="aspect-ratio">
                 Child Content
            </AspectRatio>);
            const aspectRatioElement = screen.getByTestId('aspect-ratio');
            expect(aspectRatioElement).toHaveStyle('color: red');
        });
    
        it('calculates aspect ratio styling', () => {
            render(<AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
                 Child Content
            </AspectRatio>);
            const aspectRatioElement = screen.getByTestId('aspect-ratio');
            expect(aspectRatioElement).toHaveStyle('padding-top: 56.25%');
        });
    
        it('sets maximum height and width', () => {
            render(<AspectRatio data-testid="aspect-ratio" ratio={16 / 9} maxHeight={300}>
                 Child Content
            </AspectRatio>);
            const aspectRatioElement = screen.getByTestId('aspect-ratio');
            expect(aspectRatioElement).toHaveStyle('max-width: 533.3333333333333px');
            expect(aspectRatioElement).toHaveStyle('max-height: 300px');
        });
    
    
    });
    
`

    return (
        <React.Fragment>

            <h4>Day 41 / 50</h4>
            <Spacer y={2} />
            <h1>AspectRatio component</h1>
            <Spacer y={4} />
            <p>The AspectRatio component intelligently maintains a given aspect ratio for its content, dynamically adjusting both width and height. It seamlessly adapts to varying dimensions while elegantly handling maximum height constraints, making it ideal for responsive designs requiring consistent proportions.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/AspectRatio' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=bJvV43ZRd0A' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview2'><p>3 / 1</p></TabsTrigger>
                <TabsTrigger value='preview3'><p>2 / 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <AspectRatio ratio={3 / 1}>
                            <img
                                src="https://media.tacdn.com/media/attractions-content--1x-1/10/5a/80/a6.jpg"
                                alt="Photo by Drew Beamer"
                            />
                        </AspectRatio>
                    </div>
                </TabsContent>

                <TabsContent value='preview3'>
                    <div className='demoBox'>
                        <AspectRatio ratio={2 / 1}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg"
                                alt="Photo by Drew Beamer"
                            />
                        </AspectRatio>
                    </div>
                </TabsContent>

                <TabsContent value='code'>
                    <ShowMore text='Reveal' darkMode={isDarkMode}>
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

export default AspectRatioDemo;
