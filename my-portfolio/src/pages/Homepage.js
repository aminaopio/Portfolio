import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Homepage.css";


const HomePage = () => {

        const [state] = useState ({
            title: "Hi,",
            titleTwo:"I'm Amina!",
            // titleThree: "Amina",
            image: "/images/aminaopio.png",
        });
        return (<div className='HomePage'>
            <div className='HomePage-intro'>
            <img className='amina-image'src={state.image} alt='amina'/>
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
                <a href="https://github.com/aminaopio" target="_blank" rel="noreferrer">
                <GitHubIcon/>
                </a>
                <a href="https://www.linkedin.com/in/aminaopio/" target="_blank" rel="noreferrer">
                <LinkedInIcon/>
                </a>
                <a href="mailto:aminaopio@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon />
                </a>
                    
                </div>
            </div>
            {/* <div className='about-me'>
                <h2>About Me</h2>
            </div> */}

            <div className='skills'>
                <h1>Tech Stacks and Skills</h1>
                <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span> ReactJS, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, TailwindCSS, StyledComponents</span>

                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span> NodeJS, Firebase, MySQL, MongoDB, DynamoDB, AWS S3, MS SQL</span>

                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>C, C++, JavaScript, Dart, Python, TypeScript, Golang</span>

                </li>
                </ol>
            </div>
        </div>)

}

export default HomePage;