import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';




describe('Breadcrumb component', () => {
    let originalWindowLocation = window.location;
    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            enumerable: true,
            value: new URL(window.location.href),
        });
    });

    afterEach(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            enumerable: true,
            value: originalWindowLocation,
        });
    });



    it('renders correct breadcrumb segments', () => {
        window.location.href = 'http://localhost/home/products/category/item';
        const { container } = render(<Breadcrumb start={2} end={7} />);
        const breadcrumbItems = container.querySelectorAll('.breadcrumbItem');
        expect(breadcrumbItems.length).toBe(5);
        expect(breadcrumbItems[0]).toHaveTextContent('localhost')
        expect(breadcrumbItems[1]).toHaveTextContent('home')
        expect(breadcrumbItems[2]).toHaveTextContent('products')
        expect(breadcrumbItems[3]).toHaveTextContent('category')
    });

    it('renders with custom start index', () => {
        const { container } = render(<Breadcrumb start={1} />);
        const breadcrumbItems = container.querySelectorAll('.breadcrumbItem');
        expect(breadcrumbItems.length).toBeGreaterThanOrEqual(1);
    });

    it('renders with custom end index', () => {
        const { container } = render(<Breadcrumb end={3} />);
        const breadcrumbItems = container.querySelectorAll('.breadcrumbItem');
        expect(breadcrumbItems.length).toBeLessThanOrEqual(3);
    });

    it('renders with custom CSS classes', () => {
        const { container } = render(<Breadcrumb className="custom-breadcrumb" />);
        const breadcrumb = container.querySelector('.custom-breadcrumb');
        expect(breadcrumb).toBeInTheDocument();
    });

    // Add more test cases as needed
});
