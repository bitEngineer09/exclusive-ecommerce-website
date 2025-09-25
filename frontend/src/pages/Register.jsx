import React, { useContext, useState } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import loginModel1 from '../assets/loginModel1.webp';
import loginModel from '../assets/loginModel.webp';
import google from '../assets/googleBlack.png';
import { authDataContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  // USE STATES
  const [showPassword, setShowPassword] = useState(false);
  const [authType, setAuthType] = useState(false);

  // Registration states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // CONTEXT DATA
  const {
    handleLogin, handleSignup,
    googleSignup, googleLogin
  } = useContext(authDataContext);

  // TOAST
  const handleToast = () => {
    toast.success(`${!authType ? "Logged In" : "Registered"}`, {
      position: "top-right",
      autoClose: 3000,
    })
  }

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (authType) {
      const result = await handleSignup(firstName, lastName, email, phone, dob, gender, password);
      if (result?.data?.success) {
        navigate('/');
        handleToast();
      }
    } else {
      const result = await handleLogin(email, password);
      if (result?.data?.success) {
        navigate('/');
        handleToast();
      }
    }
  }

  return (
    <div className='w-full min-h-screen bg-(--bg-color)'>
      <PrimaryNavbar />

      <div className="registerContainer w-full flex items-center h-[calc(100%-8rem)]">
        <div className="regMainContent h-[95%] w-full px-[1rem] xl:px-[5rem] grid grid-cols-[57%_38%] 2xl:grid-cols-[63%_33%] items-center justify-between">

          {/* IMAGE */}
          <div className="registerImage rounded-[0.5rem] ">
            <img src={loginModel1} alt="" className='w-full hidden 2xl:block h-[46rem] rounded-[0.5rem] object-cover' />
            <img src={loginModel} alt="" className='w-full block 2xl:hidden h-[42rem] rounded-[0.5rem] object-cover' />
          </div>

          {/* FORM */}
          <div className='w-[100%] h-[80%] justify-self-center'>
            <h1 className='font-medium text-[2rem] 2xl:text-[2.8rem] text-(--text-secondary)'>
              {!authType ? "Log in to exculsive" : "Create an account"}
            </h1>
            <p className='text-[1rem] text-(--text-secondary) mt-[0.3rem]'>Enter your details below</p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-[1.5rem] mt-[3rem]'>

              {/* SIGNUP INPUTS */}
              {authType && (
                <>
                  <div className='flex gap-[1rem]'>
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      type="text"
                      placeholder='First Name'
                      required
                      className='p-[1rem] outline-none text-[1rem] rounded-[0.7rem] text-white bg-zinc-700 w-1/2'
                    />
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      type="text"
                      placeholder='Last Name'
                      required
                      className='p-[1rem] outline-none text-[1rem] rounded-[0.7rem] text-white bg-zinc-700 w-1/2'
                    />
                  </div>

                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="tel"
                    placeholder='Phone Number'
                    required
                    className='p-[1rem] outline-none text-[1rem] rounded-[0.7rem] text-white bg-zinc-700'
                  />

                  <input
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                    type="date"
                    required
                    className='p-[1rem] outline-none text-[1rem] rounded-[0.7rem] text-white bg-zinc-700'
                  />

                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    className='p-[1rem] outline-none text-[1rem] rounded-[0.7rem] text-white bg-zinc-700'
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </>
              )}

              {/* COMMON FIELDS */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
                placeholder='Email'
                required
                className='p-[1rem] outline-none text-[1rem] rounded-[0.7rem] text-white bg-zinc-700'
              />

              <div className='relative'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={!showPassword ? "password" : "text"}
                  name="password"
                  value={password}
                  placeholder='Password'
                  required
                  className='p-[1rem] outline-none text-[1rem] text-white rounded-[0.7rem] bg-zinc-700 w-full'
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-[1rem] top-[1rem] cursor-pointer text-(--text-secondary)'
                >
                  {!showPassword ? "show" : "hide"}
                </span>
              </div>

              <button
                type="submit"
                className="
                  w-full h-[3.5rem]
                  bg-black cursor-pointer
                  text-(--text-secondary) mt-[1rem]
                  rounded-[0.5rem] font-medium tracking-wide
                  ease-in-out duration-150
                  hover:text-(--color-primary)
                ">
                {!authType ? "Log in" : "Sign up"}
              </button>

              <button
                onClick={async () => {
                  if (!authType) {
                    await googleLogin();
                    navigate('/');
                    handleToast();
                  } else {
                    await googleSignup(); // Will use dummy gender/dob/phone
                    navigate('/');
                    handleToast();
                  }
                }}
                type="button"
                className='
                  w-full h-[3.5rem]
                  flex items-center justify-center
                  gap-[1rem]
                  bg-zinc-300
                  rounded-[0.5rem] cursor-pointer
                '>
                <img src={google} alt="" className='size-[1.8rem]' />
                <p className='font-medium'>
                  {!authType ? "Log in with Google" : "Sign up with Google"}
                </p>
              </button>
            </form>

            <p className='text-center mt-[2rem] text-(--text-secondary)'>
              {!authType ? "Don't have an account ?" : "Already have an account ?"}{" "}
              <span
                onClick={() => setAuthType(!authType)}
                className='cursor-pointer text-(--color-primary) tracking-wider font-semibold'>
                {!authType ? "Sign up" : "Log in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
