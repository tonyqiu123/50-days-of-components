import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './PrettyCode.css'

interface PrettyCodeProps extends React.HTMLProps<HTMLDivElement> {
  code: string;
  darkMode?: boolean;
  language: string;
  showTab?: boolean;
}

const PrettyCode: React.FC<PrettyCodeProps> = ({ code, darkMode = false, language, showTab = true, ...props }) => {

  const [copied, setCopied] = useState('Copy code');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied('Copied');

      setTimeout(() => {
        setCopied('Copy code');
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopied('Failed to copy');
    }
  };

  return (
    <div {...props} className={`prettycodeContainer ${darkMode && 'darkMode'} ${props.className ? props.className : ''}`}>
      {showTab &&
        <div className='prettycodeHeader'>
          {language}
          <p onClick={handleCopy} style={{ cursor: 'pointer' }}>{copied}</p>
        </div>
      }
      <SyntaxHighlighter className='prettycode' language={language} style={darkMode ? vscDarkPlus : prism}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default PrettyCode;
