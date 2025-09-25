import React, { useContext, useEffect, useState } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import FilterSideBar from '../components/FilterSidebar/FilterSideBar';
import { productDataContext } from '../store/ProductContext';
import { MdVerified } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { cartDataContext } from '../store/CartContext';

const Collections = () => {

  // USE STATES
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterdProducts] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [wishListProductIds, setWishListProductIds] = useState([]);


  // USE NAVIGATE
  const navigate = useNavigate();

  // CONTEXT DATA
  const { getAllProductsData, handleAddWishList, handleWishListData } = useContext(productDataContext);
  const { addItemsToCart } = useContext(cartDataContext);


  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const result = await getAllProductsData();
        setProducts(result?.products);
        // console.log(result);

      } catch (error) {
        console.log(error);
      }
    }
    fetchAllProducts();
  }, []);


  useEffect(() => {
    const fetchWishListData = async () => {
      try {
        const response = await handleWishListData();
        // console.log(response);
        setWishListProductIds(response?.wishListData?.map((item) => item.productId._id));
      } catch (error) {
        console.log(error);
      }
    }
    fetchWishListData();
  }, [wishListProductIds])



  useEffect(() => {
    let filtered = products
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category));
    }

    if (selectedSubCategories.length > 0) {
      filtered = filtered.filter((product) => selectedSubCategories.includes(product.subCategory));
    }

    if (sortBy === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);

    } else if (sortBy == "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    if (selectedSize.length > 0) {
      filtered = filtered.filter((product) =>
        // .some checks if atleast one element matches from the array
        product.sizes?.some(size => selectedSize.includes(size))
      );
    }
    // "relevant" = no sorting (default)

    setFilterdProducts(filtered);
  }, [selectedCategories, selectedSubCategories, sortBy, selectedSize, products]);

  // console.log(selectedSize)


  return (

    <div className='w-full bg-(--bg-color)'>
      {/* NAV BAR */}
      <PrimaryNavbar />
      <div className='flex flex-col items-stretch xl:flex-row min-h-full'>
        <FilterSideBar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedSubCategories={selectedSubCategories}
          setSelectedSubCategories={setSelectedSubCategories}
          sortBy={sortBy} setSortBy={setSortBy}
          selectedSize={selectedSize} setSelectedSize={setSelectedSize}
        />

        {/* RIGHT CONTENT */}
        <div className="rightContent p-[0.4rem_0.7rem] xl:p-[0.7rem_3rem] flex-1 xl:pb-[3rem] min-h-screen">
          <div className="header flex flex-col justify-center items-center h-full">

            {/* HEADING */}
            <h1 className='text-white text-[1.9rem] md:text-[2.4rem] xl:text-[2.7rem] text-center mb-[1rem]'>All Collections</h1>

            {/*  */}
            <div
              className='
                collections
                w-full min-h-screen
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4
                gap-x-[0.5rem]
                gap-y-[0.6rem]
                2xl:gap-[1.5rem]
                md:gap-x-[0.5rem] md:gap-y-[0.8rem] 
                '>
              {
                // PRODUCT CARDS
                filteredProducts.map((product, index) => {
                  // console.log(product._id)
                  return (
                    <div
                      key={product._id || index}
                      className='
                      bg-stone-900
                      h-[40rem]
                      flex flex-col
                      p-[0.2rem] 2xl:p-[0.6rem]
                      pb-[0.5rem] 
                      text-(--text-secondary)
                      rounded-[0.5rem]
                    '  >

                      {/* PRODUCT IMAGE */}
                      <img
                        onClick={() => navigate(`/collections/${product._id}`)}
                        src={product.image1}
                        alt="productImage"
                        className="
                        h-[53vw] sm:h-[45vw] md:h-[32vw] xl:h-[20vw] 2xl:h-[17vw]
                        object-cover rounded-[0.5rem]
                        cursor-pointer
                    "/>

                      <p
                        onClick={() => navigate(`/collections/${product._id}`)}
                        className='
                        text-[#E4E4E7]
                        text-[0.65rem] sm:text-[0.75rem] md:text-[0.85rem] xl:text-[1rem]
                        h-[2rem]
                        mt-[0.5rem] 2xl:mt-[1rem]
                        hover:text-rose-400
                        ease-in-out duration-100 cursor-pointer
                      '>{product.name.slice(0, 30) + "..."}</p>

                      <p
                        className='
                        hidden xl:block
                        text-zinc-500
                        text-[0.65rem] sm:text-[0.75rem] md:text-[0.85rem] xl:text-[0.8rem]
                        h-[2rem] mb-[1.8rem]
                      '>{product.description.slice(0, 110) + "..."}</p>
                      <div className='flex items-center justify-between'>
                        <p
                          className='
                        text-zinc-400
                        text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1.1rem]
                        my-[0.3rem]
                      '>{product.category}</p>
                        <div className='flex'>
                          <IoStarSharp className='cursor-pointer text-yellow-400' />
                          <IoStarSharp className='cursor-pointer text-yellow-400' />
                          <IoStarSharp className='cursor-pointer text-yellow-400' />
                          <IoStarSharp className='cursor-pointer text-yellow-400' />
                          <IoStarSharp className='cursor-pointer text-yellow-400' />
                        </div>
                      </div>

                      {/* BEST SELLER */}
                      {
                        product.bestSeller &&
                        <p
                          className='
                              text-[0.7rem] md:text-[0.8rem] xl:text-[0.9rem]
                              bg-zinc-600 text-[#E4E4E7]
                              py-[0.2rem]
                              my-[0.3rem] xl:my-[0.5rem]
                              rounded-[0.2rem]
                              flex items-center justify-center
                              gap-[0.5rem]
                              '>Best Seller <MdVerified className='text-emerald-500' /></p>
                      }
                      <div className='relative mt-[0.3rem] flex'>
                        <span
                          className='
                          text-[0.6rem] md:text-[0.8rem] xl:text-[0.9rem]
                          absolute top-[0.1rem] sm:top-[0.2rem]
                        '>₹</span>
                        <p
                          className='
                          text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem]
                          ml-[0.5rem] md:ml-[0.7rem] xl:ml-[0.9rem]
                          tracking-wider
                        '> {product.price.toLocaleString()}</p>
                        <div
                          className='
                          text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] xl:text-[1.1rem]
                          text-zinc-500
                          ml-[0.4rem]
                        '>
                          <p>M.R.P <span className='line-through'>{(product.price * 1.1).toFixed(2)}</span></p>
                        </div>
                      </div>

                      <div className="addToCart flex items-center justify-between">
                        <button
                          onClick={() => addItemsToCart(product._id)}
                          className='
                              text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] 
                              py-[0.4rem] sm:py-[0.5rem] md:py-[0.6rem] xl:py-[0.6rem]
                              mt-[0.4rem] xl:mt-[0.6rem]
                              bg-rose-800
                              font-medium tracking-wide
                              w-[50%] sm:w-[43%] md:w-[45%] 2xl:w-[7rem]
                              rounded-[0.3rem] 2xl:rounded-[0.4rem]
                              cursor-pointer
                        '>Add to Cart
                        </button>
                        {/* <img src={heart} alt="heart" className='w-[2rem]' /> */}
                        <GoHeartFill
                          onClick={() => handleAddWishList(product._id)}
                          className={`
                            size-[1.7rem]
                            hover:text-rose-700 hover:scale-120 ease-in-out duration-150
                            cursor-pointer
                            ${wishListProductIds?.includes(product._id) ? "text-rose-700" : "text-zinc-400"}
                          `} />
                      </div>

                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections