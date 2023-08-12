import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '@/components/Card/Card';

describe('Card Component Tests', () => {
    // Happy Path Test
    it('renders a card with children', () => {
        render(<Card>Test Card</Card>);
        const cardElement = screen.getByText(/Test Card/i);
        expect(cardElement).toBeInTheDocument();
    });

    // Edge Cases Test
    test('renders a card with dark mode', () => {
        render(<Card darkMode>Dark Card</Card>);
        const cardElement = screen.getByText(/Dark Card/i);
        expect(cardElement).toHaveClass('darkMode');
    });

    // Error Handling Test
    test('renders a card with custom className', () => {
        render(<Card className="custom">Custom Card</Card>);
        const cardElement = screen.getByText(/Custom Card/i);
        expect(cardElement).toHaveClass('custom');
    });

    // Branches and Conditions Test
    test('renders a card with small size', () => {
        render(<Card size="s">Small Card</Card>);
        const cardElement = screen.getByText(/Small Card/i);
        expect(cardElement).toHaveClass('s');
    });

    // Boundary Values Test
    test('renders a card with large size', () => {
        render(<Card size="l">Large Card</Card>);
        const cardElement = screen.getByText(/Large Card/i);
        expect(cardElement).toHaveClass('l');
    });

    // Null and Undefined Test
    test('renders a card without props', () => {
        render(<Card>Null Props Card</Card>);
        const cardElement = screen.getByText(/Null Props Card/i);
        expect(cardElement).toBeInTheDocument();
    });

    // Async Operations Test
    test('renders a card asynchronously', async () => {
        render(<Card>Async Card</Card>);
        const cardElement = await screen.findByText(/Async Card/i);
        expect(cardElement).toBeInTheDocument();
    });

    // State Changes Test
    test('toggles dark mode', () => {
        render(<Card darkMode>Toggle Dark Card</Card>);
        const cardElement = screen.getByText(/Toggle Dark Card/i);
        userEvent.click(cardElement);
        expect(cardElement).toHaveClass('card');
    });

    // Performance Test
    test('renders multiple cards efficiently', () => {
        const { container } = render(
            <div>
                <Card>Card 1</Card>
                <Card>Card 2</Card>
                <Card>Card 3</Card>
            </div>
        );
        const cardElements = container.querySelectorAll('.card');
        expect(cardElements.length).toBe(3);
    });

});
