import React from 'react'
import Companies from '../components.js/Companies'
import comp1 from "../Images/epic-games.png"
import comp2 from "../Images/unity.png"
import comp3 from "../Images/Ea.png"
import comp4 from "../Images/active.png"
function Sponcers() {
    return (
        <div id="sponcers" className="justify-center items-center flex flex-col bg-black h-screen "> 
             <p className="text-gray-300 text-5xl mb-20">
                Our Sponcers 
             </p>
             <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col">
                <Companies logo={comp1} name="Epic games" />
                <Companies logo={comp2} name="Unity " />
                <Companies logo={comp3} name="Ea Games" />
                <Companies logo={comp4} name="activision" />
             </div>
        </div>
    )
}

export default Sponcers
