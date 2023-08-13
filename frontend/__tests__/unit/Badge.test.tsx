import React from 'react';
import { render } from '@testing-library/react';
import Badge from '@/components/Badge/Badge';

describe('Badge Component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Badge text="Default Badge" variant="default" />);
    const badgeElement = getByText('Default Badge');
    
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge');
    expect(badgeElement).toHaveClass('default');
  });

  it('renders with secondary variant', () => {
    const { getByText } = render(<Badge text="Secondary Badge" variant="secondary" />);
    const badgeElement = getByText('Secondary Badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge');
    expect(badgeElement).toHaveClass('secondary');
  });

  it('renders with dark mode', () => {
    const { getByText } = render(<Badge text="Dark Mode Badge" darkMode variant="default" />);
    const badgeElement = getByText('Dark Mode Badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge');
    expect(badgeElement).toHaveClass('darkMode');
    expect(badgeElement).toHaveClass('default');
  });
  
  // Add more test cases as needed
});
