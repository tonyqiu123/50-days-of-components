'use client'

import React, { useState } from 'react';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';

const PrettyCodeDemo: React.FC = () => {


  const [isDarkMode, setIsDarkMode] = useState(false)
  const [copyProp, setCopyProp] = useState(false)

  const reactCode = `import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './PrettyCode.css'

interface PrettyCodeProps {
  code: string;
  darkMode?: boolean
  language: string
  showTab?: boolean
}

const PrettyCode: React.FC<PrettyCodeProps> = ({ code, darkMode = false, language, copy = false }) => {

  const [copied, setCopied] = useState('Copy code 📋');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied('Copied ✅');

      setTimeout(() => {
        setCopied('Copy code 📋');
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopied('Failed to copy ❌');
    }
  };

  return (
    <div className={\`prettycodeContainer \${darkMode && 'darkMode'}\`}>
      <div className='prettycodeHeader'>
        {language}
        {copy && <p onClick={handleCopy} style={{ cursor: 'pointer' }}>{copied}</p>}
      </div>
      <SyntaxHighlighter className='prettycode' language={language} style={darkMode ? vscDarkPlus : prism}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default PrettyCode;`;


  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <Button variant='secondary' darkMode={isDarkMode} text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Button variant='secondary' darkMode={isDarkMode} text={copyProp ? 'Untoggle copy prop' : 'Toggle copy prop'} handleClick={async () => setCopyProp(!copyProp)} />
      <Tooltip darkMode={isDarkMode} toolTipText='Display code on the browser with appropriate colouring.'><p>PrettyCode component</p></Tooltip>
      <div className='demoBox'>

        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} showTab={copyProp} darkMode={isDarkMode} />

      </div>
    </div>
  );
};

export default PrettyCodeDemo;
