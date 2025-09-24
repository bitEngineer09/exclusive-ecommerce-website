import React, { useState } from 'react';
import { MdFilterAlt } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileTabFilterView from './MobileTabFilterView';
import SizeSort from '../FilterSidebar/SizeSort';
import CategorySort from './CategorySort';

const FilterSideBar = ({
    selectedCategories, setSelectedCategories,
    selectedSubCategories, setSelectedSubCategories,
    sortBy, setSortBy,
    selectedSize, setSelectedSize
}) => {

    // USE STATES
    const [showFilter, setShowFilter] = useState(false);


    return (
        <div
            className='
                w-full xl:min-w-[20rem] xl:w-[23vw] xl:max-w-[24rem]
                relative
            '>
            <p
                className='
                    w-full
                    filterHeading
                    xl:mt-0
                    p-[0.4rem_0.7rem] xl:p-[1rem]
                    bg-[#1C1917]
                    text-(--text-secondary) text-[1rem] md:text-[1.2rem] xl:text-[1.7rem]
                    flex items-center xl:gap-[0.4rem]
                    xl:rounded-[0rem]
                '>
                Filters
                <MdFilterAlt className='hidden xl:block' />
                <RiArrowDropDownLine
                    onClick={() => setShowFilter(!showFilter)}
                    className='text-[2.5rem] block xl:hidden'
                />
            </p>

            {
                showFilter
                    ? <MobileTabFilterView
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedSubCategories={selectedSubCategories}
                        setSelectedSubCategories={setSelectedSubCategories}
                        sortBy={sortBy} setSortBy={setSortBy}
                        selectedSize={selectedSize} setSelectedSize={setSelectedSize}
                    />
                    : ""
            }

            <div
                className='
                    hidden xl:block
                    h-full
                    xl:px-[1rem]
                    mt-[1rem] xl:mt-0
                    rounded-[1rem] xl:rounded-[0rem]
                    bg-[#1C1917]
                '>

                {/* SORTING */}
                <select
                    name="sorting"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    id=""
                    className='text-white bg-stone-950 p-[0.7rem] rounded-[0.4rem] mb-[1rem]'>
                    <option value="relevant" className='bg-stone-950'>Sort By : Relevant</option>
                    <option value="lowToHigh" className='bg-stone-950'>Sort By : Low to High</option>
                    <option value="highToLow" className='bg-stone-950'>Sort By : High to Low</option>
                </select>

                <div className='sticky top-[1rem]'>
                    {/* CATEGORIES */}
                    <CategorySort
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedSubCategories={selectedSubCategories}
                        setSelectedSubCategories={setSelectedSubCategories}
                    />

                    {/* SIZES */}
                    <SizeSort selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                </div>
            </div>

        </div>
    )
}

export default FilterSideBar