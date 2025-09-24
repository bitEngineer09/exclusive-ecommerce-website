import React from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import ModelSlider from '../components/Home/ModelSlider';
import LatestCollections from '../components/Home/LatestCollections';
import { categoryImages } from '../helpers/shopCategory';
import Footer from '../components/Footer/Footer';
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-(--bg-color)'>
      {/* NAV BAR */}
      <PrimaryNavbar />

      {/* MODEL SLIDER */}
      <div className='relative 2xl:px-[14rem] xl:mt-[1.5rem]'>
        <ModelSlider />
        <div
          className="
            shopNow
            sm:font-semibold
            flex items-center justify-center
            absolute
            left-[0.7rem] top-[1rem]
            lg:top-[18.2rem] lg:left-[4.5rem]
            2xl:top-[19.9rem] 2xl:left-[19rem]
            w-[6.5rem] h-[2.5rem]
            lg:w-[13rem] lg:h-[3.8rem]
            2xl:w-[11rem] 2xl:h-[3.4rem]
            text-[0.9rem] lg:text-[1.1rem] rounded-[0.7rem]
            bg-black text-(--text-secondary) hover:bg-white hover:text-(--color-primary)
            ease-in-out duration-180
            cursor-pointer
          "
          onClick={() => navigate('collections')}
          >
          SHOP NOW
        </div>

        {/* SHOP BY CATEGORY */}
        <h2
          className='
            w-full md:h-[5rem] 
            text-[1.5rem] md:text-[2.7rem] 2xl:text-[3rem]
            text-(--text-secondary)
            font-medium text-center
            mt-[2rem] lg:mt-[4rem] 2xl:mt-[3rem]
            px-[1rem] 2xl:px-0 
            '>Shop by <span className='text-rose-700'>Category</span>
        </h2>
        <div
          className='
            shopByCategory
            flex
            h-[15.5rem] sm:h-[19rem] lg:h-[25rem] 2xl:h-[26rem]
            p-[1rem_0.7rem] lg:p-[2rem_1rem] 2xl:p-0
            overflow-x-auto 2xl:overflow-hidden
            mt-[1rem]
            gap-[1rem] 
          '>
          {
            categoryImages.map((categoryImages, index) => {
              return (
                <div
                  key={index}
                  className='
                    flex-shrink-0
                    lg:w-[13rem] 2xl:w-[14.3rem] 
                    2xl:mt-[1rem]
                    '>
                  <img
                    src={categoryImages.url}
                    alt=""
                    loading="lazy"
                    className='
                      h-[95%] lg:h-[90%]
                      lg:w-[25rem] 
                      2xl:h-[90%]
                      rounded-[0.2rem] lg:rounded-[0.5rem]
                      object-cover cursor-pointer 
                    '/>
                  <p
                    className='
                      text-center text-[1rem] lg:text-[1.1rem] 2xl:text-[1.3rem] text-white
                      font-medium tracking-wide
                      mt-1 lg:mt-2
                      cursor-pointer
                      '>{categoryImages.category.toUpperCase()}
                  </p>
                </div>
              )
            })
          }
        </div>


        {/* LATEST COLLECTIONS */}
        <LatestCollections navigate={navigate} />
        
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  )
}

export default Home