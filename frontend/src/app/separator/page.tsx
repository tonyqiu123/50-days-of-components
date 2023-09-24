'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Card from '@/components/Card/Card';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';

const SeparatorDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [name, setName] = useState('')
    const [search, setSearch] = useState<string>('')

    const exampleFunction = async () => {
        return new Promise<void>(resolve => {
            try {
                setTimeout(() => {
                    resolve();
                }, 500);
            } catch (error) {
                console.error(error);
                throw error
            }
        });
    }


    const reactCode = `import Separator from '@/components/Separator/Separator'
import Card from '@/components/Card/Card';  
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';;

const [name, setName] = useState('')
const [search, setSearch] = useState<string>('')

const exampleFunction = async () => {
    return new Promise<void>(resolve => {
        try {
            setTimeout(() => {
                resolve();
            }, 500);
        } catch (error) {
            console.error(error);
            throw error
        }
    });
}

<Card style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} darkMode={isDarkMode}>
    <div>
        <h2>Create project</h2>
        <p style={{ marginTop: '8px' }}>Deply your new project in one-click.</p>
    </div>
    <Separator orientation='h' darkMode={isDarkMode} />
    <p>Name</p>
    <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
    <p>Framework</p>
    <SearchBar search={search} setSearch={setSearch} darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
    <Separator orientation='h' darkMode={isDarkMode} />
    <Button darkMode={isDarkMode} variant='primary' text='Submit' handleClick={exampleFunction} />
</Card>`;

    const tsxCode = `import React, { HTMLAttributes } from 'react';
import './Separator.css'

type SeparatorProps = {
    darkMode?: boolean
    orientation: 'v' | 'h'
} & HTMLAttributes<HTMLElement>;

const Separator: React.FC<SeparatorProps> = ({ darkMode = false, orientation, ...props }) => {
    return (
        <div {...props} className={\`separator \${orientation} \${props.className ? props.className : ''} \${darkMode ? 'darkMode' : ''}\`}></div>
    )
}

export default Separator`

    const cssCode = `/* horizontal */
.h.separator {
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;;
}

/* vertical */
.v.separator {
    height: 100%;
    width: 1px;
    background-color: #d4d4d4;;
}

/* darkMode */
.darkMode.separator {
    background-color: #313131;
} `


    const unitTestCode = `import React from 'react';
    import { render } from '@testing-library/react';
    import Separator from '@/components/Separator/Separator';
    
    describe('Separator Component', () => {
      it('renders vertical separator', () => {
        const { container } = render(<Separator orientation="v" />);
        const separatorElement = container.querySelector('.separator.v');
        expect(separatorElement).toBeInTheDocument();
      });
    
      it('renders horizontal separator', () => {
        const { container } = render(<Separator orientation="h" />);
        const separatorElement = container.querySelector('.separator.h');
        expect(separatorElement).toBeInTheDocument();
      });
    
      it('renders with dark mode class', () => {
        const { container } = render(<Separator orientation="v" darkMode />);
        const separatorElement = container.querySelector('.separator.darkMode');
        expect(separatorElement).toBeInTheDocument();
      });
    
      // Add more tests as needed
    });`    

    return (
        <React.Fragment>

            <h1>Separator component</h1>
            <Spacer y={4} />
            <p>The select web development component plays a pivotal role in enhancing user interaction by presenting a dropdown menu that enables users to conveniently choose from a range of options. This intuitive interface element not only simplifies data input but also contributes to a seamless and engaging user experience, making it an indispensable tool for creating dynamic and user-centric web applications.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Separator' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=S4sjJpji5Hs' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox' style={{ height: '600px' }}>
                        <Card style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} darkMode={isDarkMode}>
                            <div>
                                <h2>Create project</h2>
                                <p style={{ marginTop: '8px' }}>Deply your new project in one-click.</p>
                            </div>
                            <Separator orientation='h' darkMode={isDarkMode} />
                            <p>Name</p>
                            <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
                            <p>Framework</p>
                            <SearchBar search={search} setSearch={setSearch} darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
                            <Separator orientation='h' darkMode={isDarkMode} />
                            <Button darkMode={isDarkMode} variant='primary' text='Submit' handleClick={exampleFunction} />
                        </Card>
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

export default SeparatorDemo;
