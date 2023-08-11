'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import SearchBar from '@/components/SearchBar/SearchBar';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function SearchBarDemo() {


  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isFullWidth, setIsFullWidth] = useState(false)

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


  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Button variant='secondary' darkMode={isDarkMode} text={isFullWidth ? 'Untoggle full width' : 'Toggle full width'} handleClick={async () => setIsFullWidth(!isFullWidth)} />
      <Tooltip darkMode={isDarkMode} toolTipText='A versatile search bar allowing users to efficiently search through an array of items for quick access and retrieval.'>
        <p>SearchBar Component</p>
      </Tooltip>
      <SearchBar
        placeholder='Search foods'
        fullWidth={isFullWidth}
        darkMode={isDarkMode}
        queries={foodProducts}
        maxHeight='500px'
        handleSelect={(inputValue) => console.log(inputValue)}


      />
    </div>
  );
};