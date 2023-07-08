# Project Name

## Button Component

A versatile button component that can be easily integrated into any project. The component offers various functionalities and customization options, making it suitable for a wide range of use cases.

### Functionalities

The button component provides the following functionalities:

- Different visual styles: Choose from primary, secondary, success, destructive, cancel, disabled, and warning styles to match your design requirements.
- Loading animation: While the button executes an action, it displays a loading animation to provide visual feedback to the user.
- Customizable error and success handling: Developers can define their own error and success handling logic by utilizing the `handleClick` prop.
- Flexible width options: The button can be configured to have either a full width or hug-content width, depending on the layout requirements.

### Props

The button component accepts the following props:

- `text` (string): The text to be displayed on the button.
- `variant` (optional): The visual variant of the button. Available options include 'primary', 'destructive', 'cancel', 'warning', and 'success'.
- `isDisabled` (optional): Set this prop to `true` to disable the button.
- `isFullWidth` (optional): Set this prop to `true` to make the button occupy the full width of its container.
- `handleClick` (optional): A function that will be executed when the button is clicked. The function should return a promise with a `void` result.

### Implementation Details

To customize the error and success behavior, simply provide your own logic within the `handleClick` function prop. Here's an example:

```jsx
const exampleOnClick = async () => {
    try {
        await fetch(url);
        // Handle successful execution, e.g., redirecting the user
    } catch(error) {
        console.error(error);
    }
};
