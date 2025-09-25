import React from "react";

const DeliveryInfo = ({
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    pincode,
    country,
    phone,
    onChangeHandler
}) => {
    return (
        <div className="">
            <h2 className='text-[3rem] font-medium'>DELIVERY <span className="text-pink-700">INFORMATION</span></h2>
            <form action="" className='space-y-[1rem] mt-[2rem] bg-stone-900 p-[1.5rem] rounded-[1rem]'>
                <div className='flex gap-[1rem]'>
                    <div>
                        <label htmlFor="firstName" className="text-[0.9rem] text-zinc-300">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={onChangeHandler}
                            className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="text-[0.9rem] text-zinc-300">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={onChangeHandler}
                            className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="text-[0.9rem] text-zinc-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChangeHandler}
                        className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                    />
                </div>

                <label htmlFor="street" className="text-[0.9rem] text-zinc-300">Street</label>
                <input
                    type="text"
                    name="street"
                    id="street"
                    value={street}
                    onChange={onChangeHandler}
                    className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                />

                <div className='flex gap-[1rem] w-full'>
                    <div className="w-full">
                        <label htmlFor="city" className="text-[0.9rem] text-zinc-300">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={onChangeHandler}
                            className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="state" className="text-[0.9rem] text-zinc-300">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={state}
                            onChange={onChangeHandler}
                            className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                        />
                    </div>
                </div>

                <div className='flex gap-[1rem]'>
                    <div>
                        <label htmlFor="pincode" className="text-[0.9rem] text-zinc-300">Pincode</label>
                        <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={pincode}
                            onChange={onChangeHandler}
                            className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                        />
                    </div>

                    <div>
                        <label htmlFor="country" className="text-[0.9rem] text-zinc-300">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={country}
                            onChange={onChangeHandler}
                            className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="text-[0.9rem] text-zinc-300">Phone</label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={onChangeHandler}
                        className='px-[1rem] w-full h-[3.5rem] rounded-[0.5rem] text-white outline-none bg-zinc-950'
                    />
                </div>
            </form>
        </div>
    );
};

export default DeliveryInfo;