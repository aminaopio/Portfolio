import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function NavBar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
    setExpandNavbar(false);
    }, [location]);


    const [state] = useState ({
        image: "/images/luffyamazed.png",
    });
    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <ReorderIcon />
          </button>
        </div>
        <div className='nav'>
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
            </div>
      </div>
    );
}

export default NavBar;