'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Pagination from '@/components/Pagination/Pagination';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const PaginationDemo: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useGlobal();


  const [output, setOutput] = useState<string>('')

  const reactCode = `import Pagination from '@/components/Pagination/Pagination';
  
const exampleFunction = (index: number, queriesPerPage: number) => {
  fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${index}&_limit=\${queriesPerPage}\`)
    .then(response => response.json())
    .then(data => {
      setOutput(JSON.stringify(data, null, 2))
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

<PrettyCode style={{ maxWidth: '800px' }} className='prettycodeDemo' language='jsx' code={output} darkMode={isDarkMode} />
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



  const tsxCode = `import React, { HTMLAttributes, useState, useEffect } from 'react';
import './Pagination.css';
import Icon from '@/components/Icon/Icon';

type PaginationProps = {
    totalQueries: number;
    queriesPerPage: number;
    darkMode?: boolean;
    handleClick?: (index: number, start: number, end: number, numberOfQueries: number) => void;
} & HTMLAttributes<HTMLElement>;

const Pagination: React.FC<PaginationProps> = ({ totalQueries, darkMode = false, queriesPerPage, handleClick = () => { }, ...props }) => {
    const [selected, setSelected] = useState<number>(1);

    const handleIndicatorClick = (index: number, start: number, end: number, numberOfQueries: number): void => {
        setSelected(index);
        handleClick(index, start, end, numberOfQueries);
    };

    useEffect(() => {
        const start = queriesPerPage * (selected - 1) + 1;
        const end = Math.min(queriesPerPage * selected, totalQueries);
        const numberOfQueries = end - start + 1;
        handleIndicatorClick(selected, start, end, numberOfQueries);
    }, [selected]);

    const Indicator: JSX.Element[] = [];
    const numberOfPages = Math.ceil(totalQueries / queriesPerPage);

    for (let index = 1; index <= numberOfPages; index++) {
        Indicator.push(
            <h4
                key={index}
                className={\`indicator \${selected === index ? 'selected' : ''}\`}
                onClick={() => setSelected(index)}
            >
                {index}
            </h4>
        );
    }

    return (
        <section {...props} className={\`\${props.className ? props.className : ''} pagination \${darkMode ? 'darkMode' : ''}\`}>
            <div>
                {selected !== 1 && <Icon invert={darkMode} onClick={() => setSelected(1)} height={16} width={16} image='/pagination/reverseDoubleArrow.svg' />}
            </div>
            <div>
                {selected !== 1 && <Icon invert={darkMode} onClick={() => setSelected(selected => selected - 1)} height={16} width={16} image='/pagination/reverseArrow.svg' />}
            </div>
            {Indicator}
            <div>
                {selected !== numberOfPages && <Icon invert={darkMode} onClick={() => setSelected(selected => selected + 1)} height={16} width={16} image='/pagination/arrow.svg' />}
            </div>
            <div>
                {selected !== numberOfPages && <Icon invert={darkMode} onClick={() => setSelected(numberOfPages)} height={16} width={16} image='/pagination/doubleArrow.svg' />}
            </div>
        </section>
    );
};

export default Pagination;
`

  const cssCode = `.pagination {
    display: flex;
    align-items: center;
    gap: 8px;
}

.pagination * {
    user-select: none;
}

.pagination > * {
    width: 24px;
}

.indicator {
    display: flex;
    width: 32px;
    height: 32px;
    display: inline-block;
    cursor: pointer;
    text-align: center;  
    line-height: 32px;  
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}


.indicator:hover {
    background-color: #E5E7EB;
}

.selected {
    background-color: black !important;
    color: white !important;
}

/* darkMode */
.darkMode.pagination .selected {
    background-color: rgb(255, 255, 255) !important;
    color: rgb(0, 0, 0) !important;
}

.darkMode.pagination .indicator:hover {
    background-color: rgb(66, 66, 66)
}`

  const unitTestCode = `import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '@/components/Pagination/Pagination';

describe('Pagination Component', () => {
  it('renders pagination with indicators', () => {
    const { getByText } = render(
      <Pagination totalQueries={50} queriesPerPage={10} />
    );

    const indicator1 = getByText('1');
    const indicator5 = getByText('5');

    expect(indicator1).toBeInTheDocument();
    expect(indicator5).toBeInTheDocument();
  });

  it('renders selected indicator with "selected" class', () => {
    const { getByText } = render(
      <Pagination totalQueries={50} queriesPerPage={10} />
    );

    const selectedIndicator = getByText('1');

    expect(selectedIndicator).toHaveClass('selected');
  });

  it('invokes handleClick when an indicator is clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByText } = render(
      <Pagination totalQueries={50} queriesPerPage={10} handleClick={mockHandleClick} />
    );

    const indicator3 = getByText('3');
    fireEvent.click(indicator3);

    expect(mockHandleClick).toHaveBeenCalledTimes(2);
    expect(mockHandleClick).toHaveBeenCalledWith(3, 21, 30, 10);
  });

  it('invokes handleClick when arrow icons are clicked', () => {
    const mockHandleClick = jest.fn();
    const { container } = render(
      <Pagination totalQueries={50} queriesPerPage={10} handleClick={mockHandleClick} />
    );

    const nextArrow = container.querySelector('.pagination > div:nth-of-type(3) .icon');
    fireEvent.click(nextArrow);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(1, 1, 10, 10);
  });

  // Add more test cases as needed
});`

  return (
    <React.Fragment>

      <h4>Day 34 / 50</h4>
      <Spacer y={2} />
      <h1>Pagination component</h1>
      <Spacer y={4} />
      <p>The pagination component in web development facilitates the organization and navigation of large sets of content by dividing it into manageable pages, enhancing user experience. It typically includes controls like "Previous" and "Next" buttons, enabling users to navigate through the content sequentially.</p>
      <Spacer y={4} />
      <div className='row' style={{ gap: '8px' }}>
        <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Pagination' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon target='_blank' href='https://www.youtube.com/watch?v=FK7lXagTPp4' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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


      <Spacer y={4} />
      <Separator darkMode={isDarkMode} orientation='h' />
      <Spacer y={8} />
      <h1>Component Code</h1>
      <Spacer y={4} />
      <Tabs darkMode={isDarkMode}>
        <TabsTrigger value='tsx'><p>tsx</p></TabsTrigger>
        <TabsTrigger value='css'><p>css</p></TabsTrigger>
        <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

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

        <TabsContent value='test'>
          <ShowMore height={600} darkMode={isDarkMode}>
            <PrettyCode className='prettycodeDemo' language='jsx' code={unitTestCode} darkMode={isDarkMode} />
          </ShowMore>
        </TabsContent>
      </Tabs>
    </React.Fragment>
  );
};

export default PaginationDemo;
