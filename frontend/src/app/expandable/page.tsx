'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { ExpandableProvider, Expandable } from '@/components/Expandable/Expandable';
import ShowMore from '@/components/ShowMore/ShowMore';

const ExpandableDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

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
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText="The Expandable component is used for nesting navigation.">
                <p>Expandable component</p>
            </Tooltip>


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
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </div>
    );
};

export default ExpandableDemo;
