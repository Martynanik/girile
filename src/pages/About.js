import React, {useState} from "react";


const About = () =>{
    const [values, setValues] = useState(false);
    const [mission, setMission] = useState(false);
    const [vision, setVision] = useState(false);


    function getValues(){
        setValues(!values);
    }
    function getMission(){
        setMission(!mission);
    }
    function getVision(){
        setVision(!vision);
    }

    return (
        <div >
            <div className="relative w-full h-auto ">

                {/* Image */}
                <img src='./images/forest.jpg' className="w-full h-[250px] md:h-[450px] object-cover" alt="Forest"/>

                {/* Overlay with transparent shadow */}
                <div className="absolute inset-0 bg-accent opacity-30"></div>

                {/* Text and Button Container */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-10 lg:p-12">
                    {/* Text */}
                    <h1 className="text-secondary  text text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider leading-tight w-full md:w-2/3">
                        Susipažinkite su mūsų istorija
                    </h1>
                </div>
            </div>
            <div className=" flex flex-col gap-3 bg-secondary h-300 p-6">
                <h1 className="text2 text-3xl font-bold text-accent py-8 ">
                    Mūsų istorija
                </h1>
                <div className="text-accent text2 text-xl mb-8 text-justify">
                    UAB „Girilė“ buvo įkurta 2009 metais, siekiant skatinti atsakingą miškininkystę, kuri palaiko ekologinę pusiausvyrą. Mūsų misija – tvariai tvarkyti ir kirsti miškus, užtikrinant aukštos kokybės medienos gamybą ir aplinkos apsaugą. Tikime, kad svarbu užtikrinti gamtos išteklius ateities kartoms, todėl kiekviename mūsų darbo etape teikiame prioritetą kokybei ir ekologinei integracijai.
                    <br/>
                    <br/>
                    Įmonės vadovas, Vidmantas Nikša, subūrė patyrusią komandą, dirba su modernia technika, kuri orientuota į kokybę ir ekologinę integraciją, siekiant užtikrinti gamtos išteklius. Mes kviečiame jus prisijungti prie mūsų kelionės link žalesnio ir tvaresnio pasaulio, kur kiekvienas mūsų veiksmas veda prie geresnės ateities.
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8 items-center space-x-4 mb-6">

                    <div onClick={() => getValues()} className=" custom-shadow box1  bg-accent shadow-2xl">
                        <div className={`flex flex-col items-center gap-5 sliding-div ${values ? "slide" : ""}`}>
                            <div className="text-center text2 text-3xl text-secondary">
                                Vertybės
                            </div>
                            <div className="full-line bg-secondary"></div>


                            {values && <div className="values-text text-center text-lg text2 text-secondary">
                                Tvarumas <br/>
                                Pagarba gamtai <br/>
                                Sąžiningumas <br/>
                                Inovacijos
                            </div>}

                        </div>
                    </div>
                    <div onClick={() => getMission()} className=" custom-shadow box1  bg-accent shadow-2xl">
                        <div className={`flex flex-col items-center gap-5 sliding-div ${mission ? "slide" : ""}`}>
                            <div className="text-center text2 text-3xl text-secondary">
                                Misija
                            </div>
                            <div className="full-line bg-secondary"></div>


                            {mission && <div className="values-text text-center text2 text-secondary">
                                Tvariai tvarkyti ir kirsti miškus, užtikrinant aukštos kokybės medienos gamybą ir aplinkos apsaugą.                            </div>}

                        </div>
                    </div>
                    <div onClick={() => getVision()} className=" custom-shadow box1  bg-accent shadow-2xl">
                        <div className={`flex flex-col items-center gap-5 sliding-div ${vision ? "slide" : ""}`}>
                            <div className="text-center text2 text-3xl text-secondary">
                               Vizija
                            </div>
                            <div className="full-line bg-secondary"></div>


                            {vision && <div className="values-text text-center text2 text-secondary">
                                Skatinti atsakingą miškininkystę, laikantis ekologinės pusiausvyros ir užtikrinti tvarius gamtos išteklius ateities kartoms.
                            </div>}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About