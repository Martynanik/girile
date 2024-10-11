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
                        Susipažinkite su mūsų istorija geriau
                    </h1>
                </div>
            </div>
            <div className=" flex flex-col gap-3 bg-secondary h-300 p-6">
                <h1 className="text2 text-3xl font-bold text-accent py-8 ">
                    Mūsų istorija
                </h1>
                <div className="text-accent text2 text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur assumenda consectetur cumque dignissimos excepturi expedita explicabo id impedit ullam? A
                    accusamus amet at beatae distinctio dolore eaque ex fugiat id ipsa maiores minima modi mollitia
                    numquam
                    obcaecati optio quae, quam quos rem repudiandae sapiente sequi sint sit totam unde vitae!
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8 items-center space-x-4 mb-6">

                    <div onClick={() => getValues()} className=" custom-shadow box  bg-accent shadow-2xl">
                        <div className={`flex flex-col items-center gap-5 sliding-div ${values ? "slide" : ""}`}>
                            <div className="text-center text2 text-3xl text-secondary">
                                Vertybės
                            </div>
                            <div className="full-line bg-secondary"></div>


                            {values && <div className="values-text text-center text2 text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, maxime?
                            </div>}

                        </div>
                    </div>
                    <div onClick={() => getMission()} className=" custom-shadow box  bg-accent shadow-2xl">
                        <div className={`flex flex-col items-center gap-5 sliding-div ${mission ? "slide" : ""}`}>
                            <div className="text-center text2 text-3xl text-secondary">
                                Misija
                            </div>
                            <div className="full-line bg-secondary"></div>


                            {mission && <div className="values-text text-center text2 text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, maxime?
                            </div>}

                        </div>
                    </div>
                    <div onClick={() => getVision()} className=" custom-shadow box  bg-accent shadow-2xl">
                        <div className={`flex flex-col items-center gap-5 sliding-div ${vision ? "slide" : ""}`}>
                            <div className="text-center text2 text-3xl text-secondary">
                               Vizija
                            </div>
                            <div className="full-line bg-secondary"></div>


                            {vision && <div className="values-text text-center text2 text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, maxime?
                            </div>}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About