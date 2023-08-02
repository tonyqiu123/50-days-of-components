'use client'

import React from 'react';
import DragNDrop, { ChildComponentProps } from '@/components/DragNDrop/DragNDrop';
import Tooltip from '@/components/Tooltip/Tooltip';
import '@/components/DragNDrop/DragNDrop.css'
import Image from 'next/image';


export default function DragNDropDemo() {

    return (

        <div className='page'>
            <Tooltip toolTipText='Takes in child elements and provides a mechanism to rearrange them in the order of display through a simple drag-and-drop action.'>
                <p>DragNDrop Component</p>
            </Tooltip>
            <DragNDrop>
                <div className="item1 row">
                    <h1>Buy Groceries</h1>
                    <div className='column'>
                        <h4>Weekend Shopping List</h4>
                        <p>Make sure to buy fruits, vegetables, dairy products, and bread for the upcoming week.</p>
                    </div>
                </div>
                <div className="item1 row">
                    <h1>Workout</h1>
                    <div className='column'>
                        <h4>Evening Routine</h4>
                        <p>Spend at least 30 minutes on cardio and finish the session with some stretching exercises.</p>
                    </div>
                </div>
                <div className="item1 row">
                    <h1>Read a Book</h1>
                    <div className='column'>
                        <h4>Personal Development</h4>
                        <p>Continue reading the latest book and aim to finish at least two chapters today.</p>
                    </div>
                </div>
            </DragNDrop>
            <DragNDrop>
                <Image className='item2' height={200} width={150} src='/DragNDrop/ace.png' alt='' />
                <Image className='item2' height={200} width={150} src='/DragNDrop/jack.png' alt='' />
                <Image className='item2' height={200} width={150} src='/DragNDrop/queen.png' alt='' />
                <Image className='item2' height={200} width={150} src='/DragNDrop/king.png' alt='' />
            </DragNDrop>

        </div>
    );
};