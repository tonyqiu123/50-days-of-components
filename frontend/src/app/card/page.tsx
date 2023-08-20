'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Card from '@/components/Card/Card';
import ShowMore from '@/components/ShowMore/ShowMore';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'; // Assuming you have the Breadcrumb component
import { useGlobal } from '../layout';

const CardDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [name, setName] = useState('');
    const [search, setSearch] = useState<string>('');

    const reactCode = `
<Card style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} darkMode={isDarkMode}>
    <h2>Create project</h2>
    <p>Deploy your new project in one-click.</p>
    <p style={{ marginTop: '16px' }}>Name</p>
    <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
    <p style={{ marginTop: '16px' }}>Framework</p>
    <SearchBar darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
    <Button style={{ marginTop: '16px' }} darkMode={isDarkMode} variant='primary' text='Submit' />
</Card>`;

    const exampleFunction = async () => {
        return new Promise<void>(resolve => {
            try {
                setTimeout(() => {
                    resolve();
                }, 500);
            } catch (error) {
                console.error(error);
                throw error;
            }
        });
    };

    return (
        <React.Fragment >
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Card component</h1>
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>
                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Card style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} darkMode={isDarkMode}>
                            <h2>Create project</h2>
                            <p>Deploy your new project in one-click.</p>
                            <p style={{ marginTop: '16px' }}>Name</p>
                            <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
                            <p style={{ marginTop: '16px' }}>Framework</p>
                            <SearchBar search={search} setSearch={setSearch} darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
                            <Button style={{ marginTop: '16px' }} darkMode={isDarkMode} variant='primary' text='Submit' handleClick={exampleFunction} />
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={300} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    );
};

export default CardDemo;
