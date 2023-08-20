'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Sheet from '@/components/Sheet/Sheet';
import Input from '@/components/Input/Input';
import Checkbox from '@/components/Checkbox/Checkbox';
import SearchBar from '@/components/SearchBar/SearchBar';

const SheetDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showSheet, setShowSheet] = useState(false)
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [search, setSearch] = useState<string>('')

    const reactCode = `import Button from '@/components/Button/Button';
import Sheet from '@/components/Sheet/Sheet';
import Input from '@/components/Input/Input';
import Checkbox from '@/components/Checkbox/Checkbox';
import SearchBar from '@/components/SearchBar/SearchBar';
    
const SheetDemo: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showSheet, setShowSheet] = useState(false)
    
    return (
        <>
            <Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
            <Sheet setShowSheet={setShowSheet} showSheet={showSheet} darkMode={isDarkMode}>
                <h3>Example Sheet</h3>
                <Input title='First Name' darkMode={isDarkMode} placeHolder='First Name' />
                <Input title='Last Name' darkMode={isDarkMode} placeHolder='Last Name' />
                <SearchBar
                title='Birth Year'
                placeholder='Select Year'
                fullWidth={true}
                darkMode={isDarkMode}
                queries={years}
                maxHeight='500px'
                />
                <Checkbox className='checkbox' darkMode={isDarkMode} primaryText='Accept terms and conditions' subText='Agree to our Terms of Service and Privacy Policy.' />
                <Button
                    handleClick={async () => {
                        return new Promise<void>(resolve => {
                            try {
                                setTimeout(() => {
                                    setShowSheet(false);
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
            </Sheet>
        </>
    )
}`;


    const years = Array.from({ length: 21 }, (_, index) => 2023 - index).map(year => year.toString());



    return (
        <div className={`sheetDemo page ${isDarkMode && 'darkMode'}`}>

            
            <Tooltip darkMode={isDarkMode} toolTipText="A sheet component is a slide-out panel that emerges from the side of the screen, providing additional content or options without leaving the current view. It's often used in applications for navigation, contextual information, or additional settings and adjustments.">
                <p>Sheet component</p>
            </Tooltip>


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
                        <Sheet setShowSheet={setShowSheet} showSheet={showSheet} darkMode={isDarkMode}>
                            <h3>Example Sheet</h3>
                            <p>First Name</p>
                            <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
                            <p>Last Name</p>
                            <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
                            <p>Birthday</p>
                            <SearchBar
                                search={search}
                                setSearch={setSearch}
                                placeholder='Select Year'
                                fullWidth={true}
                                darkMode={isDarkMode}
                                queries={years}
                                maxHeight='500px'
                            />
                            <Checkbox className='checkbox' darkMode={isDarkMode} primaryText='Accept terms and conditions' subText='Agree to our Terms of Service and Privacy Policy.' />
                            <Button
                                handleClick={async () => {
                                    return new Promise<void>(resolve => {
                                        try {
                                            setTimeout(() => {
                                                setShowSheet(false);
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
                        </Sheet>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </div>
    );
};

export default SheetDemo;
