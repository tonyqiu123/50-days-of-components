'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Icon from '@/components/Icon/Icon';
import ShowMore from '@/components/ShowMore/ShowMore';
import MultiSelect from '@/components/MultiSelect/MultiSelect';
import Popover from '@/components/Popover/Popover';
import Button from '@/components/Button/Button';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command';
import Pagination from '@/components/Pagination/Pagination';

const CarouselDemo: React.FC = () => {

  const { isDarkMode, setIsDarkMode } = useGlobal();

  const [output, setOutput] = useState<string>('')

  const reactCode = ` <PrettyCode style={{ maxWidth: '800px' }} className='prettycodeDemo' language='jsx' code={output} darkMode={isDarkMode} />
  <Pagination darkMode={isDarkMode} handleClick={(index, start, end, numberOfQueries) => exampleFunction(index, numberOfQueries)} totalQueries={25} queriesPerPage={5} />`;

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
    <React.Fragment >

      <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
      <h1>Pagination component</h1>
      <Tabs darkMode={isDarkMode}>

        <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>

        <TabsContent value='preview1'>
          <div className='demoBox'>
            <PrettyCode style={{ maxWidth: '800px' }} className='prettycodeDemo' language='jsx' code={output} darkMode={isDarkMode} />
            <Pagination darkMode={isDarkMode} handleClick={(index, start, end, numberOfQueries) => exampleFunction(index, numberOfQueries)} totalQueries={25} queriesPerPage={5} />
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