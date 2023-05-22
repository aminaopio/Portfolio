import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import "./Homepage.css";

const HomePage = () => {

        const [state] = useState ({
            title: "Hi, I'm Amina!",
            // titleTwo: "I'm Amina! ",
            // titleThree: "Amina",
            image: "/images/amina.jpg",
        });
        return (<div className='HomePage'>
            <div className='HomePage-intro'>
                <h2>
                    <div className='title'>{state.title}</div>
                    <div className='titleTwo'>{state.titleTwo}</div>
                    {/* <div className='titleThree'>{state.titleThree}</div> */}
                </h2>
                <div className="text">
                    <Typewriter options={{
                        autoStart:true,
                        loop: true,
                        delay: 40,
                        strings: [
                            "I'm a Developer.",
                            "I'm a Computer Science graduate.",
                            "I'm a Photographer.",
                            "I'm a Digital Artist.",

                        ],
                    }}/>
                </div>
                <div className='contact-me'>
                    <button className='button'>Contact Me!</button>
                </div>
            </div>
            <div className='home-image'>
                    <img className='amina-image'src={state.image} alt='amina'/>
            </div>
        </div>)

}

export default HomePage;