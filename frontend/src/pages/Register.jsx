import React, { useContext } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import loginModel1 from '../assets/loginModel1.webp';
import loginModel from '../assets/loginModel.webp';
import google from '../assets/googleBlack.png';
import { useState } from 'react';
import { authDataContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Register = () => {

  // USE STATES
  const [showPassword, setShowPassword] = useState(false);
  const [authType, setAuthType] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  // CONTEXT DATA
  const {
    handleLogin, handleSignup,
    googleSignup, googleLogin
  } = useContext(authDataContext);



  // HANDLE ADD TOAST
  const handleToast = () => {
    toast.success(`${!authType ? "Logged In" : "Registered"}`, {
      position: "top-right",
      autoClose: 3000,
    })
  }





  return (
    <div className='w-full h-screen bg-(--bg-color)'>

      {/* NAV BAR */}
      <PrimaryNavbar />

      {/* REGISTER CONTAINER */}
      <div className="registerContainer w-full flex items-center h-[calc(100%-8rem)]">
        <div
          className="
            regMainContent
            h-[95%] w-full
            px-[1rem] xl:px-[5rem]
            grid grid-cols-[57%_38%] 2xl:grid-cols-[63%_33%] items-center justify-between
          ">
          {/* IMAGE SECTION */}
          <div className="registerImage rounded-[0.5rem] ">
            <img src={loginModel1} alt="" className='w-full hidden 2xl:block h-[46rem] rounded-[0.5rem] object-cover' />
            <img src={loginModel} alt="" className='w-full block 2xl:hidden h-[42rem] rounded-[0.5rem] object-cover' />
          </div>

          {/* INFO SECTIION */}
          <div className='w-[100%] h-[80%] justify-self-center'>
            <h1 className='font-medium text-[2rem] 2xl:text-[2.8rem] text-(--text-secondary)'>
              {!authType ? "Log in to exculsive" : "Create an account"}
            </h1>
            <p className='text-[1rem] text-(--text-secondary) mt-[0.3rem]'>Enter your details below</p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                !authType ? await handleLogin(email, password) : await handleSignup(name, email, password);
                navigate('/')
                handleToast()
              }}
              className='flex flex-col gap-[2rem] mt-[4rem]'>
              {
                !authType
                  ? ""
                  : <input
                    onChange={
                      (e) => {
                        setName(e.target.value)
                      }
                    }
                    type="text"
                    name="name"
                    value={name}
                    placeholder='Name'
                    className='name p-[1rem] outline-none  text-[1rem] rounded-[0.7rem] text-white bg-zinc-700'
                  />
              }

              <input
                onChange={
                  (e) => {
                    setEmail(e.target.value)
                  }
                }
                type="email"
                name="email"
                value={email}
                placeholder='Email'
                className='email p-[1rem] outline-none  text-[1rem] rounded-[0.7rem] text-white bg-zinc-700'
              />

              <div className='relative'>
                <input
                  onChange={
                    (e) => {
                      setPassword(e.target.value)
                    }
                  }
                  type={!showPassword ? "password" : "text"}
                  name="password"
                  value={password}
                  placeholder='password'
                  className='password  p-[1rem] outline-none  text-[1rem] text-white rounded-[0.7rem] bg-zinc-700 w-full'
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-[1rem] top-[1rem] cursor-pointer text-(--text-secondary)'>{!showPassword ? "show" : "hide"}</span>
              </div>

              <button
                type="submit"
                className="
                createAccount
                w-full h-[3.5rem]
                bg-black cursor-pointer
                text-(--text-secondary) mt-[2rem]
                rounded-[0.5rem] font-medium tracking-wide
                ease-in-out duration-150
                hover:text-(--color-primary)
                ">
                {!authType ? "Log in" : " Sign up "}
              </button>

              <button
                onClick={async () => {
                  if (!authType) {
                    await googleLogin();
                    navigate('/');
                    handleToast()
                  } else {
                    await googleSignup();
                    navigate('/');
                    handleToast();
                  }
                }}
                type="button"
                className='
                  signInWithGoogle
                  w-full h-[3.5rem]
                  flex items-center justify-center
                  gap-[1rem]
                  bg-zinc-300
                  rounded-[0.5rem] cursor-pointer
                '>
                <img src={google} alt="" className='size-[1.8rem]' />
                <p 
                  className='
                  font-medium
                  '>{!authType ? "Log in with Google" : "Sign up with Google"}</p>
              </button>
            </form>

            <p className='text-center mt-[2rem] text-(--text-secondary)'>{!authType ? "Don't have an account ?" : "Already have an account ?"} {""}
              <span
                onClick={() => setAuthType(!authType)}
                className='cursor-pointer text-(--color-primary) tracking-wider font-semibold'>{!authType ? "Sign up" : "Log in"}
              </span>
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Register