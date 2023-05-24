import React, { useState } from 'react';
import "../styles/NavBar.css";
import { Link } from 'react-router-dom';
const NavBar = () => {

    const [state] = useState ({
        image: "/images/luffyamazed.png",
    });
    return (
        <nav>
            <li className='company'>
                    <Link to = "/"><img className='comp-image'src={state.image} alt='compicon'/>aodev</Link> 
                    </li>
            <ul>
                <li>
                <Link to = "/"> Home</Link>
                </li>
                <li>
                <Link to = "/experience"> Experience</Link>
                </li>
                <li>
                <Link to = "/projects"> Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;