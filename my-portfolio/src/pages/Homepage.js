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
                    <GitHubIcon />
                    <LinkedInIcon/>
                    <EmailIcon />
                </div>
            </div>
            <div></div>
            <div className='skills'>
                <h1>Tech Stacks/Skills</h1>
                <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span> ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</span>

                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span> NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL</span>

                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>

                </li>
                </ol>
            </div>
        </div>)

}

export default HomePage;