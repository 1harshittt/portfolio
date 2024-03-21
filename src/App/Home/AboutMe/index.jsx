import React from 'react'
import './AboutMe.scss'
import longimg from '../../../Assets/Images/longimg3.jpg'
export default function AboutMe() {
    return (
        <div className='Container'>
            <div className="section1">
                <div className="sec1-flex">
                    <div className="long-img">
                        <img src={longimg} alt='img' />
                    </div>
                    <div className="info">
                        <div className="heading">
                            <h1>About Me</h1>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>

                        <ul className='ul'>
                            <li>
                                <span>Name:</span>
                                <span>Harshit Makwana</span>
                            </li>
                            <li>
                                <span>Date of birth:</span>
                                <span>December 20,2005</span>
                            </li>
                            <li>
                                <span>Address:</span>
                                <span>San Fransisco CA 394107 USA</span>
                            </li>
                            <li>
                                <span>Zip code:</span>
                                <span>1234</span>
                            </li>
                            <li>
                                <span>E-mail:</span>
                                <span>code1harshit@gmail.com</span>
                            </li>
                            <li>
                                <span>Contact:</span>
                                <span>2327436969</span>
                            </li>
                        </ul>
                        <div className="last-butt">
                            <span>10 Projects Completed </span>
                           <div className="button"><a href="#">Download CV</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
