'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Drawer from '@/components/Drawer/Drawer';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Expandable, ExpandableProvider } from '@/components/Expandable/Expandable';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `<ExpandableProvider className='expandableDemo' darkMode={isDarkMode}>
    <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Attach Files'>
        <Expandable iconSrc='/Expandable/paperclip.svg' text='Document 1'>
            <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 1'></Expandable>
            <Expandable text='Subdocument 2'></Expandable>
        </Expandable>
        <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Document 2'>
            <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 3'></Expandable>
            <Expandable text='Subdocument 4'></Expandable>
        </Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/mail.svg' text='Send Email'>
        <Expandable text='Compose New Email'></Expandable>
        <Expandable text='Check Inbox'></Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/calendar.svg' text='Schedule Event'>
        <Expandable text='Create New Event'></Expandable>
        <Expandable text='View Upcoming Events'></Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/settings.svg' text='Settings'>
        <Expandable text='General Settings'></Expandable>
        <Expandable text='Privacy and Security'></Expandable>
        <Expandable text='Notifications'></Expandable>
    </Expandable>
</ExpandableProvider>`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Expandable component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <ExpandableProvider className='expandableDemo' darkMode={isDarkMode}>
                            <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Attach Files'>
                                <Expandable iconSrc='/Expandable/paperclip.svg' text='Document 1'>
                                    <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 1'></Expandable>
                                    <Expandable text='Subdocument 2'></Expandable>
                                </Expandable>
                                <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Document 2'>
                                    <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 3'></Expandable>
                                    <Expandable text='Subdocument 4'></Expandable>
                                </Expandable>
                            </Expandable>
                            <Expandable iconSrc='/Expandable/mail.svg' text='Send Email'>
                                <Expandable text='Compose New Email'></Expandable>
                                <Expandable text='Check Inbox'></Expandable>
                            </Expandable>
                            <Expandable iconSrc='/Expandable/calendar.svg' text='Schedule Event'>
                                <Expandable text='Create New Event'></Expandable>
                                <Expandable text='View Upcoming Events'></Expandable>
                            </Expandable>
                            <Expandable iconSrc='/Expandable/settings.svg' text='Settings'>
                                <Expandable text='General Settings'></Expandable>
                                <Expandable text='Privacy and Security'></Expandable>
                                <Expandable text='Notifications'></Expandable>
                            </Expandable>
                        </ExpandableProvider>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo;

