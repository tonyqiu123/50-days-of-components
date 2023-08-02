<!-- Button Component -->
<h2>Day 1/100</h2>

<p>July 7th 2023 / October 16th, 2023</p>

<h2>Button Component</h2>

<img src='https://cdn.discordapp.com/attachments/715319623637270638/1133486849621512283/image.png'/>

<p>A versatile button component that can be easily integrated into any project. The component offers various functionalities and customization options, making it suitable for virtually all use cases.</p>

<h3>Functionalities</h3>

<p>The button component provides the following functionalities:</p>

<ul>
  <li>Different visual styles: Choose from primary, secondary, success, destructive, cancel, disabled, and warning styles to match your design requirements.</li>
  <li>Loading animation: While the button executes an action, it displays a loading animation to provide visual feedback to the user.</li>
  <li>Customizable error and success handling: Developers can define their own error and success handling logic by utilizing the <code>handleClick</code> prop.</li>
  <li>Flexible width options: The button can be configured to have either a full width or hug-content width, depending on the layout requirements.</li>
</ul>

<h3>Props</h3>

<p>The button component accepts the following props:</p>

<dl>
  <dt><code>text</code> (string)</dt>
  <dd>The text to be displayed on the button.</dd>
  <dt><code>variant</code> (optional)</dt>
  <dd>The visual variant of the button. Available options include 'primary', 'destructive', 'cancel', 'warning', and 'success'.</dd>
  <dt><code>isDisabled</code> (optional)</dt>
  <dd>Set this prop to <code>true</code> to disable the button.</dd>
  <dt><code>isFullWidth</code> (optional)</dt>
  <dd>Set this prop to <code>true</code> to make the button occupy the full width of its container.</dd>
  <dt><code>handleClick</code> (optional)</dt>
  <dd>A function that will be executed when the button is clicked. The function should return a promise with a <code>void</code> result.</dd>
</dl>

<h3>Implementation Details</h3>

<p>To customize the error and success behavior, simply provide your own logic within the <code>handleClick</code> function prop. Here's an example:</p>

<pre><code>&lt;script type="text/javascript"&gt;
  function handleClick() {
    try {
      // Simulating an asynchronous action
      setTimeout(function() {
        window.location.href = '/new-url';
      }, 2000);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., displaying an error message
    }
  }
&lt;/script&gt;

&lt;div&gt;
  &lt;button onclick="handleClick()"&gt;Submit&lt;/button&gt;
&lt;/div&gt;
</code></pre>

<p>Please note that the code provided is a simplified example and may require additional setup and styling in a real application.</p>

<p>If you have any further questions or need additional assistance, please let me know!</p>
