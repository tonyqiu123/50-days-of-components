'use client'

import React, { useEffect, useState } from 'react';
import StarRating from '@/components/StarRating/StarRating';

const StarRatingDemo: React.FC = () => {

    const [selectedStars, setSelectedStars] = useState(0)

    useEffect(() => {
        console.log(selectedStars)
    }, [selectedStars])

    return (
        <StarRating totalStars={10} size={48} handleClick={(numOfStars) => { setSelectedStars(numOfStars) }} />
    )
};

export default StarRatingDemo;
