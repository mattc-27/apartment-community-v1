import React, { useState, useEffect } from 'react';
import onebed_fp from '../../images/onebed_fp.jpg';
import studio_fp from '../../images/studio_fp.jpg'
import twobed_fp from '../../images/twobed_fp.jpg'
import { MdOutlineBedroomChild } from 'react-icons/md'
export default function Apartment({ item }) {

    const [show, setShow] = useState(false)

    function handleView() {
        if (!show) {
            setShow(true)
        } else setShow(false)
    }

    return (
        <>
            <div className='apartment' key={item.id}>
                <div className='itemName'>
                    <h2>{item.name}</h2>

                </div>
                <div className='itemDesc'>
                    <p>{item.description}</p>

                </div>
                <div className='itemDescImg'>
                    {item.name === 'One bedroom' ?

                        <><MdOutlineBedroomChild size={35} />
                        </>
                        : item.name === 'Two bedroom' ?
                            <>
                                <MdOutlineBedroomChild size={35} />
                                <MdOutlineBedroomChild size={35} />
                            </>
                            : <>
                                <MdOutlineBedroomChild size={35} />
                                <MdOutlineBedroomChild size={35} />
                                <MdOutlineBedroomChild size={35} />
                            </>
                    }
                </div>
                <div className='viewButton'>
                    <button id='viewAptBtn' onClick={handleView}>View</button>
                </div>
                {show &&
                    <div className='viewApt' style={{}}>
                        <div className='aptModal' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '2%' }}>
                            <h1 style={{}}>View modal</h1>
                            <p>{item.name}</p>
                            {item.available ? <p>Available</p>
                                : <p>Not available</p>
                            }
                            <button id='closeAptBtn' onClick={handleView} style={{ backgroundColor: '#460814fd' }}>Close</button>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}