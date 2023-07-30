# Day 22/100

July 29th / October 16th

# Accordion
<a href="https://youtu.be/AM2SlbabyAE" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Accordion" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Accordion" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1135233960318865418/image.png"/></a>  

# Description 

###### The accordion component in web development is a UI element that expands to reveal hidden content when clicked. Accordions are typically used in software like e-commerce websites to hide and show product details, FAQs to display answers, mobile apps for navigation menus, and dashboards for presenting layers of data, offering a clean, organized way to condense complex content on a single page.

I consider accordions to be a 'heavyweight' among all components I will be developing over the lifetime of this project. Useful and semi-challenging in building, mainly in the css. Shit, making all the spacing nicely even was not a walk in the park and required thinking outside the box. You couldn't just chatgpt it. Trust me, I tried. So respect to any devs out there who have developed a bug-free accordion from scratch.

Is anybody really reading this?

# Installation 

To use the Accordion component in your project, follow these steps:

1. Create a new folder called 'Accordion' in your project's components directory.
2. Copy the `Accordion.tsx` and `Accordion.css` files into the newly created 'Accordion' folder.

# Props 
### AccordionProvider:

`children` (required jsx): Inside lies only Accordion components.

`className` (optional string): This property allows the user to add additional CSS classes to the 
AccordionProvider component.

`darkMode` (optional boolean): This property controls the display mode of the AccordionProvider. If true, it switches the AccordionProvider to a dark theme. The default is a light theme if this prop is false or not provided.

### Accordion:

`children` (required jsx): These are the child elements or components that the Accordion component wraps around. They usually consist of a combination of AccordionTrigger and AccordionContent components.

`className` (optional string): This property allows the user to add additional CSS classes to the Accordion component. 

### AccordionTrigger:

`name` (required string): This property uniquely identifies each AccordionTrigger. It's used in conjunction with the setActiveName function from the AccordionContext to control which AccordionContent is currently visible.

`children` (required jsx): These are the child elements or components that the AccordionTrigger component wraps around.

`className` (optional string): This property allows the user to add additional CSS classes to the AccordionTrigger component. c styling provided by default. If this prop is not provided, no additional classes are added.

### AccordionContent:

`name` (required string): This property uniquely identifies each AccordionContent. It's used in conjunction with the activeName value from the AccordionContext to control its visibility.

`children` (required jsx): These are the child elements or components that the AccordionContent component wraps around.

`className` (optional string): This property allows the user to add additional CSS classes to the AccordionContent component.  

# Example Usage
### page.tsx
```jsx
<AccordionProvider darkMode={isDarkMode} className='accordionDemo'>
    <Accordion>
        <AccordionTrigger name="section1">
            <h2>Section 1</h2>
        </AccordionTrigger>
        <AccordionContent name="section1">
            <p>This is the content for section 1</p>
        </AccordionContent>
    </Accordion>
    <Accordion>
        <AccordionTrigger name="section2">
            <h2>Section 2</h2>
        </AccordionTrigger>
        <AccordionContent name="section2">
            <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for s </p>
        </AccordionContent>
    </Accordion>
    <Accordion>
        <AccordionTrigger name="section3">
            <h2>Section 3</h2>
        </AccordionTrigger>
        <AccordionContent name="section3">
            <p>This is the content for secthis is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content for section 2his is the content f </p>
        </AccordionContent>
    </Accordion>
</AccordionProvider>
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