import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

    return (
       <header>
      <div className='headerContent'>
      <div className='headerTitle'>
            <h1>Palisade Heights Apartments</h1>
        </div>
        <div className='headerNav'>
            
                <a href='/'>Home</a>
                <a href='#Floorplans'>Floorplans</a>
                <a href='#Contact'>Contact</a>
           
        </div>
      </div>
       </header>
    );
}