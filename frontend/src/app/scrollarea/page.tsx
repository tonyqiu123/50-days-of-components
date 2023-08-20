'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import ScrollArea from '@/components/ScrollArea/ScrollArea';
import ShowMore from '@/components/ShowMore/ShowMore';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { VerticalNavigation, VerticalNavigationHeader, VerticalNavigationLink } from '@/components/VerticalNavigation/VerticalNavigation';

const ScrollAreaDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(true)

    const [selected1, setSelected1] = useState<string>('Profile')
    const [selected2, setSelected2] = useState<string>('ScrollArea')

    const reactCode = `<ScrollArea selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
    <ScrollAreaHeader text='Account Settings' />
    <ScrollAreaLink text='Profile' />
    <ScrollAreaLink text='Verification' />
    <ScrollAreaLink text='Trust and Verification' />
    <ScrollAreaLink text='Security' />
    <ScrollAreaLink text='Notifications' />

    <ScrollAreaHeader text='Hosting Settings' />
    <ScrollAreaLink text='Listing Details' />
    <ScrollAreaLink text='Pricing' />
    <ScrollAreaLink text='Availability' />
    <ScrollAreaLink text='Booking Settings' />
    <ScrollAreaLink text='House Rules' />

    <ScrollAreaHeader text='Guest Settings' />
    <ScrollAreaLink text='Search Preferences' />
    <ScrollAreaLink text='Saved Listings' />
    <ScrollAreaLink text='Wishlists' />
    <ScrollAreaLink text='Reviews' />
    <ScrollAreaLink text='Trips' />

    <ScrollAreaHeader text='Payment Settings' />
    <ScrollAreaLink text='Payment Methods' />
    <ScrollAreaLink text='Payout Preferences' />
    <ScrollAreaLink text='Transaction History' />
    <ScrollAreaLink text='Invoices' />
    <ScrollAreaLink text='Tax Documents' />
</ScrollArea>`;



    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <Tooltip darkMode={isDarkMode} toolTipText="Add a minimalist scrollbar to any component.">
                <p>ScrollArea component</p>
            </Tooltip>
            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />


            <div style={{ display: 'flex', gap: '48px', width: '100%' }}>

                <ScrollArea style={{ maxHeight: '800px' }} darkMode={isDarkMode}>
                    <VerticalNavigation selected={selected2} setSelected={setSelected2} darkMode={isDarkMode}>
                        <VerticalNavigationHeader text='Components' />
                        <VerticalNavigationLink text='Accordion' />
                        <VerticalNavigationLink text='AspectRatio' />
                        <VerticalNavigationLink text='Backdrop' />
                        <VerticalNavigationLink text='Badge' />
                        <VerticalNavigationLink text='Breadcrumb' />
                        <VerticalNavigationLink text='Button' />
                        <VerticalNavigationLink text='Card' />
                        <VerticalNavigationLink text='Carousel' />
                        <VerticalNavigationLink text='Checkbox' />
                        <VerticalNavigationLink text='Combobox' />
                        <VerticalNavigationLink text='Command' />
                        <VerticalNavigationLink text='Counter' />
                        <VerticalNavigationLink text='DragNDrop' />
                        <VerticalNavigationLink text='Drawer' />
                        <VerticalNavigationLink text='Dropdown' />
                        <VerticalNavigationLink text='Expandable' />
                        <VerticalNavigationLink text='HoverCard' />
                        <VerticalNavigationLink text='Icon' />
                        <VerticalNavigationLink text='Input' />
                        <VerticalNavigationLink text='Modal' />
                        <VerticalNavigationLink text='MultiSelect' />
                        <VerticalNavigationLink text='NavBar' />
                        <VerticalNavigationLink text='OutsideClick' />
                        <VerticalNavigationLink text='Pagination' />
                        <VerticalNavigationLink text='Popover' />
                        <VerticalNavigationLink text='PrettyCode' />
                        <VerticalNavigationLink text='SearchBar' />
                        <VerticalNavigationLink text='Select' />
                        <VerticalNavigationLink text='Separator' />
                        <VerticalNavigationLink text='Sheet' />
                        <VerticalNavigationLink text='ShowMore' />
                        <VerticalNavigationLink text='Skeleton' />
                        <VerticalNavigationLink text='Slider' />
                        <VerticalNavigationLink text='StarRating' />
                        <VerticalNavigationLink text='Swipeable' />
                        <VerticalNavigationLink text='Switch' />
                        <VerticalNavigationLink text='Table' />
                        <VerticalNavigationLink text='Tabs' />
                        <VerticalNavigationLink text='TextArea' />
                        <VerticalNavigationLink text='Toast' />
                        <VerticalNavigationLink text='Tooltip' />
                        <VerticalNavigationLink text='VerticalNavigation' />

                    </VerticalNavigation>
                </ScrollArea>

                <Tabs darkMode={isDarkMode}>

                    <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                    <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                    <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                    <TabsContent value='preview1'>
                        <div className='demoBox'>
                            <ScrollArea style={{ maxHeight: '400px' }} darkMode={isDarkMode}>
                                <VerticalNavigation selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
                                    <VerticalNavigationHeader text='Account Settings' />
                                    <VerticalNavigationLink text='Profile' />
                                    <VerticalNavigationLink text='Verification' />
                                    <VerticalNavigationLink text='Trust and Verification' />
                                    <VerticalNavigationLink text='Security' />
                                    <VerticalNavigationLink text='Notifications' />

                                    <VerticalNavigationHeader text='Hosting Settings' />
                                    <VerticalNavigationLink text='Listing Details' />
                                    <VerticalNavigationLink text='Pricing' />
                                    <VerticalNavigationLink text='Availability' />
                                    <VerticalNavigationLink text='Booking Settings' />
                                    <VerticalNavigationLink text='House Rules' />

                                    <VerticalNavigationHeader text='Guest Settings' />
                                    <VerticalNavigationLink text='Search Preferences' />
                                    <VerticalNavigationLink text='Saved Listings' />
                                    <VerticalNavigationLink text='Wishlists' />
                                    <VerticalNavigationLink text='Reviews' />
                                    <VerticalNavigationLink text='Trips' />

                                    <VerticalNavigationHeader text='Payment Settings' />
                                    <VerticalNavigationLink text='Payment Methods' />
                                    <VerticalNavigationLink text='Payout Preferences' />
                                    <VerticalNavigationLink text='Transaction History' />
                                    <VerticalNavigationLink text='Invoices' />
                                    <VerticalNavigationLink text='Tax Documents' />
                                </VerticalNavigation>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value='preview2'>
                        <div className='demoBox'>
                            <ScrollArea style={{ maxHeight: '800px' }} darkMode={isDarkMode}>
                                <VerticalNavigation selected={selected2} setSelected={setSelected2} darkMode={isDarkMode}>
                                    <VerticalNavigationHeader text='Components' />
                                    <VerticalNavigationLink text='Accordion' />
                                    <VerticalNavigationLink text='AspectRatio' />
                                    <VerticalNavigationLink text='Backdrop' />
                                    <VerticalNavigationLink text='Badge' />
                                    <VerticalNavigationLink text='Breadcrumb' />
                                    <VerticalNavigationLink text='Button' />
                                    <VerticalNavigationLink text='Card' />
                                    <VerticalNavigationLink text='Carousel' />
                                    <VerticalNavigationLink text='Checkbox' />
                                    <VerticalNavigationLink text='Combobox' />
                                    <VerticalNavigationLink text='Command' />
                                    <VerticalNavigationLink text='Counter' />
                                    <VerticalNavigationLink text='DragNDrop' />
                                    <VerticalNavigationLink text='Drawer' />
                                    <VerticalNavigationLink text='Dropdown' />
                                    <VerticalNavigationLink text='Expandable' />
                                    <VerticalNavigationLink text='HoverCard' />
                                    <VerticalNavigationLink text='Icon' />
                                    <VerticalNavigationLink text='Input' />
                                    <VerticalNavigationLink text='Modal' />
                                    <VerticalNavigationLink text='MultiSelect' />
                                    <VerticalNavigationLink text='NavBar' />
                                    <VerticalNavigationLink text='OutsideClick' />
                                    <VerticalNavigationLink text='Pagination' />
                                    <VerticalNavigationLink text='Popover' />
                                    <VerticalNavigationLink text='PrettyCode' />
                                    <VerticalNavigationLink text='SearchBar' />
                                    <VerticalNavigationLink text='Select' />
                                    <VerticalNavigationLink text='Separator' />
                                    <VerticalNavigationLink text='Sheet' />
                                    <VerticalNavigationLink text='ShowMore' />
                                    <VerticalNavigationLink text='Skeleton' />
                                    <VerticalNavigationLink text='Slider' />
                                    <VerticalNavigationLink text='StarRating' />
                                    <VerticalNavigationLink text='Swipeable' />
                                    <VerticalNavigationLink text='Switch' />
                                    <VerticalNavigationLink text='Table' />
                                    <VerticalNavigationLink text='Tabs' />
                                    <VerticalNavigationLink text='TextArea' />
                                    <VerticalNavigationLink text='Toast' />
                                    <VerticalNavigationLink text='Tooltip' />
                                    <VerticalNavigationLink text='VerticalNavigation' />

                                </VerticalNavigation>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value='code'>
                        <ShowMore text='Reveal' darkMode={isDarkMode}>
                            <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                        </ShowMore>
                    </TabsContent>

                </Tabs>
            </div>

        </div >
    );
};

export default ScrollAreaDemo;
