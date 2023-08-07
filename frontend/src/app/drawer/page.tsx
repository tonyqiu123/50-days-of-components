'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Drawer from '@/components/Drawer/Drawer';
import Input from '@/components/Input/Input';
import Checkbox from '@/components/Checkbox/Checkbox';
import SearchBar from '@/components/SearchBar/SearchBar';

const DrawerDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)
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


    const years = Array.from({ length: 21 }, (_, index) => 2023 - index).map(year => year.toString());



    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText="The Drawer component offers a customizable sliding interface to present content with easy visibility control.">
                <p>Drawer component</p>
            </Tooltip>


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Button handleClick={async () => setShowDrawer(true)} variant='secondary' text='Open drawer' />
                        <Drawer className='drawerDemo' setShowDrawer={setShowDrawer} showDrawer={showDrawer} darkMode={isDarkMode}>
                            <h3>Example Drawer</h3>
                            <p></p>
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

        </div>
    );
};

export default DrawerDemo;
