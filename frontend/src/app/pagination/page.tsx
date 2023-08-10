'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Pagination from '@/components/Pagination/Pagination';
import ShowMore from '@/components/ShowMore/ShowMore';


const PaginationDemo: React.FC = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [output, setOutput] = useState('')

  const reactCode = `const exampleFunction = (index: number, queriesPerPage: number) => {
    fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${index}&_end=\${queriesPerPage}\`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  
  <Pagination handleClick={(index, start, end, numberOfQueries) => exampleFunction(index, numberOfQueries)} totalQueries={25} queriesPerPage={5} />`;


  const exampleFunction = (index: number, queriesPerPage: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${index}&_limit=${queriesPerPage}`)
      .then(response => response.json())
      .then(data => {
        setOutput(JSON.stringify(data, null, 2))
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }


  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>
      <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(darkMode => !darkMode)} />
      <Tooltip darkMode={isDarkMode} toolTipText="Show the currently active page and enable navigation among multiple pages.">
        <p>Pagination component</p>
      </Tooltip>

      <Tabs darkMode={isDarkMode}>
        <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>
        <TabsContent value='preview'>
          <div className='demoBox'>
            <PrettyCode style={{ maxWidth: '800px' }} className='prettycodeDemo' language='jsx' code={output} darkMode={isDarkMode} />
            <Pagination darkMode={isDarkMode} handleClick={(index, start, end, numberOfQueries) => exampleFunction(index, numberOfQueries)} totalQueries={25} queriesPerPage={5} />
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <ShowMore darkMode={isDarkMode} height={125}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaginationDemo;
