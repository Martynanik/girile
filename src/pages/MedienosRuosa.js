import React, {useState} from "react";



const MedienosRuosa = () =>{
    return(
        <div className="bg-secondary min-h-[1000px] h-full flex flex-col">
            <div className=" flex justify-center mt-7">
                <h1
                    className="text-accent text-center text text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-wider leading-tight w-full md:w-2/3">
                   Medienos ruoša ir skaldymas skaldyklėmis
                </h1>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-8 text-accent text2 text-xl mb-8 p-6">
                <div className="flex-grow-0 flex-shrink-0 custom-shadow skaldykle shadow-2xl"></div>
                <div className="flex-grow">
                    <div className="flex flex-col gap-6 w-full text-justify">
                        <div>
                            Malkų skaldymas – sunkus darbas, reikalaujantis nemažos fizinės jėgos, nes kaladės būna įvairios – suktos, kietos. Mūsų įmonė specializuojasi kokybiškoje medienos ruošoje. Naudojame modernias ir galingas skaldykles, kurios leidžia efektyviai ir greitai suskaldyti įvairių rūšių medieną. Tai garantuoja tikslų skaldytos medienos ilgį, lengvesnį transportavimą ir patogų sandėliavimą.
                        </div>

                        <div>
                            Skaldymo procesas skaldyklėmis užtikrina tikslumą ir greitį, todėl malkos tampa paruoštos tiek šildymui, tiek kitoms reikmėms. Nesvarbu, ar reikia skaldyti kietmedį, kaip ąžuolą ir uosį, ar minkštesnę medieną, visada stengiamės užtikrinti aukščiausią kokybę ir maksimalų klientų pasitenkinimą.
                        </div>

                        <div>
                            Pasitikėkite mūsų patirtimi ir profesionalia įranga – jūsų mediena bus paruošta optimaliai ir laiku.

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MedienosRuosa