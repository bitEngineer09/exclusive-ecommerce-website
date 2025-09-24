import React from 'react';
import SizeSort from './SizeSort';

const MobileTabFilterView = ({
    selectedCategories, setSelectedCategories,
    selectedSubCategories, setSelectedSubCategories,
    sortBy, setSortBy,
    selectedSize, setSelectedSize
}) => {
    return (
        <div
            className='
                absolute z-3
                block xl:hidden
                w-full sm:w-[17rem] lg:w-[19rem]
                px-[0.7rem]
                pt-[0.3rem]
                pb-[0.7rem]
                sm:p-[0.5rem] 
                sm:mt-[0.5rem] md:mt-[0.7rem]
                sm:ml-[0.7rem]
                sm:rounded-[0.4rem]
                bg-rose-800
            '>
            {/* CATEGORIES */}
            <div className="
                    filter
                    p-[0.7rem]
                    bg-[#0C0A09]
                    rounded-[0.3rem]
                    flex flex-col gap-[0.5rem]
                    text-[0.8rem] md:text-[0.9rem]
                ">
                <p className='text-(--text-secondary)'>CATEGORIES</p>
                <div className='flex gap-[0.7rem] text-(--text-secondary)'>
                    <input
                        checked={selectedCategories.includes("Men")}
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            if (isChecked) {
                                setSelectedCategories([...selectedCategories, "Men"]);
                            } else {
                                setSelectedCategories(selectedCategories.filter((prevCategory) => prevCategory !== "Men"));
                            }
                        }}
                        type="checkbox"
                        id="Men"
                    />
                    <label htmlFor="Men">Men</label>
                </div>

                <div className='flex gap-[0.7rem] text-(--text-secondary)'>
                    <input
                        checked={selectedCategories.includes("Women")}
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            if (isChecked) {
                                setSelectedCategories([...selectedCategories, "Women"]);
                            } else {
                                setSelectedCategories(selectedCategories.filter((prevCategory) => prevCategory !== "Women"));
                            }
                        }}
                        type="checkbox"
                        id="Women"
                    />
                    <label htmlFor="Women">Women</label>
                </div>

                <div className='flex gap-[0.7rem] text-(--text-secondary)'>
                    <input
                        checked={selectedCategories.includes("Kids")}
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            if (isChecked) {
                                setSelectedCategories([...selectedCategories, "Kids"]);
                            } else {
                                setSelectedCategories(selectedCategories.filter((prevCategory) => prevCategory !== "Kids"));
                            }
                        }}
                        type="checkbox"
                        id="Kids"
                    />
                    <label htmlFor="Kids">Kids</label>
                </div>

                {/* SUB-CATEGORIES */}
                <div
                    className="
                        filter
                        flex flex-col gap-[0.5rem]
                        p-[0.6rem]
                        mt-[10px]
                        rounded-[0.5rem]
                        text-[0.8rem] md:text-[0.9rem]
                        bg-[#292524]
                    ">
                    <p className='text-(--text-secondary)'>SUB-CATEGORIES</p>
                    <div className='flex gap-[0.7rem] text-(--text-secondary)'>
                        <input
                            checked={selectedSubCategories.includes("TopWear")}
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                if (isChecked) {
                                    setSelectedSubCategories([...selectedSubCategories, "TopWear"]);
                                } else {
                                    setSelectedSubCategories(selectedSubCategories.filter((prevCategory) => prevCategory !== "TopWear"))
                                }
                            }}
                            type="checkbox"
                            id="TopWear"
                        />
                        <label htmlFor="TopWear">Top-Wear</label>
                    </div>

                    <div className='flex gap-[0.7rem] text-(--text-secondary)'>
                        <input
                            checked={selectedSubCategories.includes("BottomWear")}
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                if (isChecked) {
                                    setSelectedSubCategories([...selectedSubCategories, "BottomWear"]);
                                } else {
                                    setSelectedSubCategories(selectedSubCategories.filter((prevCategory) => prevCategory !== "BottomWear"))
                                }
                            }}
                            type="checkbox"
                            id="BottomWear"
                        />
                        <label htmlFor="bottomWear">Bottom-Wear</label>
                    </div>

                    <div className='flex gap-[0.7rem] text-(--text-secondary)'>
                        <input
                            checked={selectedSubCategories.includes("WinterWear")}
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                if (isChecked) {
                                    setSelectedSubCategories([...selectedSubCategories, "WinterWear"]);
                                } else {
                                    setSelectedSubCategories(selectedSubCategories.filter((prevCategory) => prevCategory !== "WinterWear"))
                                }
                            }}
                            type="checkbox"
                            id="WinterWear"
                        />
                        <label htmlFor="WinterWear">Winter-Wear</label>
                    </div>
                </div>
            </div>

             {/* SIZES */}
            <SizeSort selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            
            {/* SORTING */}
            <select
                name="sorting"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                id=""
                className='
                    mt-[0.7rem]
                    p-[0.6rem]
                    rounded-[0.5rem]
                    text-white text-[0.8rem]
                    bg-[#0C0A09]
                '>
                <option value="relavent" className='bg-[#494745]'>Sort By: Relavent</option>
                <option value="lowToHigh" className='bg-[#494745]'>Sort By: Low to High</option>
                <option value="HighToLow" className='bg-[#494745]'>Sort By: High to Low</option>
            </select>

           
        </div>
    )
}

export default MobileTabFilterView