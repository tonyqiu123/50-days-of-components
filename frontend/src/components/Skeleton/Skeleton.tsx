import React, { useState, useRef, useEffect } from 'react';
import './Skeleton.css'

type SkeletonProviderProps = {
    className?: string;
    children: React.ReactNode;
    loading: boolean;
    darkMode?: boolean;
};

type SkeletonProps = {
    className?: string;
    width?: number | string;
    height?: number;
    borderRadius?: number | string;
};

export const SkeletonProvider: React.FC<SkeletonProviderProps> = ({ className = '', loading, darkMode, children }) => {
    return (
        <div className={`skeletonProvider ${!loading && 'skeleExit'} ${darkMode ? 'darkMode' : ''}`}>
            {children}
        </div>
    );
};

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', width = "100%", height = 100, borderRadius = "0" }) => {
    const getWidth = () => {
        if (typeof width === 'number') {
            return `${width}px`;
        }
        return width;
    };

    const getFlexShrink = () => {
        if (typeof width === 'number') {
            return 0;
        }
        return 1;
    };

    const getBorderRadius = () => {
        if (typeof borderRadius === 'number') {
            return `${borderRadius}px`;
        }
        return borderRadius;
    };

    return (
        <div style={{ width: getWidth(), height: `${height}px`, borderRadius: getBorderRadius(), flexShrink: getFlexShrink() }} className={`skeleton ${className}`}></div>
    );
};
