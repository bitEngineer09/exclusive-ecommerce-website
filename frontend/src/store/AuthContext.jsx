import React, { createContext, useEffect, useState } from 'react'
import { getCurrentLoggedInUserData, googleLoginService, googleSignupService, loginService, logoutService, signupService } from '../services/auth.services';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/Firebase';

export const authDataContext = createContext();
const AuthContext = ({ children }) => {

    // USE STATES
    // const [userId, setUserId] = useState("");
    const [loggedinUserData, setLoggedinUserData] = useState("");

    // LOGIN CONTEXT
    const handleLogin = async (email, password) => {
        try {
            const result = await loginService(email, password);
            // console.log(result?.data?.user?.id);
            // setUserId(result?.data?.user?.id);
            setLoggedinUserData(result?.data?.user)
            return result;

        } catch (error) {
            return {
                success: false,
                message: error,
            }
        }
    }
    // console.log(userId);
    // console.log(loggedinUserData);


    // SIGNUP CONTEXT
    const handleSignup = async (name, email, password) => {
        try {
            const result = await signupService(name, email, password);
            // console.log(result);
            return result;

        } catch (error) {
            return {
                success: false,
                message: error,
            }
        }
    }


    // LOGOUT CONTEXT
    const handleLogout = async () => {
        try {
            const result = await logoutService();
            // console.log(result);
            return result;

        } catch (error) {
            return {
                success: false,
                message: error,
            }
        }
    }


    // GET CURRENT LOGGED IN USER DATA
    const handleLoggedInUser = async () => {
        try {
            const result = await getCurrentLoggedInUserData();
            // console.log(result); 
            return result;
        } catch (error) {
            return {
                success: false,
                message: error
            }
        }
    }


    // GOOGLE SIGNUP
    const googleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("UserCredential: ", result);

            const user = result.user;
            // const uId = user.uid;
            const name = user.displayName;
            const email = user.email;
            // console.log("uId:", user.uid);
            // console.log("name:", user.displayName);
            // console.log("email:", user.email);
            // console.log("photo:", user.photoURL);

            const response = await googleSignupService(name, email);
            setLoggedinUserData(response?.data?.user);
            // console.log(response.data);
            return response.data;

        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: error,
            }
        }
    }

    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("UserCredential: ", result);

            const user = result.user;
            const email = user.email;
            
            const response = await googleLoginService(email);
            setLoggedinUserData(response?.data?.user);
            console.log(response.data);
            return response.data;

        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: error,
            }
        }
    }




    useEffect(() => {
        const fetchCurrentLoggedinUserData = async () => {
            try {
                const result = await handleLoggedInUser();
                // console.log(result?.data?.user);
                setLoggedinUserData(result?.data?.user);
            } catch (error) {
                return {
                    success: false,
                    message: error,
                }
            }
        }
        fetchCurrentLoggedinUserData();
    }, [])



    const value = {

        loggedinUserData, setLoggedinUserData,

        handleLogin, handleSignup, handleLogout, handleLoggedInUser,

        googleSignup, googleLogin
    }

    return (
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
    )
}


export default AuthContext