import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import Switch from '@/components/Switch/Switch';

describe('Switch component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Switch isChecked={false} setIsChecked={() => {}} />);
        expect(container).toBeInTheDocument();
    });

    it('renders with dark mode class when darkMode prop is true', () => {
        const { container } = render(<Switch isChecked={false} setIsChecked={() => {}} darkMode />);
        expect(container.firstChild).toHaveClass('darkMode');
    });

    it('renders checked class when isChecked prop is true', () => {
        const { container } = render(<Switch isChecked={true} setIsChecked={() => {}} />);
        expect(container.firstChild).toHaveClass('checked');
    });

    it('calls setIsChecked when clicked', () => {
        const setIsCheckedMock = jest.fn();
        const { container } = render(<Switch isChecked={false} setIsChecked={setIsCheckedMock} />);

        fireEvent.click(container.firstChild);
        expect(setIsCheckedMock).toHaveBeenCalledTimes(1);
    });
});
