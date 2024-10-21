import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const SkaldytosMalkos = () =>{
    const nav = useNavigate();



    return (
        <div className="bg-secondary h-full flex flex-col">
            <div className=" flex justify-center mt-7">
                <h1
                    className="text-accent text-center text text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-wider leading-tight w-full md:w-2/3">
                    Skaldytos malkos
                </h1>
            </div>
            <div className="text-accent text2 text-xl mb-8 p-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut beatae corporis cum cupiditate dolor enim est fugit inventore laborum molestias natus nobis nulla odit reprehenderit sapiente similique suscipit totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit numquam qui tempora? A aspernatur blanditiis consequuntur dolorem ducimus ea, facilis fugit inventore officia praesentium sapiente tenetur totam ut voluptates?
                <br/>

            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center space-x-4 mb-[100px]">

                <div onClick={()=>nav("/produktai/skaldytosMalkos/azuolas")}
                     className="flex flex-col gap-4 items-center">
                    <div className="text-accent text text-3xl font-bold">Ąžuolas</div>
                    {/*dezute su azuolu*/}
                    <div className=" custom-shadow oak shadow-2xl ">
                    </div>
                </div>

                <div onClick={()=>nav("/produktai/skaldytosMalkos/berzas")}
                     className="flex flex-col gap-4 items-center">
                    <div className="text-accent text text-3xl font-bold">Beržas</div>
                    {/*dezute su berzu*/}
                    <div className=" custom-shadow birch shadow-2xl">
                    </div>
                </div>

                <div onClick={()=>nav("/produktai/skaldytosMalkos/alksnis")}
                    className="flex flex-col gap-4 items-center">
                    <div className="text-accent text text-3xl font-bold">Alksnis</div>
                    {/*dezute su alksniu*/}
                    <div className=" custom-shadow alder shadow-2xl">
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <div className="text-accent text text-3xl font-bold">Uosis</div>
                    {/*dezute su uosiu*/}
                    <div className=" custom-shadow ash shadow-2xl">
                    </div>
                </div>

            </div>

            {/*<div className="flex flex-col md:flex-row justify-center gap-8 items-center space-x-4 mb-6">*/}
            {/*    <div className=" custom-shadow box-product  bg-accent shadow-2xl mt-6 ">*/}
            {/*        <div className="flex flex-col items-center gap-5 sliding-div ">*/}
            {/*            <div className="text-center text2 text-3xl text-secondary">*/}
            {/*                Skaldytos malkos*/}
            {/*            </div>*/}
            {/*            <div className="full-line bg-secondary"></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className=" custom-shadow box-product  bg-accent shadow-2xl mt-6">*/}
            {/*        <div className="flex flex-col items-center gap-5 sliding-div ">*/}
            {/*            <div className="text-center text2 text-3xl text-secondary">*/}
            {/*                Apvali mediena*/}
            {/*            </div>*/}
            {/*            <div className="full-line bg-secondary"></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default SkaldytosMalkos