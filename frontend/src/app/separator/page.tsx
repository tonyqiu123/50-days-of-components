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

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [name, setName] = useState('')
    const [search, setSearch] = useState<string>('')

    const reactCode = `<Separator orientation='h' darkMode={isDarkMode} />`;

    const exampleFunction = async () => {
        return new Promise<void>(resolve => {
            try {
                setTimeout(() => {
                    resolve();
                }, 500);
            } catch (error) {
                console.error(error);
                throw error
            }
        });
    }



    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Selector component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Card style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} darkMode={isDarkMode}>
                            <div>
                                <h2>Create project</h2>
                                <p style={{ marginTop: '8px' }}>Deply your new project in one-click.</p>
                            </div>
                            <Separator orientation='h' darkMode={isDarkMode} />
                            <p>Name</p>
                            <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
                            <p>Framework</p>
                            <SearchBar search={search} setSearch={setSearch} darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
                            <Separator orientation='h' darkMode={isDarkMode} />
                            <Button darkMode={isDarkMode} variant='primary' text='Submit' handleClick={exampleFunction} />
                        </Card>
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