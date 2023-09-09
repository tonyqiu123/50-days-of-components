'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Badge from '@/components/Badge/Badge';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const BadgeDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Badge from '@/components/Badge/Badge';

<Badge variant='default' text='Example' />
<Badge variant='success' text='Example' />
<Badge variant='destructive' text='Example' />`

const tsxCode = `import { HTMLAttributes } from 'react'
import './Badge.css'
type BadgeProps = {
    text: string
    darkMode?: boolean
    variant: 'default' | 'secondary' | 'outline' | 'destructive' | 'success'
} & HTMLAttributes<HTMLElement>

const Badge: React.FC<BadgeProps> = ({ text, darkMode, variant, ...props }) => {

    return (
        <p {...props} className={\`badge \${props.className ? props.className : ''} \${darkMode && 'darkMode'} \${variant}\`}>{text}</p>
    )
}

export default Badge`

    const cssCode = `/* Default Badge */
.badge {
    font-size: 12px;
    font-weight: 600;
    background-color: #242424;
    color: #ffffff;
    padding: 5px 10px;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.badge:hover {
    opacity: .75;
}

.badge.darkMode {
    color: #161616;
    background-color: #f1f1f1;
}

/* Secondary Badge */
.badge.secondary {
    background-color: #f1f1f1;
    color: #494949;
    padding: 5px 10px;
}

.badge.darkMode.secondary {
    background-color: #333;
    color: #f8f8f8;
}

/* Outline Badge */
.badge.outline {
    background-color: transparent;
    border: 1px solid #dbdbdb;
    color: #363636;
    padding: 4px 9px;
}

.badge.darkMode.outline {
    border-color: #474747;
    color: #f1f1f1;
}

/* Destructive Badge */
.badge.destructive {
    background-color: #e23131;
    color: #f1f1f1;
    padding: 5px 10px;
}

.badge.darkMode.destructive {
    background-color: #9c2525;
    color: #f5f5f5;
}

/* Success Badge */
.badge.success {
    background-color: #33c758;
    color: #f1f1f1;
    padding: 5px 10px;
}

.badge.darkMode.success {
    background-color: #31a826;
    color: #f5f5f5;
}`

    const unitTestCode = `import React from 'react';
    import { render } from '@testing-library/react';
    import Badge from '@/components/Badge/Badge';
    
    describe('Badge Component', () => {
      it('renders with default props', () => {
        const { getByText } = render(<Badge text="Default Badge" variant="default" />);
        const badgeElement = getByText('Default Badge');
        
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveClass('badge');
        expect(badgeElement).toHaveClass('default');
      });
    
      it('renders with secondary variant', () => {
        const { getByText } = render(<Badge text="Secondary Badge" variant="secondary" />);
        const badgeElement = getByText('Secondary Badge');
    
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveClass('badge');
        expect(badgeElement).toHaveClass('secondary');
      });
    
      it('renders with dark mode', () => {
        const { getByText } = render(<Badge text="Dark Mode Badge" darkMode variant="default" />);
        const badgeElement = getByText('Dark Mode Badge');
    
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveClass('badge');
        expect(badgeElement).toHaveClass('darkMode');
        expect(badgeElement).toHaveClass('default');
      });
      
      // Add more test cases as needed
    });`

    return (
        <React.Fragment>

            <h4>Day 10 / 50</h4>
            <Spacer y={2} />
            <h1>Badge component</h1>
            <Spacer y={4} />
            <p>Can't believe it's already been 10 days! It's super rewarding to see this project gradually grow in terms of quality and features. For example, in Day 1, I created a basic button component and a shitty AI-generated readme haha. Now, each component has its own video, polished readme, demo, and much more practicality. Anyways, today is going to end the streak of complex components: a badge component. Badge components are often used to indicate status or an element's category.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Badge' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=xHjMM87AXGw' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                    <div className='demoBox'>
                        <Badge variant='default' text='Example' />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode}>
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

export default BadgeDemo;
