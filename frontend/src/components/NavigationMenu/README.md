# Day 48 / 50

August 24th / October 16th

# NavigationMenu
<a href="https://youtu.be/jW93ckQQdYY" target="_blank">Watch live demo on youtube</a>

<a href="https:/ / 50daysofcomponents.netlify.app/NavigationMenu" target="_blank">Demo it yourself</a>

<a href="https:/ / 50daysofcomponents.netlify.app/NavigationMenu" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1144437659834523668/image.png"/></a>  

## Description 

###### The NavigationMenu component is a versatile and customizable navigation solution for React applications. It provides a user-friendly interface with features such as dropdown menus, dynamic moving window highlighting, and support for both light and dark modes, making it a powerful tool for building intuitive navigation systems


A production-ready, usable-in-a-YC-backed-startup's-landing-page, bug-free navigation menu. Took 10 hours to perfect. I appreciate feedback. Enjoy.

## Installation 

To use the NavigationMenu component in your project, follow these steps:

1. Create a new folder called 'NavigationMenu' in your project's components directory.
2. Copy the `NavigationMenu.tsx` and `NavigationMenu.css` file into the newly created 'NavigationMenu' folder.

## Props 
### NavigationMenu

### NavigationMenu
`darkMode` (optional boolean): Determines whether the navigation menu should be displayed in dark mode.

### NavigationMenu.Item
`itemName` (required string): Specifies the name of the navigation menu item. Used to associate with dropdowns.
All HTMLAttributes: You can pass any valid HTML attribute to customize the behavior and appearance of the component. For example, className, style, onClick, etc.

### NavigationMenu.Items
All HTMLAttributes: You can pass any valid HTML attribute to customize the behavior and appearance of the component. For example, className, style, onClick, etc.

### NavigationMenu.Dropdown
`itemName` (required string): Specifies the name of the associated navigation menu item.
All HTMLAttributes: You can pass any valid HTML attribute to customize the behavior and appearance of the component. For example, className, style, onClick, etc.

### NavigationMenu.MovingWindow
All HTMLAttributes: You can pass any valid HTML attribute to customize the behavior and appearance of the component. For example, className, style, onClick, etc.

## Example Usage
### page.tsx
```jsx
<NavigationMenu darkMode={isDarkMode}>
    <NavigationMenu.Links>
        <NavigationMenu.Link linkName="Products"><p style={{ fontWeight: 'bold', fontSize: '18px' }}>Products</p></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Solutions"><p style={{ fontWeight: 'bold', fontSize: '18px' }}>Solutions</p></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Developers"><p style={{ fontWeight: 'bold', fontSize: '18px' }}>Developers</p></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Resources"><p style={{ fontWeight: 'bold', fontSize: '18px' }}>Resources</p></NavigationMenu.Link>
        <NavigationMenu.Link linkName="Pricing"><a href="https://www.youtube.com/channel/UC-eVD85P5uhqs5s4kSDx05g" target="__blank" style={{ fontWeight: 'bold', fontSize: '18px' }}>Pricing</a></NavigationMenu.Link>
    </NavigationMenu.Links>
    <NavigationMenu.MovingWindow className='navigationMenuMovingWindowDemo'>
        <NavigationMenu.Dropdown linkName="Products">
            <div className='row' style={{ width: '1000px', padding: '8px' }}>

                <div className='column' style={{ width: '400px', padding: '12px' }}>
                    <a style={{ padding: '16px', gap: '4px' }} className='column'>
                        <h4>Secure Transactions</h4>
                        <p>Safely process payments online, in-store, or on your platform.</p>
                    </a>
                    <a style={{ padding: '16px', gap: '4px' }} className='column'>
                        <h4>Seamless Payments</h4>
                        <p>Effortlessly accept payments online, in person, or on your platform.</p>
                    </a>
                    <a style={{ padding: '16px', gap: '4px' }} className='column'>
                        <h4>Versatile Payment Solutions</h4>
                        <p>Adaptable payment options for online, in-person, or platform transactions.</p>
                    </a>
                </div>
                <div style={{ width: '600px', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '24px', gap: '24px' }}>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Payments</h4>
                        <p>Process Payments</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Transactions</h4>
                        <p>View Transaction History</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Customers</h4>
                        <p>Manage Customer Profiles</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Invoices</h4>
                        <p>Generate and Send Invoices</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Subscriptions</h4>
                        <p>Manage Subscription Plans</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Connect</h4>
                        <p>Integrate with Stripe Connect</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Payouts</h4>
                        <p>Track Payouts and Transfers</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Radar</h4>
                        <p>Fraud Detection and Prevention</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Settings</h4>
                        <p>Configure Account Settings</p>
                    </a>
                    <a className='column' style={{ gap: '4px' }}>
                        <h4>Help</h4>
                        <p>Get Assistance and Support</p>
                    </a>

                </div>
            </div>
        </NavigationMenu.Dropdown>

        <NavigationMenu.Dropdown linkName="Solutions">
            <div style={{ width: '800px', padding: '40px', gap: '40px' }} className='column'>
                <div className='column' style={{ gap: '16px' }}>
                    <h4>USE CASES</h4>
                    <div style={{ gap: '8px', display: 'grid', gridTemplateColumns: ' 1fr 1fr' }}>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Enterprises</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Platforms</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Saas</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Ecommerce</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Creator Economy</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Marketplaces</h4>
                        </a>
                    </div>
                </div>

                <div className='column' style={{ gap: '16px' }}>
                    <h4>INTEGRATIONS AND CUSTOM SOLUTIONS</h4>
                    <div style={{ gap: '8px', display: 'grid', gridTemplateColumns: ' 1fr 1fr' }}>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Enterprises</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Platforms</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Saas</h4>
                        </a>
                        <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                            <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                            <h4>Ecommerce</h4>
                        </a>
                    </div>
                </div>
            </div>
        </NavigationMenu.Dropdown>

        <NavigationMenu.Dropdown linkName="Developers">
            <div style={{ width: '800px', padding: '40px', gap: '48px' }} className='column'>
                <div className='column' style={{ gap: '32px' }}>
                    <div className='column' style={{ gap: '4px' }}>
                        <h4>Documentation</h4>
                        <p>Start integrating Stripe&apos;s products and tools</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div className='column' style={{ gap: '8px' }}>
                            <h4>GET STARTED</h4>
                            <a>Prebuilt checkout</a>
                            <a>Libraries and SDKs</a>
                            <a>Plugins</a>
                            <a>Code samples</a>
                        </div>
                        <div className='column' style={{ gap: '8px' }}>
                            <h4>GUIDES</h4>
                            <a>Accept online payments</a>
                            <a>Manage Subscriptions</a>
                            <a>Send payments</a>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: '1fr 1fr' }}>
                    <a><h4>Full API Reference</h4></a>
                    <a><h4>API Changelog</h4></a>
                    <a><h4>API status</h4></a>
                    <a><h4>Build a Stripe app</h4></a>
                </div>
            </div>
        </NavigationMenu.Dropdown>

        <NavigationMenu.Dropdown linkName="Resources">
            <div className='column' style={{ width: '800px', padding: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '24px' }}>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', backgroundColor: `${isDarkMode ? '#313131' : '#f3f3f3'}`, padding: '24px' }}>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                    <a className='row' style={{ alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: 'grey', borderRadius: '50%', height: '14px', width: '14px' }}></div>
                        <h4>Enterprises</h4>
                    </a>
                </div>
            </div>
        </NavigationMenu.Dropdown>

    </NavigationMenu.MovingWindow>
</NavigationMenu>
```

## Prerequisites
This component requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used for this component:
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"