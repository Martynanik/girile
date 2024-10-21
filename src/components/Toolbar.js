import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Toolbar = () => {
    const nav = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [chosenPage, setChosenPage] = useState(null);


    const handleClick = () => {
        setIsShown(!isShown);
    };

    function pressedPage(id) {
        setChosenPage(id);
    };

    return (
        <div className="navbar flex justify-between p-4">
            <div>
                <img src='./images/lightlogo.png' onClick={() => {
                    nav("/");
                    pressedPage(null);
                }}
                     className="w-42 h-32 md:w-58 md:h-42 cursor-pointer" alt="" />
            </div>

            <div>
                <div className="md:hidden">
                    <div onClick={handleClick} id="roundButton" className="flex flex-col gap-1 pr-6">
                        <div className="line bg-secondary"></div>
                        <div className="line bg-secondary"></div>
                        <div className="line bg-secondary"></div>
                    </div>
                </div>

                <div className="hidden text2 md:flex text-secondary text-none md:text-2xl gap-4">
                    <div className="flex flex-col gap-2">
                        <Link to="/about"
                              onClick={() => pressedPage(1)}
                              className="no-underline transition-all duration-200">Apie mus</Link>
                        <div className={`${chosenPage === 1 ? 'toolbar-line' : ''} bg-secondary`}></div>
                    </div>
                    <div className=" dropdown flex flex-col gap-2">
                            <Link to="/produktai/skaldytosMalkos"
                                       onClick={() => pressedPage(2)}
                                       className=" flex items-center no-underline transition-all duration-200">Produktai
                                <span className="arrow "></span>
                            </Link>
                            <div className={`${chosenPage === 2 ? 'toolbar-line' : ''} bg-secondary`}></div>

                            <ul className="menu dropdown-content bg-base-100 box  w-full  shadow mt-[43px] ">
                                <li><a>Skaldytos malkos</a></li>
                                <li><a>Apvali mediena</a></li>
                            </ul>


                    </div>
                    <div className=" dropdown flex flex-col gap-2">
                        <Link to="/services"
                              onClick={() => pressedPage(3)}
                              className=" flex items-center no-underline transition-all duration-200">Paslaugos
                            <span className="arrow "></span>
                        </Link>

                        <ul className="menu dropdown-content bg-base-100 box  w-full  shadow mt-[43px] ">
                            <li><a>Miškininkystė</a></li>
                            <li><a>Medienos ruoša</a></li>
                            <li><a>Transporto paslaugos</a></li>

                        </ul>
                        <div className={`${chosenPage === 3 ? 'toolbar-line' : ''} bg-secondary`}></div>

                    </div>
                    <div className="flex flex-col gap-2">
                        <Link to="/contacts"
                              onClick={() => pressedPage(4)}
                              className="no-underline transition-all duration-200">Kontaktai</Link>
                        <div className={`${chosenPage === 4 ? 'toolbar-line' : ''} bg-secondary`}></div>

                    </div>

                </div>

                {/* Flyout Menu */}
                <div id="flyoutMenu" className={`flex flex-col  text-2xl p-6 ${isShown ? "show" : ""}`}>
                    <div onClick={handleClick} className="flex justify-end">x</div>
                    <Link onClick={() => {
                        handleClick();
                        pressedPage(1)
                    }}
                          to="/about" className="no-underline transition-all duration-200 ">Apie mus</Link>
                    <div className={`${chosenPage === 1 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>

                    <Link onClick={() => {
                        handleClick();
                        pressedPage(2)
                    }}
                          to="/products"
                          className="no-underline transition-all duration-200 mt-8 ">Produktai</Link>
                    <div className={`${chosenPage === 2 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>

                    <Link onClick={() => {
                        handleClick();
                        pressedPage(3)
                    }}
                          to="/services"
                          className="no-underline transition-all duration-200 mt-8">Paslaugos</Link>
                    <div className={`${chosenPage === 3 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>

                    <Link onClick={() => {
                        handleClick();
                        pressedPage(4)
                    }}
                          to="/contacts"
                          className="no-underline transition-all duration-200 mt-8">Kontaktai</Link>
                    <div className={`${chosenPage === 4 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>

                </div>
            </div>
        </div>
    );
}

export default Toolbar;
