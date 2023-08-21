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
import SearchBar from '@/components/SearchBar/SearchBar';

const CarouselDemo: React.FC = () => {

  const { isDarkMode, setIsDarkMode } = useGlobal();

  const [isFullWidth, setIsFullWidth] = useState(false)
  const [search, setSearch] = useState<string>('')

  const foodProducts = [
    "Chocolate Chip Cookies",
    "Strawberry Jam",
    "Chicken Noodle Soup",
    "Vanilla Ice Cream",
    "Blueberry Pancakes",
    "Caesar Salad Dressing",
    "BBQ Sauce",
    "Spaghetti Bolognese",
    "Sourdough Bread",
    "Guacamole",
    "Apple Pie",
    "Beef Stew",
    "Peanut Butter",
    "Orange Juice",
    "Tomato Soup",
    "Greek Yogurt",
    "Cinnamon Rolls",
    "Macaroni and Cheese",
    "Honey Mustard",
    "Pineapple Pizza",
    "Chocolate Milkshake",
    "Fish and Chips",
    "French Onion Soup",
    "Buffalo Wings",
    "Mango Salsa",
    "Garlic Bread",
    "Chicken Alfredo",
    "Raspberry Cheesecake",
    "Caesar Salad",
    "Maple Syrup",
    "Oatmeal Raisin Cookies",
    "Tacos",
    "Mashed Potatoes",
    "Lemonade",
    "Clam Chowder",
    "Chicken Caesar Wrap",
    "Caramel Popcorn",
    "Beef Burrito",
    "Shrimp Scampi",
    "Cheeseburger",
    "Strawberry Shortcake",
    "Nachos",
    "Pumpkin Pie",
    "Chocolate Brownies",
    "Teriyaki Chicken",
    "Caesar Pasta Salad",
    "Sweet and Sour Pork",
    "Lobster Bisque",
    "Blueberry Muffins",
    "Chicken Quesadilla"
  ];


  const reactCode = `<SearchBar
  search={search}
  setSearch={setSearch}
  placeholder='Search foods'
  fullWidth={isFullWidth}
  darkMode={isDarkMode}
  queries={foodProducts}
  maxHeight='500px'
/>`;



  return (
    <React.Fragment >

      <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
      <h1>SearchBar component</h1>
      <Tabs darkMode={isDarkMode}>

        <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
        <TabsTrigger value='code'><p>Code</p></TabsTrigger>

        <TabsContent value='preview1'>
          <div className='demoBox'>
            <SearchBar
              search={search}
              setSearch={setSearch}
              placeholder='Search foods'
              fullWidth={isFullWidth}
              darkMode={isDarkMode}
              queries={foodProducts}
              maxHeight='500px'
            />
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