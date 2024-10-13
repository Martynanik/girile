import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Main = () =>{
    const nav = useNavigate();

    return (
        <div className="relative w-full h-auto">
            <img src='./images/forest.jpg' className="w-full h-[600px] sm:h-full object-none sm:object-cover" alt="Forest"/>

            <div className="absolute inset-0 bg-accent opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-10 lg:p-12">
                <h1 className="text-secondary  text text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider leading-tight w-full md:w-2/3">
                    JŪSŲ PATIKIMAS MEDIENOS PARTNERIS
                </h1>

                <button
                    onClick={()=>nav('/contacts')}
                    className="bg-secondary  text2 text-accent font-bold px-4 py-2 md:px-6 md:py-4 transition-all duration-200">
                    SUSISIEKITE
                </button>
            </div>
        </div>


    )
}

export default Main