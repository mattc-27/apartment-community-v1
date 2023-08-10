import React, { useState, useEffect } from 'react';

import Apartment from './Apartment';
import {FloorPlanInfo} from '../FloorplanInfo';

export default function Floorplans() {

    const [floorplanData, setFloorplanData] = useState(FloorPlanInfo);

    useEffect(() => {
        console.log(FloorPlanInfo);
    }, [])

    return (
        <>
            {floorplanData.map(item => (
                <div className='itemCard ' key={item.id}>
                    <Apartment item={item} />
                </div>
            ))}
        </>
    );
}