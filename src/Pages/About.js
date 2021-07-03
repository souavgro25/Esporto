import React from 'react'
import logo from "../Images/redDragon.png"
function About() {
    return (
        <div id="About" className="h-screen w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col bg-black ">
            <div className="flex max-w-xl justify-center items-center mt-20 md:mt-0 lg:ml-20  ">
                <div className="justify-center items-center flex lg:w-96 lg:h-96 h-72 w-72  bg-red-700 rounded-full m-10">
                    <img  className="h-4/5" src={logo} alt="" />
                </div>
            </div>

            <div className=" flex flex-col justify-center items-center md:items-start">
                <p className="max-w-md text-5xl md:text-6xl font-bold text-red-500 mb-10 ">Dramon Team</p>

                <p className="max-w-xs text-gray-100 text-sm "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore possimus voluptatum, magnam rerum deleniti voluptatem! Quo aut cum incidunt, quis mollitia ratione dolores beatae quod molestiae ducimus accusamus dignissimos autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, debitis! </p>
            </div>
        </div>
    )
}

export default About
