import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import Button from '@/components/Button/Button';

describe('Button component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Button text="Click me" variant="primary" />);
        expect(container).toBeInTheDocument();
    });

    it('renders with the correct text', () => {
        const buttonText = 'Click me';
        const { getByText } = render(<Button text={buttonText} variant="primary" />);
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('renders with the primary variant class', () => {
        const { container } = render(<Button text="Click me" variant="primary" />);
        expect(container.firstChild).toHaveClass('primary');
    });

    it('disables the button when isDisabled is true', () => {
        const { container } = render(<Button text="Click me" variant="primary" isDisabled />);
        expect(container.firstChild).toBeDisabled();
    });

    it('calls handleClick when clicked and is not disabled', async () => {
        const handleClickMock = jest.fn(() => Promise.resolve());
        const { getByText } = render(<Button text="Click me" variant="primary" handleClick={handleClickMock} />);
        fireEvent.click(getByText('Click me'));
        await waitFor(() => expect(handleClickMock).toHaveBeenCalledTimes(1));
    });
});
