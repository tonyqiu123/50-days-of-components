<!-- Select Dropdown Component -->
<h2>Day 2/100</h2>

<p>July 8th 2023 / October 16th, 2023</p>

<h2>Select Dropdown Component</h2>

<img src="https://cdn.discordapp.com/attachments/715319623637270638/1133487035223654582/image.png" alt="dropbown demo" />

<p>A custom select dropdown component that allows users to choose from a list of options. The component provides a dropdown menu with a stylish arrow icon and supports customization of its appearance.</p>

<h3>Usage</h3>
<p>To use the Select Dropdown component, follow these steps:</p>
<ol>
  <li>Import the component into your React project.</li>
  <li>Define an array of values that will be displayed as options in the dropdown.</li>
  <li>Provide a callback function, <code>handleSetState</code>, which will be invoked when the selected value changes. The selected value will be passed as an argument to this function.</li>
  <li>Optionally, you can specify a label to display above the dropdown.</li>
</ol>

<h3>Example</h3>
<p>Here's an example of how to use the Select Dropdown component:</p>
<pre><code>import React, { ChangeEvent, useState } from 'react';
import './Dropdown.css';

interface DropdownProps {
  handleSetState: (value: any) => void;
  values: any[];
  label?: string;
}

const Dropdown: React.FC&lt;DropdownProps&gt; = ({ handleSetState, values, label }) => {
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleChange = (e: ChangeEvent&lt;HTMLSelectElement&gt;) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    handleSetState(newValue);
  };

  return (
    &lt;&gt;
      {label &amp;&amp; &lt;p&gt;{label}&lt;/p&gt;}
      &lt;select value={selectedValue} onChange={handleChange}&gt;
        {values.map((value) =&gt; {
          return &lt;option key={value} value={value}&gt;{value}&lt;/option&gt;
        })}
      &lt;/select&gt;
    &lt;/&gt;
  );
};

export default Dropdown;
</code></pre>

<h3>Styling</h3>
<p>The Select Dropdown component comes with default styling, but you can customize its appearance by modifying the CSS. The following CSS classes are available for styling:</p>
<ul>
  <li><code>select</code>: Represents the select element. You can apply styles to this class to change the appearance of the dropdown menu.</li>
  <li><code>option</code>: Represents the options within the dropdown. You can apply styles to this class to modify the appearance of the individual options.</li>
</ul>

<p>Here's an example of how to style the dropdown arrow:</p>
<pre><code>.select {
  /* Other styles */
  background-image: url('/DropDown/dropDownIcon.svg');
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
  background-size: 12px;
}
</code></pre>

<p>Feel free to adjust the background image and positioning to achieve the desired look for the dropdown arrow.</p>

<p>If you have any further questions or need additional assistance, please let me know!</p>
