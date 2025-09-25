import axios from 'axios';
import { serverUrl } from '../config/serverUrl';


// LOGIN SERVICES
export const loginService = async (email, password) => {
    try {
        const result = await axios.post(serverUrl + "/api/auth/login",
            { email, password },
            { withCredentials: true }
        );
        return result;

    } catch (error) {
        return {
            success: false,
            message: error,
        }
    }
}


// SIGNUP SERVICES
export const signupService = async (firstName, lastName, email, phone, dob, gender, password) => {
    try {
        const response = await axios.post(serverUrl + "/api/auth/register", {
            firstName,
            lastName,
            email,
            phone,
            dob,
            gender,
            password,
        }, { withCredentials: true });

        return response;

    } catch (error) {
        return {
            success: false,
            message: error,
        }
    }
}



// LOGOUT SERVICES
export const logoutService = async () => {
    try {
        const response = await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true });
        return response;

    } catch (error) {
        return {
            success: false,
            message: error,
        }
    }
}


// GET CURRENT LOGGED IN USER DATA
export const getCurrentLoggedInUserData = async () => {
    try {
        const response = await axios.get(serverUrl + "/api/auth/getUserData", { withCredentials: true });
        return response;

    } catch (error) {
        return {
            success: false,
            message: error,
        }
    }
}


// GOOGLE SIGNUP SERVICES
export const googleSignupService = async (name, email) => {
    try {
        const response = await axios.post(serverUrl + "/api/auth/googleSignup", { name, email }, { withCredentials: true });
        // console.log(response);
        return response;

    } catch (error) {
        return {
            success: false,
            message: error,
        }
    }
}


// GOOGLE LOGIN SERVICES
export const googleLoginService = async (email) => {
    try {
        const response = await axios.post(serverUrl + "/api/auth/googleLogin", { email }, { withCredentials: true });
        console.log(response);
        return response;

    } catch (error) {
        return {
            success: false,
            message: error,
        }
    }
}

