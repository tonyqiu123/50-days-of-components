'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Editor } from '@monaco-editor/react';

const CodeEditorDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Use the global state

    const reactCode = `<Editor
    defaultLanguage='javascript'
    height='500px'
    width='100%'
    theme={isDarkMode ? 'vs-dark' : 'light'}
    defaultValue={code}
    onChange={(text: string | undefined) => text && setCode(text)}
/>`
 
 
    const [code, setCode] = useState(reactCode)


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>CodeEditor component</h1>
            <p>Credit: <a href='https://github.com/suren-atoyan/monaco-react/tree/master' target='__blank'>https://github.com/suren-atoyan/monaco-react/tree/master</a></p>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent style={{ maxWidth:'100%' }} value='preview'>
                    <Editor
                        defaultLanguage='javascript'
                        height='500px'
                        width='100%'
                        theme={isDarkMode ? 'vs-dark' : 'light'}
                        defaultValue={code}
                        onChange={(text: string | undefined) => text && setCode(text)}
                    />
                </TabsContent>

                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CodeEditorDemo;