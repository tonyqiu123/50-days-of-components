'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { AccordionContent, Accordion, AccordionTrigger, AccordionProvider } from '@/components/Accordion/Accordion';
import { useGlobal } from '../layout';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';

const AccordionDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `<AccordionProvider darkMode={isDarkMode} className='accordionDemo'>
    <Accordion>

        <AccordionTrigger name="section1">
            <h2>Section 1</h2>
        </AccordionTrigger>
        <AccordionContent name="section1">
            <p>This is the content for secthis is the conte</p>
        </AccordionContent>
    </Accordion>

    <Accordion>
        <AccordionTrigger name="section2">
            <h2>Section 2</h2>
        </AccordionTrigger>
        <AccordionContent name="section2">
            <p>This is the content for secthis is  </p>
        </AccordionContent>
    </Accordion>
</AccordionProvider>`;

    return (
        <React.Fragment>

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Accordion component</h1>

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
                                    <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2ion 2</p>
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
                        </AccordionProvider>
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    );
};

export default AccordionDemo;
