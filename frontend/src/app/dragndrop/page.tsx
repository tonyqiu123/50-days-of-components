'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Counter from '@/components/Counter/Counter';
import DragNDrop from '@/components/DragNDrop/DragNDrop';
import Image from 'next/image';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Use the global state


    const reactCode = `<DragNDrop>
    <Image className='item2' height={200} width={150} src='/DragNDrop/ace.png' alt='' />
    <Image className='item2' height={200} width={150} src='/DragNDrop/jack.png' alt='' />
    <Image className='item2' height={200} width={150} src='/DragNDrop/queen.png' alt='' />
    <Image className='item2' height={200} width={150} src='/DragNDrop/king.png' alt='' />
</DragNDrop>`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>DragNDrop component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <DragNDrop>
                            <Image className='item2' height={200} width={150} src='/DragNDrop/ace.png' alt='' />
                            <Image className='item2' height={200} width={150} src='/DragNDrop/jack.png' alt='' />
                            <Image className='item2' height={200} width={150} src='/DragNDrop/queen.png' alt='' />
                            <Image className='item2' height={200} width={150} src='/DragNDrop/king.png' alt='' />
                        </DragNDrop>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo;
