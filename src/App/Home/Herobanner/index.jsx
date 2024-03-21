import React, { useState, useEffect } from 'react';
import './Herobanner.scss'
import { GoArrowDown } from "react-icons/go";
export default function Herobanner() {
    const names = ['Developer', 'Web-Designer', 'Marketer', 'Trader']; 
    const [index, setIndex] = useState(0);
    const [name, setName] = useState(''); // Initialize the name state
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
    if (letterIndex < names[index].length) {
      const timer = setTimeout(() => {
        setName(name + names[index][letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100); // Delay in milliseconds (0.1 seconds)

      return () => {
        clearTimeout(timer); // Clear the timer when the component is unmounted
      }
    } else {
      const timer = setTimeout(() => {
        setName('');
        setLetterIndex(0);
        setIndex((index + 1) % names.length);
      }, 2000); // Delay in milliseconds (2 seconds)
    }
  }, [index, letterIndex]);

    return (
            <div className="herobanner">
                <div className="overlay">
                  <a href="#"><GoArrowDown className='arr' /></a> 
                </div>
              
                <div className="mid-texts">
                    <span>HEY! I AM</span>
                    <h1>Harshit Makwana</h1>
                    <h2>I'm a <span>{name}</span></h2>
                    
                </div>
                <div className="box-position">
                   <div className="box-tilt">
                   </div>
                </div>
              </div>
       
    )
}
