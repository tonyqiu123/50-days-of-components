'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator'; 
import Button from '@/components/Button/Button';
import Image from 'next/image';

const PrettyCodeDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal();

  const reactCode = `import PrettyCode from '@/components/PrettyCode/PrettyCode';
  
const reactCode = \`<PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />\`;
  
<PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />`;


  const tsxCode = `import React, { useState } from 'react';
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
    <div {...props} className={\`prettycodeContainer \${darkMode && 'darkMode'} \${props.className ? props.className : ''}\`}>
      {showTab &&
        <div className='prettycodeHeader'>
          <p>
            {language}
          </p>
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
`

  const cssCode = `.prettycodeContainer {
    padding: 16px 20px;
    background: rgb(255, 255, 255);
    border: 1px solid #d4d4d4;
}

.prettycodeHeader {
    display: flex;
    justify-content: space-between;
    margin: -16px -20px 16px -20px;
    padding: 8px 20px;
    background-color: #f3f3f3;
}

.prettycodeContainer * {
    font-size: 14px !important;
    line-height: 150% !important;

}

.darkMode.prettycodeContainer {
    background: #000000;
    border: 1px solid #313131;
}

.darkMode.prettycodeContainer>.prettycodeHeader {
    background-color: #313131;
}

/* Scrollbar */

.prettycode::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.prettycode::-webkit-scrollbar-track {
    background-color: #f3f3f3;
}

.prettycode::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
}

/* Scrollbar Darkmode */
.darkMode.prettycodeContainer>.prettycode::-webkit-scrollbar-track {
    background-color: #313131;
}

.darkMode.prettycodeContainer>.prettycode::-webkit-scrollbar-thumb {
    background-color: #717171;
}

/* do not touch */
.prettycode,
.prettycode * {
    border: none !important;
    padding: 0 !important;
    background-color: rgba(255, 0, 0, 0) !important;
}

`


  return (
    <React.Fragment>

      <h4>Day 18 / 50</h4>
      <Spacer y={2} />
      <h1>PrettyCode component</h1>
      <Spacer y={4} />
      <p>The "PrettyCode" component serves to display code snippets in a clean and appealing way. It employs the "react-syntax-highlighter" library to bring syntax-highlighted code to life, making it a key player in a coding tutorial site, blog post, or documentation.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/PrettyCode' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=vE99eu9BC9Y' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
      </div>
      <Spacer y={4} />
      <Separator darkMode={isDarkMode} orientation='h' />
      <Spacer y={8} />

      <h1>Usage</h1>
      <Spacer y={4} />
      <Tabs darkMode={isDarkMode}>

        <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>

        <TabsContent value='preview1'>
          <div className='demoBox'>
            <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <ShowMore text='Reveal' darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>

      </Tabs>




      <Spacer y={4} />
      <Separator darkMode={isDarkMode} orientation='h' />
      <Spacer y={8} />
      <h1>Component Code</h1>
      <Spacer y={4} />
      <Tabs darkMode={isDarkMode}>
        <TabsTrigger value='tsx'><p>tsx</p></TabsTrigger>
        <TabsTrigger value='css'><p>css</p></TabsTrigger>

        <TabsContent value='tsx'>
          <ShowMore height={600} darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>

        <TabsContent value='css'>
          <ShowMore height={600} darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='css' code={cssCode} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>

      
      </Tabs>
    </React.Fragment>
  );
};

export default PrettyCodeDemo;
