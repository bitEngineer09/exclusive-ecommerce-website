import React from 'react';
import Nav from '../components/nav/Nav';
import SideBar from '../components/nav/SideBar';

const Orders = () => {
  return (
    <div className='w-full h-screen'>
      <Nav />
      <div className="mainContainer flex h-screen">
        <SideBar />
        <div className="mainContent flex-1 bg-[#0C0A09]">

        </div>
      </div>
    </div>
  )
}

export default Orders