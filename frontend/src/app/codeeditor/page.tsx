'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import CodeEditor from '@/components/CodeEditor/CodeEditor';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const CodeEditorDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Use the global state


    const defaultCode = `import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { Editor } from '@monaco-editor/react';


type CodeEditorProps = {
    code?: string;
    handleChange?: (code: string | undefined) => void;
    darkMode?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, handleChange = () => { }, darkMode = false, ...props }) => {

    const [editorWidth, setEditorWidth] = useState<string>('100%');
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const editorElement = editorRef.current;
            if (editorElement) {
                const viewportWidth = window.innerWidth;
                const editorRect = editorElement.getBoundingClientRect();
                const editorLeftOffset = editorRect.left;
                const newWidth = viewportWidth - editorLeftOffset;
                setEditorWidth(\`\${newWidth - 32}px\`);
            }
        };
        window.addEventListener('resize', handleResize);
        // Initial width setup
        handleResize();
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={editorRef} style={{ width: editorWidth }}>
            <Editor onChange={handleChange} height="500px" width="100%" theme={darkMode ? 'vs-dark' : 'light'} defaultValue={code} defaultLanguage="javascript" {...props} />
        </div>
    );
};

export default CodeEditor;`

    const [code, setCode] = useState(defaultCode)


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>CodeEditor component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <CodeEditor
                        darkMode={isDarkMode}
                        code={code}
                        handleChange={(text: string | undefined) => text && setCode(text)}
                    />
                </TabsContent>

                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={defaultCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CodeEditorDemo;
