'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import { Editor } from '@monaco-editor/react';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const CodeEditorDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [code, setCode] = useState(`<Editor
    defaultLanguage='javascript'
    height='500px'
    width='100%'
    theme={isDarkMode ? 'vs-dark' : 'light'}
    defaultValue={code}
    onChange={(text: string | undefined) => text && setCode(text)}
/>`);

    const reactCode = `import CodeEditor from '@/components/CodeEditor/CodeEditor';

<Editor
    defaultLanguage='javascript'
    height='500px'
    width='100%'
    theme={isDarkMode ? 'vs-dark' : 'light'}
    defaultValue={code}
    onChange={(text: string | undefined) => text && setCode(text)}
/>`

    return (
        <React.Fragment>

            <h4>Day 47 / 50</h4>
            <Spacer y={2} />
            <h1>CodeEditor component</h1>
            <Spacer y={4} />
            <p>This is not my component, rather it was created by Microsoft <a href='https://github.com/suren-atoyan/monaco-react' target="_blank">(https://github.com/suren-atoyan/monaco-react)</a> I am adding it to the component library for quick reference and accessibility.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/CodeEditor' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=gXJhl3tD5XA' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent style={{ maxWidth: '100%' }} value='preview'>
                    <div className='demoBox'>

                        <Editor
                            defaultLanguage='javascript'
                            height='500px'
                            width='100%'
                            theme={isDarkMode ? 'vs-dark' : 'light'}
                            defaultValue={code}
                            onChange={(text: string | undefined) => text && setCode(text)}
                        />
                    </div>
                </TabsContent>

                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>
            <Spacer y={4} />

        </React.Fragment>
    );
};

export default CodeEditorDemo;
