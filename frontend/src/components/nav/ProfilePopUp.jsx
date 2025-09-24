import React, { useContext } from 'react';
import { authDataContext } from '../../store/AuthContext';

const ProfilePopUp = ({ navigate, popupRef }) => {

  const { loggedinUserData, setLoggedinUserData, handleLogout } = useContext(authDataContext);


  // console.log(loggedinUserData);

  const profileLinks = [
    { name: "Profile", path: "/profile" },
    { name: "Contact", path: "/contact" },
    { name: "Orders", path: "/myorder" },
  ]

  return (

    <div
      ref={popupRef}
      className='
        absolute right-[1rem] top-[8rem] z-1
        w-[14vw]
        flex flex-col gap-[0.8rem]
        p-[0.9rem]
        border-[2px] border-rose-400 rounded-[1rem]
        bg-rose-900
      '>

      {
        profileLinks.map((item, index) => {
          return (
            <div
              onClick={() => navigate(item.path)}
              key={index}
              className='
                  text-[1.1rem] text-rose-800 font-medium 
                  bg-zinc-100 hover:bg-white
                  p-[0.5rem_1rem]
                  rounded-[0.5rem]
                  cursor-pointer duration-150
            '>{item.name}
            </div>
          )
        })
      }

      <div
        onClick={() => {
          if (loggedinUserData) {
            handleLogout()
            setLoggedinUserData(null);
            navigate('/')
          } else {
            navigate('/auth')
          }
        }}
        className='
            text-[1.1rem] text-rose-800 font-medium 
            bg-zinc-100 hover:bg-white
            p-[0.5rem_1rem]
            rounded-[0.5rem]
            cursor-pointer duration-150
        '>
        {
          loggedinUserData
            ? "Logout"
            : "Login"
        }
      </div>
    </div>
  );
}

export default ProfilePopUp