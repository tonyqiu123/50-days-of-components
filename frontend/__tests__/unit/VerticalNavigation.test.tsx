import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
    VerticalNavigation,
    VerticalNavigationHeader,
    VerticalNavigationLink,
} from '@/components/VerticalNavigation/VerticalNavigation'; // Adjust the import path as needed

describe('VerticalNavigation', () => {
    it('renders with default classNames', () => {
        const { container } = render(
            <VerticalNavigation selected="home" setSelected={() => { }}>
                <div>Child content</div>
            </VerticalNavigation>
        );
        const navigation = container.querySelector('.verticalNavigation');
        expect(navigation).toBeInTheDocument();
        expect(navigation).not.toHaveClass('darkMode');
    });

    it('renders with darkMode classNames', () => {
        const { container } = render(
            <VerticalNavigation selected="home" setSelected={() => { }} darkMode>
                <div>Child content</div>
            </VerticalNavigation>
        );
        const navigation = container.querySelector('.verticalNavigation');
        expect(navigation).toHaveClass('darkMode');
    });
});

describe('VerticalNavigationLink', () => {
    it('renders with default classNames', () => {
        const { getByText } = render(
            <VerticalNavigation selected="home" setSelected={() => { }}>
                <VerticalNavigationLink text="home" />
            </VerticalNavigation>
        );
        const link = getByText('home');
        expect(link).toBeInTheDocument();
        expect(link).toHaveClass('verticalNavigationLink');
        expect(link).toHaveClass('selected');
    });

    it('renders with selected classNames', () => {
        const { getByText } = render(
            <VerticalNavigation selected="home" setSelected={() => { }}>
                <VerticalNavigationLink text="home" />
            </VerticalNavigation>
        );
        const link = getByText('home');
        fireEvent.click(link);
        expect(link).toHaveClass('selected');
    });
});

// Similar tests can be written for VerticalNavigationHeader component
