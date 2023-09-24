'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Modal from '@/components/Modal/Modal';
import Separator from '@/components/Separator/Separator';
import Icon from '@/components/Icon/Icon';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command'
import ScrollArea from '@/components/ScrollArea/ScrollArea';
import Button from '@/components/Button/Button';

const ModalDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showSearchComponents, setShowSearchComponents] = useState<boolean>(false)

    const components = [
        'Accordion',
        'AspectRatio',
        'Backdrop',
        'Badge',
        'Breadcrumb',
        'Button',
        'Card',
        'Carousel',
        'Checkbox',
        'Combobox',
        'Command',
        'Counter',
        'DragNDrop',
        'Drawer',
        'Expandable',
        'HoverCard',
        'Icon',
        'Input',
        'Modal',
        'MultiSelect',
        'NavBar',
        'OutsideClick',
        'Pagination',
        'Popover',
        'PrettyCode',
        'ScrollArea',
        'SearchBar',
        'Select',
        'Separator',
        'Sheet',
        'ShowMore',
        'Skeleton',
        'Slider',
        'StarRating',
        'Swipeable',
        'Switch',
        'Table',
        'Tabs',
        'TextArea',
        'Toast',
        'Tooltip',
        'VerticalNavigation'
    ];

    const reactCode = `import Modal from '@/components/Modal/Modal'

<Button imageSrc='/Command/search.svg' style={{ boxShadow: '0 0 20px 5px rgba(204, 204, 204, 0.1), -8px 0 6px -8px rgba(32, 32, 32, 0.05)' }} darkMode={isDarkMode} variant='outline' text='Search components...' handleClick={async () => setShowSearchComponents(prev => !prev)} />
    <Modal darkMode={isDarkMode} showModal={showSearchComponents} setShowModal={setShowSearchComponents}>
        <Command darkMode={isDarkMode}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <ScrollArea darkMode={isDarkMode}>
                    <CommandGroup style={{ maxHeight: '300px' }} heading="Components">
                        {components.map((component, index) => (
                            <CommandItem
                                key={index}
                                text={component}
                            />
                        ))}
                    </CommandGroup>
                </ScrollArea>
            </CommandList>
        </Command>
    </Modal>`;

    const tsxCode = `import React, { HTMLAttributes, useEffect, useState } from 'react';
    import './Modal.css'
    import Backdrop from '../Backdrop/Backdrop';
    
    
    type ModalProps = {
        children?: React.ReactNode
        setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
        showModal: boolean
        darkMode?: boolean
    } & HTMLAttributes<HTMLElement>
    
    const Modal: React.FC<ModalProps> = ({ children, setShowModal, showModal, darkMode = false, ...props }) => {
    
        return (
            <React.Fragment >
                <div {...props} className={\`\${props.className ? props.className : ''} \${darkMode && 'darkMode'} modal \${showModal ? 'showModal' : ''}\`}>
                    {children}
                </div>
                <Backdrop darkMode={darkMode} showBackdrop={showModal} setShowBackdrop={setShowModal} />
            </React.Fragment>
        );
    };
    
    export default Modal;
    `

    const cssCode = `.modal {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    z-index: 1001;
    transition: all 300ms cubic-bezier(0.32, 0.72, 0, 1);
}

.showModal {
    pointer-events: unset;
    opacity: 1;
}

.modal.showModal {
    perspective: 1000px;
    /* This gives depth perception */
    transform: translate(-50%, -50%);
}`


    const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '@/components/Modal/Modal';

describe('Modal Component', () => {
    it('renders children when showModal is true', () => {
    const { getByText } = render(
        <Modal showModal={true} setShowModal={() => {}}>
        <p>Modal Content</p>
        </Modal>
    );

    const modalContent = getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
    });

    it('does not render children when showModal is false', () => {
    const { container } = render(
        <Modal showModal={false} setShowModal={() => {}}>
        <p>Modal Content</p>
        </Modal>
    );

    const modalContent = container.querySelector('.modal');
    expect(modalContent).not.toHaveClass('showModal');
    });

    it('renders in dark mode', () => {
    const { container } = render(
        <Modal showModal={true} setShowModal={() => {}} darkMode>
        <p>Modal Content</p>
        </Modal>
    );

    const modalContainer = container.querySelector('.modal');
    expect(modalContainer).toHaveClass('darkMode');
    });

    // Add more tests as needed
});`

    return (
        <React.Fragment>

            <h4>Day 4 / 50</h4>
            <Spacer y={2} />
            <h1>Modal component</h1>
            <Spacer y={4} />
            <p>This is a customizable Modal component that can be easily integrated into any React project. It has light and dark modes and is smoothly animated for a modern, sleek look.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Modal' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=GviRM6RPr-8' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                        <Button imageSrc='/Command/search.svg' style={{ boxShadow: '0 0 20px 5px rgba(204, 204, 204, 0.1), -8px 0 6px -8px rgba(32, 32, 32, 0.05)' }} darkMode={isDarkMode} variant='outline' text='Search components...' handleClick={async () => setShowSearchComponents(prev => !prev)} />
                        <Modal darkMode={isDarkMode} showModal={showSearchComponents} setShowModal={setShowSearchComponents}>
                            <Command darkMode={isDarkMode}>
                                <CommandInput placeholder="Type a command or search..." />
                                <CommandList>
                                    <ScrollArea darkMode={isDarkMode}>
                                        <CommandGroup style={{ maxHeight: '300px' }} heading="Components">
                                            {components.map((component, index) => (
                                                <CommandItem
                                                    key={index}
                                                    text={component}
                                                />
                                            ))}
                                        </CommandGroup>
                                    </ScrollArea>
                                </CommandList>
                            </Command>
                        </Modal>
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

export default ModalDemo;
