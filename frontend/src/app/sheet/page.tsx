'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Select from '@/components/Select/Select';
import Card from '@/components/Card/Card';
import Separator from '@/components/Separator/Separator';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Sheet from '@/components/Sheet/Sheet';
import Checkbox from '@/components/Checkbox/Checkbox';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showSheet, setShowSheet] = useState(false)
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [search, setSearch] = useState<string>('')


    const reactCode = `<Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
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
    </Sheet>`

    const years = Array.from({ length: 21 }, (_, index) => 2023 - index).map(year => year.toString());


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Sheet component</h1>
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
                <TabsContent value='code'>
                    <ShowMore text='Reveal' darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 