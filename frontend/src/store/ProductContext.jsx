import React, { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../../../admin/services/product.services';
import { addReview, addToWishList, getProductById, getWishListData } from '../services/product.services';


export const productDataContext = createContext();

const ProductContext = ({ children }) => {

    // USE STATES
    const [wishlistData, setWishlistData] = useState([]);


    // GET ALL PRODUCTS DATA
    const getAllProductsData = async () => {
        try {
            const result = await getAllProducts();
            return result.data;
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: error
            }
        }
    }

    // GET PRODUCT BY ID
    const singleProduct = async (id) => {
        try {
            const result = await getProductById(id);
            return result.data;
        } catch (error) {
            return {
                success: false,
                message: error,
            }
        }
    }

    // ADD TO WIHSLIST
    const handleAddWishList = async (productId) => {
        try {
            const result = await addToWishList(productId);
            console.log(result)
            return result.data;
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: error,
            }
        }
    }


    // GET WISHLIST DATA
    const handleWishListData = async () => {
        try {
            const result = await getWishListData();
            // console.log(result?.data)
            if (result?.data) {
                setWishlistData(result?.data?.wishListData);
            }
            return result.data;
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: error,
            }
        }
    }

    useEffect(() => {
        getWishListData();
    })

    // console.log(wishlistData);



    // SUBMIT REVIEW
    const submitReview = async (rating, comment, productId) => {
        try {
            const response = await addReview(rating, comment, productId);
            console.log(response);
            return response;
        } catch (error) {
            return { success: false, message: error };
        }
    };



    const value = {
        getAllProductsData, singleProduct,
        handleAddWishList, handleWishListData,
        wishlistData, submitReview
    }

    return (
        <productDataContext.Provider value={value}>
            {children}
        </productDataContext.Provider >


    )
}

export default ProductContext