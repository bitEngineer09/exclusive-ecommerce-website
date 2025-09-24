import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authDataContext } from '../../store/AuthContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BsFillBagHeartFill } from "react-icons/bs";
import NavSmallerPhones from './NavSmallerPhones';
import NavBiggerPhones from './NavBiggerPhones';
import NavDesktop from './NavDesktop';

const PrimaryNavbar = () => {

    // USE STATES
    const [navSelection, setNavSelection] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [showProfilePopup, setShowProfilePopup] = useState(false);

    // USE LOCATION
    const location = useLocation();
    const currentPath = location.pathname;

    // USE NAVIGATE
    const navigate = useNavigate();

    // CONTEXT DATA
    const { setLoggedinUserData, loggedinUserData, handleLogout } = useContext(authDataContext);
    // console.log(loggedinUserData);


    const handleNavSelection = (navItem) => {
        setNavSelection(navItem);
    };


    return (
        <>
            <div
                className='
                    hidden md:block text-center
                    w-full h-[2.5rem]
                    text-[0.9rem]
                    tracking-wide
                    bg-white
                '>
                <p className='text-(--text-primary) font-semibold tracking-wider hidden xl:block pt-[0.55rem]'>"Discover unbeatable deals, trending products, and fast delivery—shop smart, live better, and enjoy every moment with effortless online shopping."
                </p>
                <p className='text-(--text-primary) font-semibold tracking-wider hidden md:block xl:hidden pt-[0.55rem]'>"Get the best deals, fast shipping, and a smooth shopping experience."
                </p>

            </div>

            {/* NAV LINKS LAPTOPS / DESKTOPS */}
            <NavDesktop
                handleNavSelection={handleNavSelection}
                loggedinUserData={loggedinUserData}
                setLoggedinUserData={setLoggedinUserData}
                navSelection={navSelection}
                handleLogout={handleLogout}
                currentPath={currentPath}
                navigate={navigate}
                showProfilePopup={showProfilePopup} setShowProfilePopup={setShowProfilePopup}
            />


            {/* NAV LINKS MOBILE */}
            <div
                className='
                    relative
                    w-full h-[4rem]
                    xs:flex xl:hidden items-center
                    bg-black
                '>
                <div className='w-full flex items-center justify-between gap-[0.4rem] px-[0.7rem] relative '>
                    <div className='flex '>
                        <p className='text-[1.6rem] font-medium cursor-pointer text-(--text-secondary)'>exclusive
                        </p>
                        <BsFillBagHeartFill
                            className='
                                text-[1.5rem] text-(--color-primary)
                                absolute left-[8.1rem] top-[0.3rem]
                            '/>
                    </div>
                    {
                        !isOpen
                            ? <GiHamburgerMenu
                                onClick={() => setIsOpen(true)}
                                className='text-[1.5rem] text-(--text-secondary)' />
                            :
                            <RxCross2
                                onClick={() => setIsOpen(false)}
                                className='text-[1.5rem] text-(--text-secondary)'
                            />
                    }
                </div>

                {
                    isOpen ?
                        <>
                            {/* FOR SMALLER PHONES */}
                            <NavSmallerPhones
                                handleNavSelection={handleNavSelection}
                                loggedinUserData={loggedinUserData}
                                setLoggedinUserData={setLoggedinUserData}
                                navSelection={navSelection}
                                handleLogout={handleLogout}
                                navigate={navigate}
                            />

                            {/* FOR BIGGER PHONES */}
                            <NavBiggerPhones
                                handleNavSelection={handleNavSelection}
                                loggedinUserData={loggedinUserData}
                                setLoggedinUserData={setLoggedinUserData}
                                navSelection={navSelection}
                                handleLogout={handleLogout}
                                navigate={navigate}
                            />
                        </>
                        : null
                }
            </div>
        </>

    )
}

export default PrimaryNavbar