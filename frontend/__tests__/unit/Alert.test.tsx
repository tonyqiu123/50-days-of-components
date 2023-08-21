import React from 'react';
import { render } from '@testing-library/react';
import Alert from '@/components/Alert/Alert';

describe('Alert Component', () => {
    it('should render with default class names', () => {
        const { container } = render(<Alert setShowAlert={() => { }} showAlert={true} />);
        const alertElement = container.firstChild;

        expect(alertElement).toHaveClass('alert');
        expect(alertElement).not.toHaveClass('darkMode');
        expect(alertElement).toHaveClass('showAlert');
    });

    it('should render with dark mode class when darkMode prop is true', () => {
        const { container } = render(<Alert setShowAlert={() => { }} showAlert={true} darkMode={true} />);
        const alertElement = container.firstChild;

        expect(alertElement).toHaveClass('alert');
        expect(alertElement).toHaveClass('darkMode');
        expect(alertElement).toHaveClass('showAlert');
    });

    it('should render with custom additional class name', () => {
        const { container } = render(
            <Alert setShowAlert={() => { }} showAlert={true} className="customClassName" />
        );
        const alertElement = container.firstChild;

        expect(alertElement).toHaveClass('alert');
        expect(alertElement).toHaveClass('showAlert');
        expect(alertElement).toHaveClass('customClassName');
    });

    it('should render with children', () => {
        const { container, getByText } = render(
            <Alert setShowAlert={() => { }} showAlert={true}>
                <span>Test Children</span>
            </Alert>
        );
        const alertElement = container.firstChild;
        const childrenElement = getByText('Test Children');

        expect(alertElement).toContainElement(childrenElement);
    });
});
