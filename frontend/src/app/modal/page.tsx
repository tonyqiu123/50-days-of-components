'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Icon from '@/components/Icon/Icon';
import ShowMore from '@/components/ShowMore/ShowMore';
import MultiSelect from '@/components/MultiSelect/MultiSelect';
import Modal from '@/components/Modal/Modal';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command'
import ScrollArea from '@/components/ScrollArea/ScrollArea';
import Button from '@/components/Button/Button';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();

    const [showSearchComponents, setShowSearchComponents] = useState<boolean>(false)
    const reactCode = `<Button imageSrc='/Command/search.svg' style={{ boxShadow: '0 0 20px 5px rgba(204, 204, 204, 0.1), -8px 0 6px -8px rgba(32, 32, 32, 0.05)' }} darkMode={isDarkMode} variant='outline' text='Search components...' handleClick={async () => setShowSearchComponents(prev => !prev)} />
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

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Modal component</h1>
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

        </React.Fragment>
    );
};

export default CarouselDemo; 