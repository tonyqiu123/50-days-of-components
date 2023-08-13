import React from 'react';
import { render } from '@testing-library/react';
import Separator from '@/components/Separator/Separator';

describe('Separator Component', () => {
  it('renders vertical separator', () => {
    const { container } = render(<Separator orientation="v" />);
    const separatorElement = container.querySelector('.separator.v');
    expect(separatorElement).toBeInTheDocument();
  });

  it('renders horizontal separator', () => {
    const { container } = render(<Separator orientation="h" />);
    const separatorElement = container.querySelector('.separator.h');
    expect(separatorElement).toBeInTheDocument();
  });

  it('renders with dark mode class', () => {
    const { container } = render(<Separator orientation="v" darkMode />);
    const separatorElement = container.querySelector('.separator.darkMode');
    expect(separatorElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
