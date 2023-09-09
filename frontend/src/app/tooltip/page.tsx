'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Tooltip from '@/components/Tooltip/Tooltip';

const ToolTipDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import ToolTip from '@/components/ToolTip/ToolTip'
    
<Tooltip darkMode={isDarkMode} toolTipText='By strategically combining different EC2 purchase options within a single EC2 Auto Scaling Group (ASG), you can achieve an optimal balance between cost savings and performance for your infrastructure.'>
    <p>Combine EC2 purchase options in a single EC2 ASG</p>
</Tooltip>`;

    const tsxCode = `import React, { useState, ReactNode, useRef, useEffect, HTMLAttributes } from 'react';
import './Tooltip.css';
import Image from 'next/image';

type TooltipProps = {
    toolTipText: string;
    children?: ReactNode;
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const Tooltip: React.FC<TooltipProps> = ({ toolTipText, children, darkMode = false, ...props }) => {

    const [hovering, setHovering] = useState(false)
    const [tooltipWidth, setTooltipWidth] = useState(0);


    const invisibleRef = useRef<HTMLParagraphElement>(null);


    useEffect(() => {
        if (invisibleRef.current) {
            setTooltipWidth(invisibleRef.current.offsetWidth / 2);
        }
    }, []);


    return (
        <div {...props} className={\`\${props.className ? props.className : ''} tooltip \${darkMode && 'darkMode'}\`}>
            {children}
            <Image
                alt='tooltipicon'
                src='/Tooltip/tooltipIcon.svg'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                width={16}
                height={16}
            />
            <p className={\`tooltip-hoverBox \${hovering && 'active'}\`} style={{ width: \`\${tooltipWidth + 28}px\` }}>{toolTipText}</p>

            <p ref={invisibleRef} style={{ whiteSpace: 'nowrap', visibility: 'hidden', position: 'absolute' }}>{toolTipText}</p>
        </div>
    );
};

export default Tooltip;`

    const cssCode = `.tooltip {
    width: fit-content;
    gap: 6px;
    display: flex;
    position: relative;
}

.tooltip-hoverBox {
    max-width: 400px;
    position: absolute;
    background-color: white;
    padding: 8px 12px;
    border: 1px solid #d4d4d4;
    right: -4px;
    transform: translate(100%, 0%) scale(0.95);
    opacity: 0;
    z-index: 89;
    pointer-events: none;
    perspective: 1000px;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.active.tooltip-hoverBox {
    transform: translate(100%, 0%);
    opacity: .95;
}

.darkMode>.tooltip-hoverBox {
    border: 1px solid #313131;
    background-color: rgb(0, 0, 0);
    color: rgb(236, 236, 236);
}`



    return (
        <React.Fragment>

            <h4>Day 5 / 50</h4>
            <Spacer y={2} />
            <h1>ToolTip component</h1>
            <Spacer y={4} />
            <p>This is a customizable Tooltip component that can be easily integrated into any React project. It supports dark and light modes and provides a tooltip with hover functionality.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/ToolTip' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=nGdD2W0BxUc' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                    <div className='demoBox' style={{ height: '200px' }}>
                        <Tooltip darkMode={isDarkMode} toolTipText='By strategically combining different EC2 purchase options within a single EC2 Auto Scaling Group (ASG), you can achieve an optimal balance between cost savings and performance for your infrastructure.'>
                            <p>Combine EC2 purchase options in a single EC2 ASG</p>
                        </Tooltip>
                    </div>

                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode} text='Reveal code'  >
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

export default ToolTipDemo;
