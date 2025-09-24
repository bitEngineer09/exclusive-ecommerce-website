import React from 'react'

const SizeSort = ({ selectedSize, setSelectedSize }) => {

    const sizes = ["S", "M", "XL", "XXL", "XXXL"]

    const toggleSize = (size) => {
        if (selectedSize.includes(size)) {
            setSelectedSize(selectedSize.filter(s => s !== size));
        } else {
            setSelectedSize([...selectedSize, size]);
        }
    }

    return (
        <div
            className="
                filter
                flex flex-col gap-[0.5rem]
                mt-[1rem]
                p-[0.7rem] md:p-[1rem]
                bg-stone-950 rounded-[0.4rem]
            ">
            <p className='text-(--text-secondary) text-[0.8rem] md:text-[1rem]'>SIZE</p>
            <div className='flex gap-[1rem] p-'>
                {
                    sizes.map((size, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => toggleSize(size)}
                                className={`
                                    sizeContainer
                                    flex items-center justify-center
                                    text-(--text-secondary) text-[0.8rem] md:text-[1rem]
                                    ${size === "XXXL" ? "w-[4rem]" : "w-[2.7rem]"}
                                    h-[1.8rem] md:h-[2.5rem]
                                    rounded-[0.3rem]
                                    cursor-pointer 
                                    ease-in-out duration-150
                                    ${selectedSize.includes(size) ? "bg-rose-700" : "bg-zinc-800 hover:bg-slate-700"}
                                `}>{size}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SizeSort