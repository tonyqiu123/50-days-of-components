'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { AccordionContent, Accordion, AccordionTrigger, AccordionProvider } from '@/components/Accordion/Accordion';

const AccordionDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

    const reactCode = `<AccordionProvider darkMode={isDarkMode} className='accordionDemo'>
    <Accordion>
        <AccordionTrigger name="section1">
            <h2>Section 1</h2>
        </AccordionTrigger>
        <AccordionContent name="section1">
            <p>This is the content for section 1</p>
        </AccordionContent>
    </Accordion>
    <Accordion>
        <AccordionTrigger name="section2">
            <h2>Section 2</h2>
        </AccordionTrigger>
        <AccordionContent name="section2">
            <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2ion 2</p>
        </AccordionContent>
    </Accordion>
    <Accordion>
        <AccordionTrigger name="section3">
            <h2>Section 3</h2>
        </AccordionTrigger>
        <AccordionContent name="section3">
            <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2ion 2</p>
        </AccordionContent>
    </Accordion>
</AccordionProvider>`;


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText="Used for organizing and displaying information in a neat, collapsible format. Typically used in navigation menus, FAQs, and form instructions.">
                <p>Accordion component</p>
            </Tooltip>


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <AccordionProvider darkMode={isDarkMode} className='accordionDemo'>
                            <Accordion>
                                <AccordionTrigger name="section1">
                                    <h2>Section 1</h2>
                                </AccordionTrigger>
                                <AccordionContent name="section1">
                                    <p>This is the content for section 1</p>
                                </AccordionContent>
                            </Accordion>
                            <Accordion>
                                <AccordionTrigger name="section2">
                                    <h2>Section 2</h2>
                                </AccordionTrigger>
                                <AccordionContent name="section2">
                                    <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2ion 2</p>
                                </AccordionContent>
                            </Accordion>
                            <Accordion>
                                <AccordionTrigger name="section3">
                                    <h2>Section 3</h2>
                                </AccordionTrigger>
                                <AccordionContent name="section3">
                                    <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2ion 2</p>
                                </AccordionContent>
                            </Accordion>
                        </AccordionProvider>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </div >
    );
};

export default AccordionDemo;
