import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Toolbar = () => {
    const nav = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [chosenPage, setChosenPage] = useState(null);
    const [showProductsSmallScreen, setShowProductsSmallScreen] = useState(false);
    const [showServicesSmallScreen, setServicesProductsSmallScreen] = useState(false);


    const handleClick = () => {
        setIsShown(!isShown);
    };

    function pressedPage(id) {
        setChosenPage(id);
    };

    const [produktaiDropdownOpen, setProduktaiDropdownOpen] = useState(false);
    const [paslaugosDropdownOpen, setPaslaugosDropdownOpen] = useState(false);

    // Toggle the dropdown open/close
    const toggleDropdown = (page) => {
        if (page === "produktai") {
            setProduktaiDropdownOpen(!produktaiDropdownOpen); // Toggle dropdown visibility
        }
        if (page === "paslaugos") {
            setPaslaugosDropdownOpen(!paslaugosDropdownOpen); // Toggle dropdown visibility
        }
    };


    // Close the dropdown when a link is clicked
    const closeDropdown = () => {
        setProduktaiDropdownOpen(false); // Close the dropdown
        setPaslaugosDropdownOpen(false); // Close the dropdown

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
                        <Link to="/apie"
                              onClick={() => pressedPage(1)}
                              className="no-underline transition-all duration-200">Apie mus</Link>
                        <div className={`${chosenPage === 1 ? 'toolbar-line' : ''} bg-secondary`}></div>
                    </div>

                    <div className="dropdown flex flex-col gap-2">
                        <Link
                            to="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent navigation
                                toggleDropdown("produktai"); // Toggle the dropdown
                                pressedPage(2)
                            }}
                            className="flex items-center no-underline transition-all duration-200"
                        >
                            Produktai
                            <span className="arrow"></span>
                        </Link>

                        <div className={`${chosenPage === 2 ? 'toolbar-line' : ''} bg-secondary`}></div>

                        {produktaiDropdownOpen && (
                            <ul className="menu dropdown-content z-50 bg-base-100 box w-full shadow mt-[43px]">
                                <li>
                                    <Link to="/produktai/skaldytosMalkos" onClick={closeDropdown}>
                                        Skaldytos malkos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/produktai/apvaliMediena" onClick={closeDropdown}>
                                        Apvali mediena
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="dropdown flex flex-col gap-2">
                        <Link
                            to="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent navigation
                                toggleDropdown("paslaugos"); // Toggle the dropdown
                                pressedPage(3)
                            }}
                            className="flex items-center no-underline transition-all duration-200"
                        >
                            Paslaugos
                            <span className="arrow"></span>
                        </Link>

                        <div className={`${chosenPage === 3 ? 'toolbar-line' : ''} bg-secondary`}></div>

                        {paslaugosDropdownOpen && (
                            <ul className="menu dropdown-content z-50 bg-base-100 box w-full shadow mt-[43px]">
                                <li>
                                    <Link to="/paslaugos/miskininkyste" onClick={closeDropdown}>
                                        Miškininkyste
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/paslaugos/medienosRuosa" onClick={closeDropdown}>
                                        Medienos ruoša
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/paslaugos/transportoPaslaugos" onClick={closeDropdown}>
                                        Transporto paslaugos
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>


                    <div className="flex flex-col gap-2">
                        <Link to="/kontaktai"
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
                          to="/apie" className="no-underline transition-all duration-200 ">Apie mus</Link>
                    <div className={`${chosenPage === 1 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>

                    <div onClick={() => {
                        pressedPage(2)
                    }}
                          className="no-underline transition-all duration-200 mt-8 ">Produktai</div>
                    <div className={`${chosenPage === 2 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>

                    {chosenPage === 2 ?
                    <div>
                        <ul className=" ml-6 mt-6 ">
                            <li className="mt-3">
                                <Link to="/produktai/skaldytosMalkos" onClick={ handleClick}>
                                    Skaldytos malkos
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/produktai/apvaliMediena" onClick={ handleClick}>
                                    Apvali Mediena
                                </Link>
                            </li>

                        </ul>

                    </div> : ""}

                    <div onClick={() => {
                        pressedPage(3)
                    }}
                         className="no-underline transition-all duration-200 mt-8">Paslaugos
                    </div>
                    <div className={`${chosenPage === 3 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>
                    {chosenPage === 3 ?
                        <div>
                            <ul className=" ml-6 mt-6 ">
                                <li className="mt-3">
                                    <Link to="/paslaugos/miskinihnkyste" onClick={handleClick}>
                                        Miškininkystė
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link to="/paslaugos/medienosRuosa" onClick={handleClick}>
                                        Medienos ruoša
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link to="/paslaugos/TransportoPaslaugos" onClick={handleClick}>
                                       Transporto paslaugos
                                    </Link>
                                </li>
                            </ul>

                        </div> : ""}

                    <Link onClick={() => {
                        handleClick();
                        pressedPage(4)
                    }}
                          to="/kontaktai"
                          className="no-underline transition-all duration-200 mt-8">Kontaktai</Link>
                    <div className={`${chosenPage === 4 ? 'toolbar-line' : ''} bg-accent mt-2`}></div>

                </div>
            </div>
        </div>
    );
}

export default Toolbar;
