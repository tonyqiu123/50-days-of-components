import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '@/components/Carousel/Carousel';

describe('Carousel Component', () => {
  it('renders with children and arrows', () => {
    const { getByTestId, getAllByTestId } = render(
      <Carousel>
        <div data-testid="child1">Child 1</div>
        <div data-testid="child2">Child 2</div>
        <div data-testid="child3">Child 3</div>
      </Carousel>
    );

    const leftArrow = getByTestId('left-arrow');
    const rightArrow = getByTestId('right-arrow');
    const children = getAllByTestId('carousel-child');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
    expect(children).toHaveLength(3);
  });

  it('clicking left arrow moves to previous child', () => {
    const { getByTestId } = render(
      <Carousel>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Carousel>
    );

    const leftArrow = getByTestId('left-arrow');
    const rightArrow = getByTestId('right-arrow');
    const carouselDots = getByTestId('carousel-dots');
    const children = carouselDots.querySelectorAll('.carouselDot');

    fireEvent.click(leftArrow);
    expect(children[2]).toHaveClass('active');
    fireEvent.click(leftArrow);
    expect(children[1]).toHaveClass('active');
    fireEvent.click(leftArrow);
    expect(children[0]).toHaveClass('active');
    fireEvent.click(leftArrow);
    expect(children[2]).toHaveClass('active');
  });

  it('clicking right arrow moves to next child', () => {
    const { getByTestId } = render(
      <Carousel>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Carousel>
    );

    const leftArrow = getByTestId('left-arrow');
    const rightArrow = getByTestId('right-arrow');
    const carouselDots = getByTestId('carousel-dots');
    const children = carouselDots.querySelectorAll('.carouselDot');

    fireEvent.click(rightArrow);
    expect(children[1]).toHaveClass('active');
    fireEvent.click(rightArrow);
    expect(children[2]).toHaveClass('active');
    fireEvent.click(rightArrow);
    expect(children[0]).toHaveClass('active');
    fireEvent.click(rightArrow);
    expect(children[1]).toHaveClass('active');
  });

  // Add more test cases as needed
});
