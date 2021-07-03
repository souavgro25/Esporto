import React from 'react'
import {Link } from "react-scroll";
function Dropdown({isopen,toggle}) {
    return (
        
            <div className="md:hidden">
                <ul onClick={toggle} className={isopen?"flex flex-col justify-center items-center bg-black ":"hidden"}>
                    <Link to="home" smooth={true } duration={500} >
                    <li className="block px-10 py-2 rounded-md hover:bg-red-500 text-white ">Home</li>
                    </Link>
                    <Link to="About" smooth={true } duration={500} >
                    <li className="block px-10 py-2 rounded-md hover:bg-red-500 text-white ">About</li>
                    </Link>
                    <Link to="sponcers" smooth={true } duration={500} >
                    <li className="block px-10 py-2 rounded-md hover:bg-red-500 text-white ">Sponcers</li>
                    </Link>
                    <Link to="Contact" smooth={true } duration={500} >
                    <li className="block px-10 py-2 rounded-md hover:bg-red-500 text-white ">Contact</li>
                    </Link>
                    
                </ul>
            </div>
        
    )
}

export default Dropdown
