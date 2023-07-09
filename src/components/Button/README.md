# Day 1/100: 
July 8th, 2023 / October 16th, 2023


## Button Component

![Button Demo Video](/button-demo.mp4)

A versatile button component that can be easily integrated into any project. The component offers various functionalities and customization options, making it suitable for virtually all use cases.

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
import Button from './components/Button' 

const handleClick = async () => {
    try {
        // Simulating an asynchronous action
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        window.location.href = '/new-url';
    } catch (error) {
        console.error(error);
        // Handle error, e.g., displaying an error message
    }   
}

<div>
    <Button
        text="Submit"
        variant="primary"
        handleClick={handleClick}
        isFullWidth={true}
    />
</div>
```

### Button Code

```jsx
import React, { ButtonHTMLAttributes, useState } from 'react';

type ButtonProps = {
    text: string;
    variant?: 'primary' | 'destructive' | 'cancel' | 'warning' | 'success';
    isDisabled?: boolean;
    isFullWidth?: boolean;
    handleClick?: () => Promise<void>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ text, variant, isDisabled = false, isFullWidth = false, handleClick,
    ...props
}) => {

    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        if (!isDisabled && !isLoading && handleClick) {
            setIsLoading(true);
            try {
                await handleClick();
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        }
    };

    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            className={`${variant ? variant : ''} ${isFullWidth ? 'full-width' : ''} ${isLoading ? 'loading' : ''}`}
            {...props}
        >
            {text}
            
        </button>
    );
};

export default Button;


