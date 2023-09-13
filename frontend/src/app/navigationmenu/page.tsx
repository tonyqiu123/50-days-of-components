'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Separator from '@/components/Separator/Separator';
import Icon from '@/components/Icon/Icon';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';

const NavigationMenuDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';'

<NavigationMenu darkMode={isDarkMode}>
    <NavigationMenu.Links>
        <NavigationMenu.Link linkName="Home"><h3>Home</h3></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Products"><h3>Products</h3></NavigationMenu.Link>
        <NavigationMenu.Link linkName="About Us"><h3>About Us</h3></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Solutions"><h3>Solutions</h3></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Pricing"><h3>Pricing</h3></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Developers"><h3>Developers</h3></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Services"><h3>Services</h3></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Contact"><h3>Contact</h3></NavigationMenu.Link>
    </NavigationMenu.Links>
    <NavigationMenu.MovingWindow>

        <NavigationMenu.Dropdown linkName="Solutions">
            <div style={{ width: '1000px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '24px', gap: '24px' }}>
                <div className='column'>
                    <h4>Software Solutions</h4>
                    <p>Explore our latest software offerings designed to streamline your tasks.</p>
                </div>
                <div className='column'>
                    <h4>Hardware Selection</h4>
                    <p>Discover a range of high-quality hardware products built to meet your needs.</p>
                </div>
                <div className='column'>
                    <h4>Accessories Collection</h4>
                    <p>Enhance your setup with our thoughtfully curated accessories.</p>
                </div>
                <div className='column'>
                    <h4>Exclusive Deals</h4>
                    <p>Take advantage of limited-time special offers that we have for you.</p>
                </div>
                <div className='column'>
                    <h4>Mobile Apps</h4>
                    <p>Download our mobile apps for on-the-go productivity and entertainment.</p>
                </div>
                <div className='column'>
                    <h4>Training Resources</h4>
                    <p>Access training materials to make the most of our products and services.</p>
                </div>
                <div className='column'>
                    <h4>Customer Support</h4>
                    <p>Get assistance from our dedicated support team whenever you need it.</p>
                </div>
                <div className='column'>
                    <h4>Community Forums</h4>
                    <p>Join discussions and share insights with our community of users.</p>
                </div>
                <div className='column'>
                    <h4>Software Solutions</h4>
                    <p>Explore our latest software offerings designed to streamline your tasks.</p>
                </div>
                <div className='column'>
                    <h4>Hardware Selection</h4>
                    <p>Discover a range of high-quality hardware products built to meet your needs.</p>
                </div>
                <div className='column'>
                    <h4>Accessories Collection</h4>
                    <p>Enhance your setup with our thoughtfully curated accessories.</p>
                </div>
                <div className='column'>
                    <h4>Exclusive Deals</h4>
                    <p>Take advantage of limited-time special offers that we have for you.</p>
                </div>
                <div className='column'>
                    <h4>Mobile Apps</h4>
                    <p>Download our mobile apps for on-the-go productivity and entertainment.</p>
                </div>
                <div className='column'>
                    <h4>Training Resources</h4>
                    <p>Access training materials to make the most of our products and services.</p>
                </div>
                <div className='column'>
                    <h4>Customer Support</h4>
                    <p>Get assistance from our dedicated support team whenever you need it.</p>
                </div>
                <div className='column'>
                    <h4>Community Forums</h4>
                    <p>Join discussions and share insights with our community of users.</p>
                </div>
            </div>
        </NavigationMenu.Dropdown>

        <NavigationMenu.Dropdown linkName="Products">
            <div style={{ width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '32px', gap: '32px' }}>
                <div className='column'>
                    <h4>Software</h4>
                    <p>Explore our cutting-edge software solutions</p>
                </div>
                <div className='column'>
                    <h4>Hardware</h4>
                    <p>Discover our high-quality hardware products</p>
                </div>
                <div className='column'>
                    <h4>Accessories</h4>
                    <p>Enhance your experience with our accessories</p>
                </div>
                <div className='column'>
                    <h4>Special Offers</h4>
                    <p>Check out our limited-time special offers</p>
                </div>
            </div>
        </NavigationMenu.Dropdown>
        <NavigationMenu.Dropdown linkName="About Us">
            <div style={{ width: '600px', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '32px', gap: '32px' }}>
                <div className='column'>
                    <h4>Innovative Solutions</h4>
                    <p>Explore our latest groundbreaking software solutions</p>
                </div>
                <div className='column'>
                    <h4>Premium Hardware</h4>
                    <p>Discover our collection of top-tier hardware products</p>
                </div>
                <div className='column'>
                    <h4>Complementary Accessories</h4>
                    <p>Elevate your experience with our range of accessories</p>
                </div>
                <div className='column'>
                    <h4>Exclusive Deals</h4>
                    <p>Take advantage of limited-time special offers</p>
                </div>
            </div>
        </NavigationMenu.Dropdown>
        <NavigationMenu.Dropdown linkName="Pricing">
            <div style={{ width: '800px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '24px', gap: '24px' }}>
                <div className='column'>
                    <h4>Software Solutions</h4>
                    <p>Discover our innovative software solutions tailored to your needs</p>
                </div>
                <div className='column'>
                    <h4>Hardware Selection</h4>
                    <p>Explore our premium hardware products for your technological requirements</p>
                </div>
                <div className='column'>
                    <h4>Accessories Collection</h4>
                    <p>Enhance your setup with our range of high-quality accessories</p>
                </div>
                <div className='column'>
                    <h4>Exclusive Deals</h4>
                    <p>Take advantage of our limited-time special offers and promotions</p>
                </div>
                <div className='column'>
                    <h4>Service Packages</h4>
                    <p>Customized service bundles to provide you with comprehensive solutions</p>
                </div>
                <div className='column'>
                    <h4>Support & Maintenance</h4>
                    <p>Learn about our dedicated support and maintenance options for your products</p>
                </div>
            </div>
        </NavigationMenu.Dropdown>
        <NavigationMenu.Dropdown linkName="Services">
            <div style={{ width: '700px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '32px', gap: '32px' }}>
                <div className='column'>
                    <h4>Consulting</h4>
                    <p>Get expert advice for your business</p>
                </div>
                <div className='column'>
                    <h4>Support</h4>
                    <p>24/7 technical support for our products</p>
                </div>
                <div className='column'>
                    <h4>Training</h4>
                    <p>Enhance your skills with our training programs</p>
                </div>
                <div className='column'>
                    <h4>Customization</h4>
                    <p>Tailor our solutions to meet your needs</p>
                </div>
            </div>
        </NavigationMenu.Dropdown>
    </NavigationMenu.MovingWindow>
</NavigationMenu>`;

    const tsxCode = `import React, { createContext, useContext, useState, useEffect, useRef, HTMLAttributes, Children, useMemo } from 'react';
    import './NavigationMenu.css';
    import Image from 'next/image';
    
const buildObject = (ref: any) => {
    const refObject: any = {}
    refObject['width'] = ref.current.getBoundingClientRect().width
    refObject['left'] = ref.current.getBoundingClientRect().left
    refObject['right'] = ref.current.getBoundingClientRect().right
    refObject['height'] = ref.current.getBoundingClientRect().height
    return refObject
}
type ContextProps = {
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<string>>;
    linkDimensions: any;
    setLinkDimensions: React.Dispatch<React.SetStateAction<any>>;
    dropdownDimensions: any;
    setDropdownDimensions: React.Dispatch<React.SetStateAction<any>>;
    movingWindowRef: any;
};

const initialContextValue: ContextProps = {
    activeLink: '',
    setActiveLink: () => { },
    linkDimensions: {},
    setLinkDimensions: () => { },
    dropdownDimensions: {},
    setDropdownDimensions: () => { },
    movingWindowRef: null,
};

const Context = createContext<ContextProps>(initialContextValue);
const useNavigationMenu = () => useContext(Context);

type NavigationMenuProps = {
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const NavigationMenu: React.FC<NavigationMenuProps> & {
    Link: React.FC<LinkProps>;
    Links: React.FC<LinksProps>;
    MovingWindow: React.FC<MovingWindowProps>;
    Dropdown: React.FC<DropdownProps>;
} = ({ children, darkMode = false, ...props }) => {
    const [activeLink, setActiveLink] = useState('');
    const [linkDimensions, setLinkDimensions] = useState({});
    const [dropdownDimensions, setDropdownDimensions] = useState({});
    const movingWindowRef = useRef(null);

    return (
        <Context.Provider value={{ activeLink, setActiveLink, linkDimensions, dropdownDimensions, movingWindowRef, setLinkDimensions, setDropdownDimensions }}>
            <div {...props} className={\`navigationMenu \${darkMode ? 'darkMode' : ''} \${props.className}\`}>{children}</div>
        </Context.Provider>
    );
};

type LinksProps = {} & HTMLAttributes<HTMLElement>;

const Links: React.FC<LinksProps> = ({ children, ...props }) => {
    return <div {...props} className={\`\${props.className} navigationMenuLinks\`}>{children}</div>;
};

type LinkProps = {
    linkName: string;
} & HTMLAttributes<HTMLElement>;

const Link: React.FC<LinkProps> = ({ linkName, children, ...props }) => {
    const { activeLink, setActiveLink, dropdownDimensions, setLinkDimensions } = useNavigationMenu();
    const [hasDropdown, setHasDropdown] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (dropdownDimensions[linkName]) {
            setHasDropdown(true);
        }
        if (ref.current) {
            setLinkDimensions((prevObj: Record<string, any>) => ({
                ...prevObj,
                [linkName]: buildObject(ref)
            }));
        }
    }, [dropdownDimensions, linkName, activeLink]);



    return (
        <div
            {...props}
            ref={ref}
            style={{ cursor: \`\${hasDropdown ? 'default' : 'pointer'}\` }}
            className={\`navigationMenuLink \${activeLink === linkName ? 'active' : ''} \${props.className}\`}
            onMouseOver={() => {
                if (hasDropdown) {
                    setActiveLink(linkName)
                }
            }}
            onMouseLeave={() => {
                setActiveLink('')
            }
            }
        >
            {children}
        </div>
    );
};

type MovingWindowProps = {} & HTMLAttributes<HTMLElement>;

const MovingWindow: React.FC<MovingWindowProps> = ({ children, ...props }) => {
    const { linkDimensions, setActiveLink, activeLink, dropdownDimensions, movingWindowRef } = useNavigationMenu();



    useMemo(() => {
        const activeDropdownDimensions = dropdownDimensions[activeLink]
        const activeLinkDimensions = linkDimensions[activeLink]
        if (dropdownDimensions[activeLink] && linkDimensions[activeLink] && movingWindowRef) {
            const movingWindowStyle = movingWindowRef?.current?.style
            const linkRefKeys = Object.keys(linkDimensions);
            const firstLinkRect = linkDimensions[linkRefKeys[0]];
            const lastLinkRect = linkDimensions[linkRefKeys[linkRefKeys.length - 1]];
            const totalWidth = lastLinkRect.left - firstLinkRect.left + lastLinkRect.width


            movingWindowStyle.width = \`\${activeDropdownDimensions.width}px\`;
            movingWindowStyle.height = \`\${activeDropdownDimensions.height}px\`;

            const centeredLeft = activeLinkDimensions.left + activeLinkDimensions.width / 2 - activeDropdownDimensions.width / 2;
            const centeredRight = activeLinkDimensions.right - activeLinkDimensions.width / 2 + activeDropdownDimensions.width / 2;

            // left aligned
            if (activeDropdownDimensions.width > totalWidth || centeredLeft < firstLinkRect.left) {
                movingWindowStyle.transform = 'unset';
            }

            // right aligned
            else if (centeredRight > lastLinkRect.right) {
                movingWindowStyle.transform = \`translateX(\${totalWidth - activeDropdownDimensions.width}px)\`
            }
            // centered aligned
            else {
                movingWindowStyle.transform = \`translateX(\${activeLinkDimensions.left - firstLinkRect.left + activeLinkDimensions.width / 2 - activeDropdownDimensions.width / 2}px)\`
            }

        }
    }, [activeLink, dropdownDimensions, linkDimensions, movingWindowRef]);



    return (
        <div
            {...props}
            onMouseOver={() => setActiveLink(activeLink)}
            ref={movingWindowRef} className={\`\${props.className} movingWindow \${activeLink === '' ? 'active' : ''}\`}>
            {children}
        </div>
    );
};

type DropdownProps = {
    linkName: string;
} & HTMLAttributes<HTMLElement>;

const Dropdown: React.FC<DropdownProps> = ({ linkName, children, ...props }) => {


    const { activeLink, setActiveLink, setLinkDimensions, setDropdownDimensions } = useNavigationMenu();
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            setDropdownDimensions((prevObj: Record<string, any>) => ({
                ...prevObj,
                [linkName]: buildObject(ref)
            }));
        }
    }, [linkName, setLinkDimensions]);

    return (
        <div
            {...props}
            ref={ref}
            className={\`\${props.className} navigationMenuDropdown \${activeLink === linkName ? 'active' : ''}\`}
            onMouseOver={() => { if (activeLink === linkName) setActiveLink(linkName) }}
            onMouseLeave={() => setActiveLink('')}
        >
            {children}
        </div>
    );
};


NavigationMenu.Links = Links;
NavigationMenu.Link = Link;
NavigationMenu.Dropdown = Dropdown;
NavigationMenu.MovingWindow = MovingWindow;

export default NavigationMenu;`

    const cssCode = `.navigationMenu {
    display: flex;
    flex-direction: column;
    position: relative;
}

.navigationMenuLinks {
    display: flex;
    position: relative;
}

.navigationMenuLink {
    border-top: 10px solid rgba(0, 0, 0, 0);
    border-bottom: 10px solid rgba(0, 0, 0, 0);
    padding: 0 12px;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
    display: flex;
    gap: 6px;
    align-items: center;
    white-space: nowrap;
}

.active.navigationMenuLink,
.navigationMenuLink:hover {
    opacity: .55;
}

.navigationMenuLink:first-of-type {
    padding: 0 12px 0 0;
}

.navigationMenuLink:last-of-type {
    padding: 0 0 0 12px;
}


.navigationMenuDropdown {
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
    background-color: rgb(255, 255, 255);
}

.active.navigationMenuDropdown {
    z-index: 5;
    opacity: 1;
}

.movingWindow {
    border: 1px solid rgb(216, 216, 216);
    background-color: rgb(255, 255, 255);
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
    top: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    z-index: 5000;
}

.active.movingWindow {
    pointer-events: none;
    opacity: 0;
}

/* darkMode */
.darkMode.navigationMenu .navigationMenuDropdown,
.darkMode.navigationMenu .movingWindow {
    background-color: rgb(0, 0, 0);
}

.darkMode.navigationMenu .movingWindow {
    border: 1px solid rgb(68, 68, 68);
    background-color: rgb(0, 0, 0);
}`



    return (
        <React.Fragment>

            <h4>Day 48 / 50</h4>
            <Spacer y={2} />
            <h1>NavigationMenu component</h1>
            <Spacer y={4} />
            <p>The NavigationMenu component is a versatile and customizable navigation solution for React applications. It provides a user-friendly interface with features such as dropdown menus, dynamic moving window highlighting, and support for both light and dark modes, making it a powerful tool for building intuitive navigation systems</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/NavigationMenu' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=jW93ckQQdYY&t=2s' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
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
                    <div className='demoBox' style={{ height: '900px' }}>
                        <NavigationMenu darkMode={isDarkMode}>
                            <NavigationMenu.Links>
                                <NavigationMenu.Link linkName="Home"><h3>Home</h3></NavigationMenu.Link>
                                <NavigationMenu.Link linkName="Products"><h3>Products</h3></NavigationMenu.Link>
                                <NavigationMenu.Link linkName="About Us"><h3>About Us</h3></NavigationMenu.Link>
                                <NavigationMenu.Link linkName="Solutions"><h3>Solutions</h3></NavigationMenu.Link>
                                <NavigationMenu.Link linkName="Pricing"><h3>Pricing</h3></NavigationMenu.Link>
                                <NavigationMenu.Link linkName="Developers"><h3>Developers</h3></NavigationMenu.Link>
                                <NavigationMenu.Link linkName="Services"><h3>Services</h3></NavigationMenu.Link>
                                <NavigationMenu.Link linkName="Contact"><h3>Contact</h3></NavigationMenu.Link>
                            </NavigationMenu.Links>
                            <NavigationMenu.MovingWindow>

                                <NavigationMenu.Dropdown linkName="Solutions">
                                    <div style={{ width: '1000px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '24px', gap: '24px' }}>
                                        <div className='column'>
                                            <h4>Software Solutions</h4>
                                            <p>Explore our latest software offerings designed to streamline your tasks.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Hardware Selection</h4>
                                            <p>Discover a range of high-quality hardware products built to meet your needs.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Accessories Collection</h4>
                                            <p>Enhance your setup with our thoughtfully curated accessories.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Exclusive Deals</h4>
                                            <p>Take advantage of limited-time special offers that we have for you.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Mobile Apps</h4>
                                            <p>Download our mobile apps for on-the-go productivity and entertainment.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Training Resources</h4>
                                            <p>Access training materials to make the most of our products and services.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Customer Support</h4>
                                            <p>Get assistance from our dedicated support team whenever you need it.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Community Forums</h4>
                                            <p>Join discussions and share insights with our community of users.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Software Solutions</h4>
                                            <p>Explore our latest software offerings designed to streamline your tasks.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Hardware Selection</h4>
                                            <p>Discover a range of high-quality hardware products built to meet your needs.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Accessories Collection</h4>
                                            <p>Enhance your setup with our thoughtfully curated accessories.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Exclusive Deals</h4>
                                            <p>Take advantage of limited-time special offers that we have for you.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Mobile Apps</h4>
                                            <p>Download our mobile apps for on-the-go productivity and entertainment.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Training Resources</h4>
                                            <p>Access training materials to make the most of our products and services.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Customer Support</h4>
                                            <p>Get assistance from our dedicated support team whenever you need it.</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Community Forums</h4>
                                            <p>Join discussions and share insights with our community of users.</p>
                                        </div>
                                    </div>
                                </NavigationMenu.Dropdown>

                                <NavigationMenu.Dropdown linkName="Products">
                                    <div style={{ width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '32px', gap: '32px' }}>
                                        <div className='column'>
                                            <h4>Software</h4>
                                            <p>Explore our cutting-edge software solutions</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Hardware</h4>
                                            <p>Discover our high-quality hardware products</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Accessories</h4>
                                            <p>Enhance your experience with our accessories</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Special Offers</h4>
                                            <p>Check out our limited-time special offers</p>
                                        </div>
                                    </div>
                                </NavigationMenu.Dropdown>
                                <NavigationMenu.Dropdown linkName="About Us">
                                    <div style={{ width: '600px', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '32px', gap: '32px' }}>
                                        <div className='column'>
                                            <h4>Innovative Solutions</h4>
                                            <p>Explore our latest groundbreaking software solutions</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Premium Hardware</h4>
                                            <p>Discover our collection of top-tier hardware products</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Complementary Accessories</h4>
                                            <p>Elevate your experience with our range of accessories</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Exclusive Deals</h4>
                                            <p>Take advantage of limited-time special offers</p>
                                        </div>
                                    </div>
                                </NavigationMenu.Dropdown>
                                <NavigationMenu.Dropdown linkName="Pricing">
                                    <div style={{ width: '800px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '24px', gap: '24px' }}>
                                        <div className='column'>
                                            <h4>Software Solutions</h4>
                                            <p>Discover our innovative software solutions tailored to your needs</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Hardware Selection</h4>
                                            <p>Explore our premium hardware products for your technological requirements</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Accessories Collection</h4>
                                            <p>Enhance your setup with our range of high-quality accessories</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Exclusive Deals</h4>
                                            <p>Take advantage of our limited-time special offers and promotions</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Service Packages</h4>
                                            <p>Customized service bundles to provide you with comprehensive solutions</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Support & Maintenance</h4>
                                            <p>Learn about our dedicated support and maintenance options for your products</p>
                                        </div>
                                    </div>
                                </NavigationMenu.Dropdown>
                                <NavigationMenu.Dropdown linkName="Services">
                                    <div style={{ width: '700px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '32px', gap: '32px' }}>
                                        <div className='column'>
                                            <h4>Consulting</h4>
                                            <p>Get expert advice for your business</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Support</h4>
                                            <p>24/7 technical support for our products</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Training</h4>
                                            <p>Enhance your skills with our training programs</p>
                                        </div>
                                        <div className='column'>
                                            <h4>Customization</h4>
                                            <p>Tailor our solutions to meet your needs</p>
                                        </div>
                                    </div>
                                </NavigationMenu.Dropdown>
                            </NavigationMenu.MovingWindow>
                        </NavigationMenu>

                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Expand' darkMode={isDarkMode}>
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

export default NavigationMenuDemo;
