import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
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
                setEditorWidth(`${newWidth - 32}px`);
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

export default CodeEditor;
