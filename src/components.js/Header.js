import React from 'react'
import logo from "../Images/redDragon.png"
import {Link } from "react-scroll"
function Header({toggle}) {
    return (
        <header className="flex h-28 w-full items-center justify-around bg-black ">
            <div>
                <img className="h-20" src={logo} alt="" />
            </div>

            <div>
                <ul className="md:flex hidden ">
                    <Link to="home" smooth={true } duration={500} >
                    <li className="block px-5 py-3 rounded-md hover:bg-red-500 text-white ">Home</li>
                    </Link>
                    <Link to="About" smooth={true } duration={500} >
                    <li className="block px-5 py-3 rounded-md hover:bg-red-500 text-white ">About</li>
                    </Link>
                    <Link to="sponcers" smooth={true } duration={500} >
                    <li className="block px-5 py-3 rounded-md hover:bg-red-500 text-white ">Sponcers</li>
                    </Link>
                    <Link to="Contact" smooth={true } duration={500} >
                    <li className="block px-5 py-3 rounded-md hover:bg-red-500 text-white ">Contact</li>
                    </Link>
                    
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <button className="px-5 py-3 hover:bg-red-700 font-bold rounded-xl bg-red-500 text-white ">
                    Register
                </button>
                <div className="ml-2 md:hidden">
                <svg  onClick={toggle} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
                </div>
            
            </div>
             
        </header>
    )
}

export default Header
