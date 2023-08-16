import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarRating from '@/components/StarRating/StarRating';

describe('StarRating Component', () => {
  it('renders with specified totalStars', () => {
    const { container } = render(<StarRating totalStars={3} />);
    const stars = container.querySelectorAll('.star');
    expect(stars).toHaveLength(3);
  });

  it('calls handleClick when a star is clicked', () => {
    const handleClick = jest.fn();
    const { container } = render(<StarRating totalStars={5} handleClick={handleClick} />);
    const stars = container.querySelectorAll('.star');
    fireEvent.click(stars[2]);
    expect(handleClick).toHaveBeenCalledWith(3);
  });

  it('fills stars on hover', () => {
    const { container } = render(<StarRating totalStars={5} />);
    const stars = container.querySelectorAll('.star');
    fireEvent.mouseEnter(stars[3]);
    for (let i = 0; i <= 3; i++) {
      expect(stars[i]).toHaveClass('filled');
    }
    for (let i = 4; i >= 3; i--) {
      fireEvent.mouseLeave(stars[i]);
      expect(stars[i]).not.toHaveClass('filled');
    }
  });

  // Add more tests as needed
});
