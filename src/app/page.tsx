'use client'

import React from 'react';
import NavBar from '@/components/NavBar/NavBar';


export default function Home() {
  const linksData = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Products',
      dropdown: {
        links: [
          {
            title: 'Clothing',
            url: '/',
            image: 'https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png',
          },
          {
            title: 'Accessories',
            url: '/',
            image: 'https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png',
          },
        ],
      },
    },
    {
      label: 'About Us',
      dropdown: {
        links: [
          {
            title: 'Clothing',
            url: '/',
            image: 'https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png',
          },
          {
            title: 'Accessories',
            url: '/',
            image: 'https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png',
          },
        ],
      },
    },
    {
      label: 'Contact',
      url: '/',
    },
  ];

  const buttonsData = [
    { text: "Button 1", url: "https://example.com/button1" },
    { text: "Button 2", url: "https://example.com/button2" },
  ];
  
 

  return (
    <div className="App">
      <NavBar logo='https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png' linksData={linksData} buttonsData={buttonsData} />
      {/* Rest of your app */}
    </div>
  );
};
