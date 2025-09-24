import React from 'react';
import { IoSearch } from "react-icons/io5";

const NavBiggerPhones = ({
        handleNavSelection,
        loggedinUserData,
        setLoggedinUserData,
        navSelection,
        handleLogout,
        navigate
    }) => {


    return (
        <div
            className='
                navLists absolute z-2 top-[4rem] right-0
                w-[20rem] h-screen hidden md:flex flex-col items-center justify-start bg-black/80
            '>

            {/* NAV SEARCH */}
            <div className='justify-self-end relative backdrop-blur-xl w-full border-b-[1px] border-white'>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='What are you looking for ?'
                    className='
                        searchInputTablet
                        w-[85%] h-[3.4rem] 
                        text-[1.1rem]  text-(--text-secondary)
                        px-[1rem]
                        justify-self-start
                        outline-none
                    '/>
                <IoSearch
                    className='
                        text-[1.1rem] text-(--text-secondary)
                        absolute right-[1rem] top-[1.1rem]
                        cursor-pointer
                    '/>
            </div>

            <div
                onClick={() => handleNavSelection("home")}
                className={`
                    text-[1.1rem] 
                    border-b-[1px] border-zinc-400 text-(--text-secondary) 
                    w-full py-[0.9rem] 
                    flex items-center justify-center
                    cursor-pointer 
                `}>
                <span className=''>Home
                </span>
            </div>

            <div
                onClick={() => handleNavSelection("about")}
                className={`
                    text-[1.1rem] 
                    border-b-[1px] border-zinc-400 text-(--text-secondary) 
                    w-full py-[0.9rem] 
                    flex items-center justify-center
                    cursor-pointer 
                `}>
                <span>About
                </span>
            </div>

            <div
                onClick={() => handleNavSelection("contact")}
                className={`
                    text-[1.1rem] 
                    border-b-[1px] border-zinc-400 text-(--text-secondary) 
                    w-full py-[0.9rem] 
                    flex items-center justify-center
                    cursor-pointer 
                `}>
                <span>Contact
                </span>
            </div>

            <div
                onClick={() => handleNavSelection("orders")}
                className={`
                    text-[1.1rem] 
                    border-b-[1px] border-zinc-400 text-(--text-secondary) 
                    w-full py-[0.9rem]
                    flex items-center justify-center
                    cursor-pointer 
                `}>
                <span>Orders
                </span>
            </div>
            {
                !loggedinUserData ?
                    <div
                        onClick={() => {
                            handleNavSelection("signup");
                            navigate('/auth');
                        }}
                        className={`
                            text-[1.1rem] 
                            border-b-[1px] border-zinc-400 text-(--text-secondary) 
                            w-full text-nowrap py-[0.9rem] 
                            flex items-center justify-center
                            cursor-pointer 
                            ${navSelection === "signup"
                                ? "underline underline-offset-3 bg-zinc-200"
                                : ""}
                        `}>
                        <span>Log in
                        </span>
                    </div> :

                    <div
                        onClick={() => {
                            handleNavSelection("logout");
                            handleLogout();
                            setLoggedinUserData(null);

                        }}
                        className={`
                            text-[1.1rem] 
                            border-b-[1px] border-zinc-400 text-zinc-700 
                            w-full text-nowrap  py-[0.9rem]
                            flex items-center justify-center
                            cursor-pointer 
                            ${navSelection === "logout"
                                ? "underline underline-offset-3 bg-zinc-200"
                                : ""}
                        `}>
                        <span>Log out
                        </span>
                    </div>
            }
        </div>
    )
}

export default NavBiggerPhones