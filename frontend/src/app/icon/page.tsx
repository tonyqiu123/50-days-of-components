'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const IconDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Icon from '@/components/Icon/Icon';

<Icon text='Github' image='/Icon/githubIcon.png' invert={isDarkMode && true} />
<Icon text='Twitter' image='/Icon/twitterIcon.png' invert={isDarkMode && true} />
<Icon text='Threads' image='/Icon/threadsIcon.png' invert={isDarkMode && true} />`;

    const tsxCode = `import React from 'react';
import './Icon.css';
import Image from 'next/image';

interface IconProps extends React.HTMLProps<HTMLAnchorElement> {
    image: string
    alt?: string
    width?: number
    height?: number
    invert?: boolean
    text?: string
    handleClick?: () => void
} 

const Icon: React.FC<IconProps> = ({ image, alt = 'icon', width = 20, height = 20, invert = false, text = '', handleClick = () => { }, ...props }) => {

    return (
        <a {...props} onClick={handleClick} className={\`\${props.className ? props.className : ''} \${invert && 'inverted'} icon\`} >
            <Image width={width} height={height} alt={alt} src={image} />
            {text && <p>{text}</p>}
        </a>
    );
};

export default Icon;
`

    const cssCode = `.icon {
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}

.icon:hover {
    background-color: #f3f3f3;
}

.inverted.icon:hover {
    background-color: #313131;
}

.inverted.icon>img {
    filter: invert(1)
}

.icon {
    color: inherit;
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Icon from '@/components/Icon/Icon';

describe('Icon Component', () => {
    it('renders with default props', () => {
    const { getByAltText } = render(
        <Icon image="/path/to/icon.png" />
    );

    const iconImage = getByAltText('icon');
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute('width', '20');
    expect(iconImage).toHaveAttribute('height', '20');
    });

    it('renders with text', () => {
    const { getByText } = render(
        <Icon image="/path/to/icon.png" text="User" />
    );

    const iconText = getByText('User');
    expect(iconText).toBeInTheDocument();
    });

    it('calls handleClick when clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByAltText } = render(
        <Icon image="/path/to/icon.png" handleClick={mockHandleClick} />
    );

    const iconImage = getByAltText('icon');
    fireEvent.click(iconImage);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });

    it('renders with inverted style', () => {
    const { container } = render(
        <Icon image="/path/to/icon.png" invert />
    );

    const iconContainer = container.querySelector('.icon');
    expect(iconContainer).toHaveClass('inverted');
    });

    // Add more tests as needed
});
`

    return (
        <React.Fragment>

            <h4>Day 14 / 50</h4>
            <Spacer y={2} />
            <h1>Icon component</h1>
            <Spacer y={4} />
            <p>Icons are often used for social media and in tabs. They are vital to building modern UI. Github uses them everywhere in their interface to represent different actions, Slack uses icons for emojis, reactions, and interactive elements in its team collaboration platform, and Google's productivity tools, such as Google Docs and Sheets, incorporate icons for formatting options and file management.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Icon' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=sVRQp1Cxd-w' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Icon text='Github' image='/Icon/githubIcon.png' invert={isDarkMode && true} />
                        <Icon text='Twitter' image='/Icon/twitterIcon.png' invert={isDarkMode && true} />
                        <Icon text='Threads' image='/Icon/threadsIcon.png' invert={isDarkMode && true} />
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

export default IconDemo;
