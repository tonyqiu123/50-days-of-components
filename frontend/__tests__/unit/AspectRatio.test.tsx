import React from 'react';
import { render, screen } from '@testing-library/react';
import AspectRatio from '@/components/AspectRatio/AspectRatio';

describe('AspectRatio Component', () => {
    it('renders children', () => {
        render(<AspectRatio ratio={16 / 9}>Child Content</AspectRatio>);
        const childElement = screen.getByText('Child Content');
        expect(childElement).toBeInTheDocument();
    });

    it('applies provided style', () => {
        render(<AspectRatio ratio={16 / 9} style={{ color: 'red' }} data-testid="aspect-ratio">
             Child Content
        </AspectRatio>);
        const aspectRatioElement = screen.getByTestId('aspect-ratio');
        expect(aspectRatioElement).toHaveStyle('color: red');
    });

    it('calculates aspect ratio styling', () => {
        render(<AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
             Child Content
        </AspectRatio>);
        const aspectRatioElement = screen.getByTestId('aspect-ratio');
        expect(aspectRatioElement).toHaveStyle('padding-top: 56.25%');
    });

    it('sets maximum height and width', () => {
        render(<AspectRatio data-testid="aspect-ratio" ratio={16 / 9} maxHeight={300}>
             Child Content
        </AspectRatio>);
        const aspectRatioElement = screen.getByTestId('aspect-ratio');
        expect(aspectRatioElement).toHaveStyle('max-width: 533.3333333333333px');
        expect(aspectRatioElement).toHaveStyle('max-height: 300px');
    });


});
