import React from 'react';
import { render } from '@testing-library/react';
import DataIndicator from '@/components/DataIndicator/DataIndicator';

describe('DataIndicator component', () => {
  it('renders with neutral difference class', () => {
    const { container } = render(<DataIndicator currentData={50} previousData={50} />);
    const differenceElement = container.querySelector('.difference');

    expect(differenceElement).toHaveClass('neutral');
  });

  it('renders with positive difference class', () => {
    const { container } = render(<DataIndicator currentData={60} previousData={50} />);
    const differenceElement = container.querySelector('.difference');

    expect(differenceElement).toHaveClass('positive');
  });

  it('renders with negative difference class', () => {
    const { container } = render(<DataIndicator currentData={40} previousData={50} />);
    const differenceElement = container.querySelector('.difference');

    expect(differenceElement).toHaveClass('negative');
  });
});
