'use client'

import React, { useEffect, useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import { Skeleton, SkeletonProvider } from '@/components/Skeleton/Skeleton';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import ShowMore from '@/components/ShowMore/ShowMore';

const SkeletonDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);
    
    useEffect(() => {
        const delayFunction = async () => {
            try {
                setIsLoading(true);
                // Wait for 2 seconds
                await new Promise(resolve => setTimeout(resolve, 3000));
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        delayFunction()
    }, [reload])

    const reactCode = `import { Skeleton, SkeletonProvider } from '@/components/Skeleton/Skeleton';'

<SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
    <div className='row' style={{ gap: '40px' }}>
        <Skeleton width={60} height={60} borderRadius='100%' />
        <Skeleton width='100%' height={60} borderRadius={10} />
    </div>
    <Skeleton width='100%' height={300} borderRadius={10} />
    <Skeleton width='100%' height={60} borderRadius={10} />
    <Skeleton width='100%' height={130} borderRadius={10} />
    <Skeleton width='100%' height={60} borderRadius={10} />
    <Skeleton width='100%' height={200} borderRadius={10} />
</SkeletonProvider>`;

    const tsxCode = `import React, { useState, useRef, useEffect } from 'react';
import './Skeleton.css'

type SkeletonProviderProps = {
    className?: string;
    children: React.ReactNode;
    loading: boolean;
    darkMode?: boolean;
};

type SkeletonProps = {
    className?: string;
    width?: number | string;
    height?: number;
    borderRadius?: number | string;
};

export const SkeletonProvider: React.FC<SkeletonProviderProps> = ({ className = '', loading, darkMode, children }) => {
    return (
        <div className={\skeletonProvider \${!loading && 'skeleExit'} \${darkMode ? 'darkMode' : ''}\`}>
            {children}
        </div>
    );
};

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', width = "100%", height = 100, borderRadius = "0" }) => {
    const getWidth = () => {
        if (typeof width === 'number') {
            return \`\${width}px\`;
        }
        return width;
    };

    const getFlexShrink = () => {
        if (typeof width === 'number') {
            return 0;
        }
        return 1;
    };

    const getBorderRadius = () => {
        if (typeof borderRadius === 'number') {
            return \`\${borderRadius}px\`;
        }
        return borderRadius;
    };

    return (
        <div style={{ width: getWidth(), height: \`\${height}px\`, borderRadius: getBorderRadius(), flexShrink: getFlexShrink() }} className={\`skeleton \${className}\`}></div>
    );
};
`

    const cssCode = `/* SKELELOAD */
.skeletonProvider {
    display: flex;
    flex-direction: column;
    position: absolute !important;
    height: 100%;
    width: 100%;
    gap: 40px;
    top: 0;
    left: 0;
}
.row.skeletonProvider {
    flex-direction: row;
}

.skeleton {
    background-color: #dddddd;
    height: 42px;
    position: relative;
    overflow: hidden;
}

.skeleton::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    background: linear-gradient(to left, rgba(15, 15, 15, 0), rgba(255, 255, 255, 0.575), rgba(22, 21, 21, 0));
    height: 100%;
    width: 100%;
    animation: loading 2s infinite forwards;
}

@keyframes loading {
    100% {
        transform: translateX(200%);
    }
}

.skeleExit {
    animation: skele-exit 0.4s forwards;
}

@keyframes skele-exit {
    100% {
        opacity: 0;
        z-index: -1;
    }
}

.contentLoaded {
    opacity: 0;
    animation: loadedContainer 0.5s .15s forwards;
}

@keyframes loadedContainerloadedContainer {
    to {
        opacity: 1;
    }
}

/* darkMode */
.darkMode.skeletonProvider .skeleton {
    background-color: #2e2e2e;
}

.darkMode.skeletonProvider .skeleton::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    background: linear-gradient(to left, rgba(15, 15, 15, 0), rgba(133, 133, 133, 0.219), rgba(22, 21, 21, 0));
    height: 100%;
    width: 100%;
    animation: loading 2s infinite forwards;
}`


    return (
        <React.Fragment>

            <h4>Day 24 / 50</h4>
            <Spacer y={2} />
            <h1>Skeleton component</h1>
            <Spacer y={4} />
            <p>There is a lot more to this component than you expect. Firstly, the skeleton's are positioned absolutely. This is to allow the developer to mimic Stripe's incredible UI in their payment page, where you have a loading animation that sits on top of components. This component is heavily in beta.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Skeleton' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=geQ69BSOM8c' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                    <div className='demoBox' style={{ height:'1000px' }}>
                        <div className="row" style={{ gap: '40px', height: '100%' }}>
                            <div className="column">
                                <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
                                    <div className='row' style={{ gap: '40px' }}>
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width='100%' height={60} borderRadius={10} />
                                    </div>
                                    <Skeleton width='100%' height={300} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={130} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={200} borderRadius={10} />
                                </SkeletonProvider>
                            </div>
                            <div className="column">
                                <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <div className='row' style={{ gap: '40px' }}>
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                    </div>
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={130} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                </SkeletonProvider>
                            </div>
                        </div>
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

export default SkeletonDemo;
