import React from 'react'
import hero from "../Images/gamers.jpeg"
function Hero() {
    return (
        <div id="home" className="h-screen w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col">
                <div className="flex flex-col items-start md:items-end justify-center bg-black z-10 px-10">
                   <p className="text-white text-4xl md:text-6xl font-bold max-w-md md:-mr-40 z-10  "> DraMon esport team </p> 
                    <p className="text-white text-sm max-w-xs mt-4 md:-mr-10 z-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae rerum ipsa explicabo maxime placeat reiciendis magni ipsam dolorum quod?

                    </p>
                    <button className="px-5 py-3 text-white hover:bg-red-700 font-bold bg-red-500 rounded-xl md:self-start lg:ml-5 xl:ml-14 mt-5">
                        Meet the Team 
                    </button>
                </div>
                <div className=" md:col-span-4 flex justify-center ">
                    <img className="w-full object-cover " src={hero} alt="" />

                </div>
                <div className="bg-red-500 absolute h-screen w-full opacity-70 "></div>
        </div>
    )
}

export default Hero
