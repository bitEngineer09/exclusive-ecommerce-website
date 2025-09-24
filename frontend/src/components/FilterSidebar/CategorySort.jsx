import React from 'react'

const CategorySort = ({
    selectedCategories, setSelectedCategories,
    selectedSubCategories, setSelectedSubCategories,
}) => {
    return (
        <div
            className="
                filter
                flex flex-col gap-[0.5rem]
                p-[1rem]
                bg-stone-950 rounded-[0.4rem]
            ">
            <p className='text-(--text-secondary)'>CATEGORIES</p>
            <div className='flex gap-[0.7rem] text-(--text-secondary) mt-[0.5rem]'>
                <input
                    checked={selectedCategories.includes("Men")}
                    onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                            setSelectedCategories([...selectedCategories, "Men"])
                        } else {
                            setSelectedCategories(selectedCategories.filter((prevCategory) => prevCategory !== "Men"));
                        }
                    }}
                    type="checkbox"
                    id="men"
                />
                <label htmlFor="men">Men</label>
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
                    id="women"
                />
                <label htmlFor="women">Women</label>
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
                    id="kids"
                />
                <label htmlFor="kids">Kids</label>
            </div>

            {/* SUB-CATEGORIES */}
            <div className="filter p-[1rem] bg-stone-800 rounded-[0.4rem] flex flex-col gap-[0.5rem] mt-[1rem]">
                <p className='text-(--text-secondary)'>SUB-CATEGORIES</p>
                <div className='flex gap-[0.7rem] text-(--text-secondary) mt-[0.5rem]'>
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
                        id="topWear"
                    />
                    <label htmlFor="topWear">Top-Wear</label>
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
                        id="bottomWear"
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
                        id="winterWear"
                    />
                    <label htmlFor="winterWear">Winter-Wear</label>
                </div>
            </div>
        </div>
    )
}

export default CategorySort