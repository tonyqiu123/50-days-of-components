'use client'

import React, { useEffect, useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { SkeletonProvider, Skeleton } from '@/components/Skeleton/Skeleton';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const reactCode = `<div className="row" style={{ gap: '40px', height: '100%' }}>
    <div className="column">
        <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
            <div className='row' style={{ gap: '40px' }}>
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width='100%' height={60} borderRadius={10} />
            </div>
            <Skeleton width='100%' height={300} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={130} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={200} borderRadius={10} />
        </SkeletonProvider>
    </div>
    <div className="column">
        <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
            <div className='row' style={{ gap: '40px' }}>
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
            </div>
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={130} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
        </SkeletonProvider>
    </div>
</div>`;

    useEffect(() => {
        const delayFunction = async () => {
            try {
                setIsLoading(true);
                // Wait for 2 seconds
                await new Promise(resolve => setTimeout(resolve, 3000));
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        delayFunction()
    }, [reload])


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Skeleton component</h1>
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>
                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <div className="row" style={{ gap: '40px', height: '100%' }}>
                            <div className="column">
                                <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
                                    <div className='row' style={{ gap: '40px' }}>
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width='100%' height={60} borderRadius={10} />
                                    </div>
                                    <Skeleton width='100%' height={300} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={130} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={200} borderRadius={10} />
                                </SkeletonProvider>
                            </div>
                            <div className="column">
                                <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <div className='row' style={{ gap: '40px' }}>
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                        <Skeleton width={60} height={60} borderRadius='100%' />
                                    </div>
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                    <Skeleton width='100%' height={130} borderRadius={10} />
                                    <Skeleton width='100%' height={60} borderRadius={10} />
                                </SkeletonProvider>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>
            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 