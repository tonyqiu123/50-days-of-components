'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar/Avatar';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const AvatarDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Avatar from '@/components/Avatar/Avatar';
    
<Avatar>
    <AvatarImage className='avatarDemo' src="/Avatar/profile.png" />
    <AvatarFallback>CN</AvatarFallback>
</Avatar>`;

    const tsxCode = `import React, { HTMLAttributes, useEffect, useState } from 'react';

    type AvatarImageProps = {
        src: string;
    } & HTMLAttributes<HTMLElement>
    
    export const AvatarImage: React.FC<AvatarImageProps> = ({ src, ...props }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
    
        const handleImageLoad = () => {
            setImageLoaded(true);
        };
    
        return (
            <img
                {...props}
                src={src}
                alt="Avatar"
                onLoad={handleImageLoad}
                style={{ display: imageLoaded ? 'block' : 'none' }}
            />
        );
    };
    
    type AvatarFallbackProps = {
        children: React.ReactNode;
    } & HTMLAttributes<HTMLElement>
    
    export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, ...props }) => {
        return <div {...props}>{children}</div>;
    };
    
    type AvatarProps = {
        children: React.ReactNode;
    } & HTMLAttributes<HTMLElement>
    
    export const Avatar: React.FC<AvatarProps> = ({ children, ...props }) => {
        const [firstChildLoaded, setFirstChildLoaded] = useState(false);
    
        useEffect(() => {
            if (!firstChildLoaded) {
                setFirstChildLoaded(true);
            }
        }, [firstChildLoaded]);
    
        const firstChild = React.Children.toArray(children)[0];
        const secondChild = React.Children.toArray(children)[1];
    
        return (
            <div {...props}>
                {firstChildLoaded ? firstChild : null}
                {firstChildLoaded ? null : secondChild}
            </div>
        );
    };
`


    const unitTestCode = `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/Avatar/Avatar'; // Adjust the import path

describe('AvatarImage Component', () => {
    it('renders an image with the provided source', () => {
    render(<AvatarImage src="test.jpg" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
    });
});

describe('AvatarFallback Component', () => {
    it('renders children inside a div', () => {
    render(<AvatarFallback>Hello, World!</AvatarFallback>);
    const fallbackDiv = screen.getByText('Hello, World!');
    expect(fallbackDiv).toBeInTheDocument();
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 44 / 50</h4>
            <Spacer y={2} />
            <h1>Avatar component</h1>
            <Spacer y={4} />
            <p>The Avatar component is a versatile React element that encapsulates both an AvatarImage and an AvatarFallback component. It intelligently manages the display of the avatar image alongside a fallback content, ensuring a seamless user experience during image loading or errors.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Avatar' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=atePQYxreVQ' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Avatar>
                            <AvatarImage className='avatarDemo' src="/Avatar/profile.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
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
                <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

                <TabsContent value='tsx'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
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

export default AvatarDemo;
