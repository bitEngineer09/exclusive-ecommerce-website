import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import FooterSecondary from './FooterSecondary';

const Footer = () => {
  return (
    <>
      <div
        className='
          grid grid-cols-[65%_35%]
          px-[5rem] pt-[5rem] pb-[2rem]
          mt-[5rem]
          bg-[var(--bg-footer)]
          border-t-[4px] border-zinc-700
        '>
        <div className='grid grid-cols-4'>
          {/* LEFT SECTION */}
          <div>
            <h3 className='text-[1.2rem] font-medium text-(--color-primary)'>Account</h3>
            <ul className='text-(--text-secondary) mt-[1rem]'>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
            </ul>
          </div>

          <div>
            <h3 className='text-[1.2rem] font-medium text-(--color-primary)'>Company</h3>
            <ul className='text-(--text-secondary) mt-[1rem]'>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
            </ul>
          </div>

          <div>
            <h3 className='text-[1.2rem] font-medium text-(--color-primary)'>Get Help</h3>
            <ul className='text-(--text-secondary) mt-[1rem]'>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
            </ul>
          </div>

          <div>
            <h3 className='text-[1.2rem] font-medium text-(--color-primary)'>Connect</h3>
            <ul className='text-(--text-secondary) mt-[1rem]'>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
              <li>Login</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='flex items-center h-[3.5rem]'>
          <input
            type="email"
            placeholder='Email Address'
            className='
              w-[90%] p-[1rem]
              border border-zinc-300
              outline-none
              bg-white
            '/>
          <div
            className="
            arrow
            w-[10%] h-[100%]
            text-[1.6rem]
            flex items-center justify-center
            bg-(--color-primary)
            text-(--text-secondary)
          ">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <FooterSecondary />
    </>
  )
}

export default Footer