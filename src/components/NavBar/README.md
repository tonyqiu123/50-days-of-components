<!-- NavBar Component -->
<h2>Day 3/100</h2>

<p>July 9th 2023 / October 16th, 2023</p>
<h2>NavBar Component</h2>
<img src="/public/navbar.png" alt="navbar demo" />
<p>A navigation bar (NavBar) component that displays a logo, links, and buttons. The NavBar component is customizable and allows for the inclusion of dropdown menus within the links.</p>
<h3>Usage</h3>
<p>To use the NavBar component, follow these steps:</p>
<ol>
  <li>Import the component into your React project.</li>
  <li>Define the required data for the NavBar:</li>
  <ul>
    <li><code>logo</code>: The image source for the logo.</li>
    <li><code>linksData</code>: An array of objects representing the links in the navigation bar. Each object contains the following properties:</li>
    <ul>
      <li><code>label</code>: The label for the link.</li>
      <li><code>dropdown</code> (optional): An object representing the dropdown menu associated with the link. The dropdown object contains the following properties:</li>
      <ul>
        <li><code>links</code>: An array of objects representing the links within the dropdown menu. Each object contains the following properties:</li>
        <ul>
          <li><code>title</code>: The title for the link.</li>
          <li><code>url</code>: The URL for the link.</li>
          <li><code>image</code>: The image source for the link.</li>
        </ul>
      </ul>
      <li><code>url</code> (optional): The URL for the link. If a dropdown menu is defined, this property will be ignored.</li>
    </ul>
    <li><code>buttonsData</code>: An array of objects representing the buttons in the navigation bar. Each object contains the following properties:</li>
    <ul>
      <li><code>text</code>: The text content of the button.</li>
      <li><code>url</code>: The URL to navigate to when the button is clicked.</li>
    </ul>
  </ul>
</ol>
<h3>Example</h3>
<p>Here's an example of how to use the NavBar component:</p>
<pre><code>import React from 'react';
import './NavBar.css';
import Button from '@/components/Button/Button';
type LinkItem = {
title: string;
url: string;
image: any;
};

type DropdownMenu = {
links: LinkItem[];
};

type NavBarLink = {
label: string;
dropdown?: DropdownMenu;
url?: string;
};

type NavBarButton = {
text: string;
url: string;
};

type NavBarProps = {
logo: any;
linksData: NavBarLink[];
buttonsData: NavBarButton[];
};

const NavBar: React.FC<NavBarProps> = ({ logo, linksData, buttonsData }) => {
// Implementation goes here
};

export default NavBar;
</code></pre>

<h3>Styling</h3>
<p>The NavBar component comes with default styling, but you can customize its appearance by modifying the CSS. You can apply styles to the following classes:</p>
<ul>
  <li><code>navbar</code>: Represents the overall navbar container.</li>
  <li><code>navbar-logo</code>: Represents the logo element.</li>
  <li><code>navbar-links</code>: Represents the container for the links.</li>
  <li><code>navbar-link</code>: Represents an individual link.</li>
  <li><code>navbar-label</code>: Represents the label within a link.</li>
  <li><code>navbar-dropdown</code>: Represents the container for a dropdown menu.</li>
  <li><code>navbar-dropdown-link</code>: Represents an individual link within a dropdown menu.</li>
  <li><code>navbar-buttons</code>: Represents the container for the buttons.</li>
</ul>
<p>Feel free to modify the styles of these classes to achieve the desired look for your navigation bar.</p>
<p>If you have any further questions or need additional assistance, please let me know!</p>