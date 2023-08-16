import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended matchers
import Carousel from '@/components/Carousel/Carousel';

describe('Carousel Component', () => {

  it('displays children correctly', () => {
    const { queryAllByTestId } = render(
      <Carousel>
        <div data-testid="carousel-image">Slide 1</div>
        <div data-testid="carousel-image">Slide 2</div>
        <div data-testid="carousel-image">Slide 3</div>
      </Carousel>
    );

    const carouselImages = queryAllByTestId('carousel-image');
    expect(carouselImages).toHaveLength(3); // Assuming you have a data-testid on the carouselImage elements
  });

  it('updates current index on left arrow click', () => {
    const { container } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );

    const leftArrow = container.querySelector('.carousel > img:first-child');
    const rightArrow = container.querySelector('.carousel > img:last-child');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    fireEvent.click(leftArrow!);
    // Assert that the currentIndex is updated as expected
  });

  it('updates current index on right arrow click', () => {
    const { container } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );

    const leftArrow = container.querySelector('.carousel > img:first-child');
    const rightArrow = container.querySelector('.carousel > img:last-child');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    fireEvent.click(rightArrow!);
    // Assert that the currentIndex is updated as expected
  });

  it('changes active dot on arrow click', async () => {
    const { container } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );

    const leftArrow = container.querySelector('.carousel > img:first-child');
    const rightArrow = container.querySelector('.carousel > img:last-child');
    const dots = container.querySelectorAll('.carouselDot');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
    expect(dots).toHaveLength(3);

    fireEvent.click(rightArrow!);
    await waitFor(() => expect(dots[1]).toHaveClass('active'));

    fireEvent.click(leftArrow!);
    await waitFor(() => expect(dots[0]).toHaveClass('active'));
  });
});
