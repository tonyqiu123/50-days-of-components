"use client"

import { NavBar, NavBarLeft, NavBarRight } from '@/components/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import { SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import ScrollArea from '@/components/ScrollArea/ScrollArea'
import { VerticalNavigation, VerticalNavigationHeader, VerticalNavigationLink } from '@/components/VerticalNavigation/VerticalNavigation'
import Separator from '@/components/Separator/Separator'
import Modal from '@/components/Modal/Modal'
import Button from '@/components/Button/Button'
import { Command, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/Command/Command'
import { useRouter } from 'next/navigation';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu'
import Spacer from '@/components/Spacer/Spacer'
import Script from 'next/script'

type GlobalContextType = {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<SetStateAction<boolean>>;
}
const GlobalContext = createContext<GlobalContextType>({
  isDarkMode: false,
  setIsDarkMode: () => { },
});
export const useGlobal = () => useContext(GlobalContext);

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children, }: { children: React.ReactNode }) {

  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selected, setSelected] = useState<string>('Accordion')
  const [showSearchComponents, setShowSearchComponents] = useState<boolean>(false)

  const components = [
    'Accordion',
    'Alert',
    'AspectRatio',
    'Avatar',
    'Backdrop',
    'Badge',
    'Breadcrumb',
    'Button',
    'Card',
    'Carousel',
    'Checkbox',
    'CodeEditor',
    'Combobox',
    'Command',
    'Counter',
    'DataIndicator',
    'DataTable',
    'DragNDrop',
    'Drawer',
    'Expandable',
    'HoverCard',
    'Icon',
    'Input',
    'Modal',
    'MultiSelect',
    'NavBar',
    'NavigationMenu',
    'OutsideClick',
    'Pagination',
    'Popover',
    'PrettyCode',
    'ScrollArea',
    'ScrollIndicator',
    'SearchBar',
    'Select',
    'Separator',
    'Sheet',
    'ShowMore',
    'Skeleton',
    'Slider',
    'StarRating',
    'Swipeable',
    'Switch',
    'Table',
    'Tabs',
    'TextArea',
    'Toast',
    'Tooltip',
    'VerticalNavigation'
  ];

  const router = useRouter();

  return (
    <html lang="en">
      <Script src="https://web-analytics-83e1.vercel.app/tracker.js" />
      <GlobalContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <body className={`${inter.className} ${isDarkMode ? 'darkMode' : ''}`}>

          <div className='dummy'></div>
          <div className={`page ${isDarkMode ? 'darkMode' : ''}`}>
            <NavBar darkMode={isDarkMode}>
              <NavBarLeft>
                <NavigationMenu style={{ fontSize: '12px' }} darkMode={isDarkMode}>
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
              </NavBarLeft>
              <NavBarRight>
                <Button imageSrc='/Command/search.svg' style={{ boxShadow: '0 0 20px 5px rgba(204, 204, 204, 0.1), -8px 0 6px -8px rgba(32, 32, 32, 0.05)' }} darkMode={isDarkMode} variant='outline' text='Search components...' handleClick={async () => setShowSearchComponents(prev => !prev)} />
                <Modal darkMode={isDarkMode} showModal={showSearchComponents} setShowModal={setShowSearchComponents}>
                  <Command darkMode={isDarkMode}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <ScrollArea darkMode={isDarkMode}>
                        <CommandGroup style={{ maxHeight: '300px' }} heading="Components">
                          {components.map((component, index) => (
                            <CommandItem
                              key={index}
                              text={component}
                            />
                          ))}
                        </CommandGroup>
                      </ScrollArea>
                    </CommandList>
                  </Command>
                </Modal>
                <Icon href='https://github.com/tonyqiu123/50-days-of-components' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon handleClick={() => setIsDarkMode(prevDarkMode => !prevDarkMode)} invert={isDarkMode} image={isDarkMode ? '/Home/moon.svg' : '/Home/sun.svg'} />
              </NavBarRight>
            </NavBar>
            <Spacer y={0} />

            <div style={{ display: 'flex', gap: '48px', width: '100%' }}>

              <ScrollArea darkMode={isDarkMode}>

                <VerticalNavigation className='verticalNavigationDemo' selected={selected} setSelected={setSelected} darkMode={isDarkMode}>
                  <VerticalNavigationHeader text='Components' />
                  {components.map((component, index) => (
                    <VerticalNavigationLink
                      text={component}
                      key={index}
                      onClick={() => {
                        // Construct the new URL based on the component name
                        const newUrl = `/${component.toLowerCase()}`;
                        setSelected(component)
                        // Change the route programmatically
                        router.push(newUrl);
                      }}
                    />
                  ))}
                </VerticalNavigation>
              </ScrollArea>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                {children}
              </div>

            </div>
            <Separator darkMode={isDarkMode} orientation='h' />
            <div className={`footer ${isDarkMode ? 'darkMode' : ''}`}>
              <p>Built by Tony Qiu. The Documentation is available on Github.</p>
            </div>
          </div>
        </body>
      </GlobalContext.Provider>
    </html>
  )
}
