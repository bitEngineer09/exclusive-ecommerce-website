import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';


const SideBar = () => {

    const [sideItem, setSideItem] = useState("");
    const location = useLocation();

    const navigate = useNavigate();

    return (
        <div
            className='
                SideBar
                w-[32rem] h-full
                flex flex-col 
                bg-[#1C1917] text-(--text-secondary)
                px-[3rem]
            '>
            {/* <p className='text-[1.7rem] text-zinc-400 px-[3rem] '>Navigation</p> */}
            <div
                
                    onClick={() => {
                        navigate("/add");
                        setSideItem("addItems")
                    }}
                    className={`
                    flex items-center justify-start gap-[1.6rem]
                    mt-[2rem]
                    w-full p-[1.5rem_2rem] hover:bg-[#44403C] hover:text-(--text-secondary)
                    text-[2rem]
                    text-(--text-secondary) text-center 
                    border-zinc-400 ease-in-out duration-150 rounded-[0.9rem] 
                    cursor-pointer 
                    ${location.pathname === "/add" ? "bg-emerald-700 hover:bg-emerald-800" : ""}
                `}>
                <FaPlus />
                <span>Add Items</span>
            </div>
            <div
               onClick={() => {
                        navigate("/lists");
                        setSideItem("listItems")
                    }}
                className={`
                    flex items-center justify-start gap-[1.6rem]
                    mt-[2rem]
                    w-full p-[1.5rem_2rem] hover:bg-[#44403C] hover:text-(--text-secondary)
                    text-[2rem]
                    text-(--text-secondary) text-center 
                    border-zinc-400 ease-in-out duration-150 rounded-[0.9rem] 
                    cursor-pointer 
                    ${location.pathname === "/lists" ? "bg-rose-800 hover:bg-rose-800" : ""}
                `}>
                <FaList />
                <span>List Items</span>
            </div>
            <div
                onClick={() => {
                        navigate("/orders");
                        setSideItem("orders")
                    }}
                className={`
                    flex items-center justify-start gap-[1.6rem]
                    mt-[2rem]
                    w-full p-[1.5rem_2rem]  hover:bg-[#44403C] hover:text-(--text-secondary)
                    text-[2rem]
                    text-(--text-secondary) text-center 
                    border-zinc-400 ease-in-out duration-150 rounded-[0.9rem] 
                    cursor-pointer 
                    ${location.pathname === "/orders" ? "bg-amber-700 hover:bg-amber-700" : ""}
                `}>
                <FaCheck />
                <span>View Order</span>
            </div>
        </div>
    )
}

export default SideBar