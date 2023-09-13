'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const BreadcrumbDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

<Breadcrumb darkMode={isDarkMode} start={3} end={4} />`

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
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

describe('Breadcrumb component', () => {
    let originalWindowLocation = window.location;
    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            enumerable: true,
            value: new URL(window.location.href),
        });
    });

    afterEach(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            enumerable: true,
            value: originalWindowLocation,
        });
    });

    it('renders correct breadcrumb segments', () => {
        window.location.href = 'http://localhost/home/products/category/item';
        const { container } = render(<Breadcrumb start={2} end={7} />);
        const breadcrumbItems = container.querySelectorAll('.breadcrumbItem');
        expect(breadcrumbItems.length).toBe(5);
        expect(breadcrumbItems[0]).toHaveTextContent('localhost')
        expect(breadcrumbItems[1]).toHaveTextContent('home')
        expect(breadcrumbItems[2]).toHaveTextContent('products')
        expect(breadcrumbItems[3]).toHaveTextContent('category')
    });

    it('renders with custom start index', () => {
        const { container } = render(<Breadcrumb start={1} />);
        const breadcrumbItems = container.querySelectorAll('.breadcrumbItem');
        expect(breadcrumbItems.length).toBeGreaterThanOrEqual(1);
    });

    it('renders with custom end index', () => {
        const { container } = render(<Breadcrumb end={3} />);
        const breadcrumbItems = container.querySelectorAll('.breadcrumbItem');
        expect(breadcrumbItems.length).toBeLessThanOrEqual(3);
    });

    it('renders with custom CSS classes', () => {
        const { container } = render(<Breadcrumb className="custom-breadcrumb" />);
        const breadcrumb = container.querySelector('.custom-breadcrumb');
        expect(breadcrumb).toBeInTheDocument();
    });

    // Add more test cases as needed
});
`

    return (
        <React.Fragment>

            <h4>Day 31 / 50</h4>
            <Spacer y={2} />
            <h1>Breadcrumb component</h1>
            <Spacer y={4} />
            <p>The breadcrumb component is a navigational aid that displays the hierarchical path of a user's current location within a website, enhancing user experience and providing easy access to previous pages. By showing the user's journey through various levels of content, breadcrumbs improve website usability and simplify navigation.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Breadcrumb' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=BPU72Nlz4pM' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Breadcrumb darkMode={isDarkMode} />
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <Breadcrumb darkMode={isDarkMode} start={3} end={4} />
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

export default BreadcrumbDemo;
