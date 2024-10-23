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
                <div className="mt-3">                Tikriausiai neapsiriksime teigdami, kad malkos yra viena populiariausių kietojo kuro rūšių tiek namų šildymui, tiek kitiems poreikiams. Mūsų įmonė siūlo aukštos kokybės džiovintas ir žalias malkas, kurias galite rinktis iš skirtingų medienos rūšių pagal savo poreikius. Turime beržo, ąžuolo, uosio, juodalksnio bei kitų rūšių malkų, kurios patenkins įvairius klientų lūkesčius.
                </div>
                <div className="mt-3">                Ypatingai didžiuojamės mūsų modernia ir galinga džiovinimo sistema, kuri leidžia paruošti aukščiausios kokybės džiovintas malkas. Jos dega efektyviau, ilgiau ir yra paruoštos iš karto naudoti. Žalias malkas taip pat galite rinktis, jei norite, kad jos natūraliai džiūtų ar turėtumėte ilgesniam laikui.
                </div>
                <div className="mt-3">                Visas malkas kruopščiai paruošiame ir pristatome į jūsų nurodytą vietą, nepriklausomai nuo užsakymo dydžio. Užtikriname, kad mūsų malkos bus puikus pasirinkimas jūsų namų šildymui.                <br/>
                </div>

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