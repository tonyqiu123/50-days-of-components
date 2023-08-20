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

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); 
    
    const [showDrawer, setShowDrawer] = useState(false)
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')


    const reactCode = `<Drawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} darkMode={isDarkMode}>
    <h3>Example Drawer</h3>
    <p>First Name</p>
    <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
    <p>Last Name</p>
    <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
    <p>Birthday</p>
    <SearchBar
        placeholder='Select Year'
        fullWidth={true}
        darkMode={isDarkMode}
        queries={years}
        maxHeight='500px'
    />
    <Button
        handleClick={async () => {
            return new Promise<void>(resolve => {
                try {
                    setTimeout(() => {
                        setShowDrawer(false);
                        resolve();
                    }, 500);
                } catch (error) {
                    console.error(error);
                    throw error
                }
            });
        }}
        variant='primary'
        text='Save changes'
    />
</Drawer>`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Drawer component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                    <Button handleClick={async () => setShowDrawer(true)} variant='secondary' darkMode={isDarkMode} text='Open drawer' />
                        <Drawer className='drawerDemo' setShowDrawer={setShowDrawer} showDrawer={showDrawer} darkMode={isDarkMode}>
                            <h3>Example Drawer</h3>
                            <p></p>
                            <p>First Name</p>
                            <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
                            <p>Last Name</p>
                            <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
                            <p></p>
                            <Button
                                handleClick={async () => {
                                    return new Promise<void>(resolve => {
                                        try {
                                            setTimeout(() => {
                                                setShowDrawer(false);
                                                resolve();
                                            }, 500);
                                        } catch (error) {
                                            console.error(error);
                                            throw error
                                        }
                                    });
                                }}
                                variant='primary'
                                text='Save changes'
                            />
                        </Drawer>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo;

