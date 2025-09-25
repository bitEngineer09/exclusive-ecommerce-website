import React from 'react';

const ProfileInputForm = ({ loggedinUserData = {} }) => {
    return (
        <div className='p-[1rem_2rem]'>
            <p className='text-[1.3rem] border-l-[3px] border-rose-600 px-[1rem] mt-[1rem]'>Basic Information</p>
            <form action="" className='mt-[1.3rem] flex flex-col gap-[1rem]'>
                <div className='flex items-center justify-between gap-[2rem]'>
                    <div className='w-full'>
                        <label htmlFor="firstName" className="text-[0.9rem] text-zinc-400">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={loggedinUserData.firstName || ""}
                            className='
                                w-full
                                p-[1rem_1rem] 
                                bg-zinc-900
                                rounded-[0.5rem]
                                text-[1.1rem]
                                outline-none
                                mt-[0.3rem]
                            '
                        />
                    </div>

                    <div className='w-full'>
                        <label htmlFor="lastName" className="text-[0.9rem] text-zinc-400">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={loggedinUserData.lastName || ""}
                            className='
                                w-full
                                p-[1rem_1rem] 
                                bg-zinc-900
                                rounded-[0.5rem]
                                text-[1.1rem]
                                outline-none
                                mt-[0.3rem]
                            '
                        />
                    </div>
                </div>

                <div className='flex items-center justify-between gap-[2rem] mt-[1rem]'>
                    <div className='w-full'>
                        <label htmlFor="email" className="text-[0.9rem] text-zinc-400">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loggedinUserData.email || ""}
                            className='
                                w-full
                                p-[1rem_1rem] 
                                bg-zinc-900
                                rounded-[0.5rem]
                                text-[1.1rem]
                                outline-none
                                mt-[0.3rem]
                            '
                        />
                    </div>

                    <div className='w-full'>
                        <label htmlFor="phone" className="text-[0.9rem] text-zinc-400">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={loggedinUserData.phone || ""}
                            className='
                                w-full
                                p-[1rem_1rem] 
                                bg-zinc-900
                                rounded-[0.5rem]
                                text-[1.1rem]
                                outline-none
                                mt-[0.3rem]
                            '
                        />
                    </div>
                </div>

                <div className='flex items-center justify-between gap-[2rem] mt-[1rem]'>
                    <div className='w-full'>
                        <label htmlFor="dob" className="text-[0.9rem] text-zinc-400">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={loggedinUserData.dob ? loggedinUserData.dob.slice(0, 10) : ""}
                            className='
                                w-full
                                p-[1rem_1rem] 
                                bg-zinc-900
                                rounded-[0.5rem]
                                text-[1.1rem]
                                outline-none
                                mt-[0.3rem]
                            '
                        />
                    </div>

                    <div className='w-full'>
                        <label htmlFor="gender" className="text-[0.9rem] text-zinc-400">Gender</label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={loggedinUserData.gender || ""}
                            className='
                                w-full
                                p-[1rem_1rem] 
                                bg-zinc-900
                                rounded-[0.5rem]
                                text-[1.1rem]
                                outline-none
                                mt-[0.3rem]
                            '
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileInputForm;
