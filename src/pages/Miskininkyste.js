import React, {useState} from "react";

const Miskininkyste = () =>{
    return (
        <div className="bg-secondary min-h-[800px] h-full flex flex-col gap-6  ">

            <div className="relative w-full h-auto ">

                {/* Image */}
                <img src='../images/miskininkyste.jpg'
                     className="w-full h-[250px] md:h-[450px] object-cover" alt="ForestTwo"/>

                {/* Overlay with transparent shadow */}
                <div className="absolute inset-0 bg-accent opacity-30"></div>

                {/* Text and Button Container */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-10 lg:p-12">
                    {/* Text */}
                    <h1 className="text-secondary  text text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider leading-tight w-full md:w-2/3">
                        Miškininkystė
                    </h1>
                </div>
            </div>
            <div className="flex flex-col gap-12 p-6 mb-10 ">
                <div className="text-accent text2 text-xl  text-justify">
                    <h1
                        className="text-accent text-start text text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 tracking-wider leading-tight w-full md:w-2/3">
                        Pavadinimas
                    </h1>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facere quae quam quia quo
                    sapiente. Ab
                    accusamus aperiam at autem beatae cum deleniti distinctio enim eos, eum ex excepturi expedita facere
                    iure iusto minima modi mollitia neque nesciunt numquam obcaecati optio perferendis placeat,
                    provident
                    quae quas quasi quis quod saepe sequi totam velit veritatis voluptatem! Amet eaque quasi soluta
                    tempore.

                </div>
            </div>
        </div>
    )
}

export default Miskininkyste