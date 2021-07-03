import React from 'react'
import contact from "../Images/games.jpeg"
function Contact() {
    return (
        <div id="Contact" className="h-full md:h-screen w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col">
            <div className="relative w-full flex justify-center ">

                <img className="w-full object-cover h-screen" src={contact} alt="" />

                <div className="bg-red-600 absolute h-screen w-full opacity-80 "></div>
            </div>

            <div className="flex flex-col items-center md:items-start  justify-center bg-black z-10">
                    <p className="ml-1 mt-10 text-red-500 text-4xl md:text-5xl font-bold max-w-xs z-10 ">
                        Contact Us 
                    </p>

                    <form className="mt-20" id="form1" >
                        <div className="flex flex-col justify-start">
                            <input className="m-2" type="text" placeholder=" Name" />
                            <input className="m-2"  type="email" placeholder=" Email Address " />
                            <textarea  className="m-2" name="" placeholder=" Your Message" form="form1" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button className="ml-2 px-5 py-3 text-white hover:bg-red-700 font-bold bg-red-500 rounded-xl mt-2">
                            Send
                        </button>
                    </form>
            </div>

        </div>
    )
}

export default Contact
