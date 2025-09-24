import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/nav/Nav'
import SideBar from '../components/nav/SideBar'
import { productDataContext } from '../store/ProductContext'
import { RxCross2 } from "react-icons/rx";
import { useParams } from 'react-router-dom';

const Lists = () => {

  // USE STATES
  const [products, setProducts] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("");

  // CONTEXT DATA
  const { handleAllProducts, deleteProductById } = useContext(productDataContext);

  // const {id} = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await handleAllProducts();
        // console.log(result);
        setProducts(result.products);
        return result;
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  // console.log(selectedProductId)

  return (
    <div className='listsPage w-full h-screen'>
      <Nav />
      <div className="mainContainer flex h-full">
        <SideBar />
        <div
          className="
            mainContent flex-1
            bg-[#0C0A09]
             py-[1rem] px-[3rem]
             overflow-y-auto
            ">
          <h1 className='text-[6rem] font-medium text-(--text-secondary)'>Your Products</h1>

          <div className="productCards grid grid-cols-3 gap-[2rem] mt-[2rem]">
            {
              products.map((product, index) => {
                return (
                  <div key={index} className='w-full gap-[2rem] p-[1rem] rounded-[1rem] flex bg-[#1C1917]'>
                    <img src={product.image1} alt="" className='size-[15rem] rounded-[1rem]' />
                    <div className="cardDetails flex justify-between w-full">
                      <div>
                        <h2 className='text-[1.9rem] text-(--text-secondary)'>{product.name.slice(0, 25) + "..."}</h2>
                        <span className='text-[1.3rem] text-(--text-secondary)'>{product.category}</span>
                      </div>
                      <RxCross2
                        onClick={() => {
                          setDeletePopup(true)
                          setSelectedProductId(product._id);
                        }}
                        className='text-red-400 text-[2.5rem] cursor-pointer' />
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>

        {/* DELETE deletePopup */}
        {
          deletePopup
            ? <div
              className="
            deletePopup
            flex flex-col items-center justify-center gap-[2rem]
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[42rem] h-[16rem]
            bg-zinc-300 rounded-[1rem]
          ">
              <p
                className='
                text-[2rem] text-(--text-primary) font-medium
                p-[1rem_2rem]
              '>Are you sure to delete this product ?</p>
              <div className='w-full flex justify-center gap-[3rem]'>
                <button
                  onClick={() => setDeletePopup(false)}
                  className='
                bg-white 
                w-[10rem] h-[4rem]
                text-[2rem] font-medium rounded-[1rem]
                cursor-pointer
                '>No</button>

                <button
                  onClick={async () => {
                    await deleteProductById(selectedProductId);
                    setDeletePopup(false);
                    setProducts((prev) => prev.filter((product) => product._id !== selectedProductId));
                    
                  }}
                  className='
                bg-black text-(--text-secondary)
                w-[10rem] h-[4rem]
                text-[2rem] font-medium rounded-[1rem]
                cursor-pointer
                '>Yes</button>
              </div>
            </div>
            : ""
        }
      </div>
    </div>
  )
}

export default Lists