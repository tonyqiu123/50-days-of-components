# Day 23/100

July 30th / October 16th

# Carousel
<a href="https://youtu.be/M_HVJ14cwps" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Carousel" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Carousel" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1135312926039887903/image.png"/></a>  

# Description 

###### The Carousel component in web development is a UI element that rotates through a series of content items when interacted with. Carousels are typically used in software like e-commerce websites to display a variety of products in a limited space, photo galleries for showcasing a collection of images, mobile apps for onboarding screens, and homepages for highlighting multiple pieces of important content, offering a visually engaging way to compact multiple pieces of content on a single screen.

Buliding this component without any libraries like framer-motion was beyond challenging, given the feature I was determined to build - infinite scrolling. For now, it works, atleast in 99% of use cases. The 1% is when the user spam-clicks an arrow and the images will barely noticeably 'snap'. You'll know what I mean in the demo. Because of this, I will revisit this component in the future.

Is anybody really reading this?

# Installation 

To use the Carousel component in your project, follow these steps:

1. Create a new folder called 'Carousel' in your project's components directory.
2. Copy the `Carousel.tsx` and `Carousel.css` files into the newly created 'Carousel' folder.

# Props 
### Carousel:

`children` (required jsx): These are the child elements or components that the Carousel component wraps around. It typically includes images to be displayed in a carousel format.

`className` (optional string): This property allows the user to add additional CSS classes to the Carousel component. 

# Example Usage
### page.tsx
```jsx
<Carousel className='carouselDemo'>
    <Image src='/Carousel/dorm.png' alt='dorm' layout="fill" objectFit="cover" />
    <Image src='/Carousel/floorLounge.png' alt='floorLounge' layout="fill" objectFit="cover" />
    <Image src='/Carousel/gym.png' alt='gym' layout="fill" objectFit="cover" />
    <Image src='/Carousel/mainFloor.png' alt='mainFloor' layout="fill" objectFit="cover" />
    <Image src='/Carousel/outside.png' alt='outside' layout="fill" objectFit="cover" />
    <Image src='/Carousel/pianoRoom.png' alt='pianoRoom' layout="fill" objectFit="cover" />
    <Image src='/Carousel/poolTable.png' alt='poolTable' layout="fill" objectFit="cover" />
</Carousel>
```

# Prerequisites
This component requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used for this component:
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"