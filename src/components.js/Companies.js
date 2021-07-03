import React from 'react'

function Companies({logo,name} ) {
    return (
        <div className="flex flex-col ">
            <div className="bg-red-500 rounded-full max-h-40 max-w-40 m-4 ">
                <img className="h-40 w-40 " src={logo} alt="" />
            </div>
            <div className="flex justify-center items-start ">
                <p className="text-gray-300 font-bold mt-2 ">
                    {name}
                </p>
            </div>
        </div>
    )
}

export default Companies
