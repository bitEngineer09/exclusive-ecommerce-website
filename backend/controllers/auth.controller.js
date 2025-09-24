import {
    authenticate,
    clearSession,
    createAccessTokenAdmin,
    createUserByEmail,
    findUserByEmail,
    findUserById,
    hashPassword,
    registerUser,
    verifyPassword
} from "../services/auth.services.js";

import {
    loginUserValidator,
    registerUserValidator
} from "../validators/auth.validator.js";


// REGISTER CONTROLLER
export const register = async (req, res) => {
    try {
        // validator
        const { data, error } = registerUserValidator.safeParse(req.body);
        if (error) return res.status(400).json({ success: false, message: `registerd user validation error: ${error}` });

        const { name, email, password } = data
        console.log("register body data:", data);

        // check if same email exists ?
        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ success: false, message: "User already exists" });

        const encryptedPassword = await hashPassword(password);
        if (!encryptedPassword) return res.status(500).json({ success: false, message: "password encryption error" });

        const newUser = await registerUser(name, email, encryptedPassword);
        if (!newUser) return res.status(500).json({ success: false, message: "New User registration error" });

        await authenticate(req, res, newUser);

        return res
            .status(201)
            .json({
                success: true,
                message: "User registered",
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            });

    } catch (error) {
        console.log("register controller error: ", error);
        return res.status(500).json({ success: false, message: error });
    }
}


// LOGIN CONTROLLER-------------------------------------------------
export const login = async (req, res) => {
    try {
        // validator
        const { data, error } = loginUserValidator.safeParse(req.body);
        if (error) return res.status(400).json({ success: false, message: `registerd user validation error: ${error}` });

        const { email, password } = data;

        // check if email is already registered ?
        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ success: false, message: "User not registered" });

        // if user is registerd verify its password
        const verifiedPassword = await verifyPassword(user.password, password);
        if (!verifiedPassword) return res.status(400).json({ success: false, message: "Invalid Credentails" });

        await authenticate(req, res, user);

        return res
            .status(200)
            .json({
                success: true,
                message: "User logged in",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            })

    } catch (error) {
        console.log("login controller error: ", error);
        return res.status(500).json({ success: false, message: error });
    }
}



// LOGOUT CONTROLLER
export const logout = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ message: "User not authenticated" });

        await clearSession(req.user.sessionId);
        res.clearCookie("access_token");
        res.clearCookie("refresh_token");

        return res.status(200).json({ success: true, message: "User logged out" });

    } catch (error) {
        return res.status(400).json({ success: false, message: `logout controller error: ${error}` });
    }
}



// GET LOGGED IN USER DATA
export const getUserData = async (req, res) => {
    if (!req.user) return res.status(400).json({ message: "User not authenticated" });

    const user = await findUserById(req.user.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
        success: true,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            booking: user.booking,
            listing: user.listing,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    });
};



// GOOGLE SIGNUP CONTROLLER
export const googleSignUp = async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log(name, email)
        const user = await findUserByEmail(email);
        if (user) return res.status(400).json({ success: false, message: "User already exists" });

        const newUser = await createUserByEmail(name, email);
        if (!newUser) return res.status(404).json({ success: false, message: "Internal server error" });

        await authenticate(req, res, newUser);
        return res.status(201).json({
            success: true,
            message: "Google signup successful",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: error.message || "Google signup failed",
        })
    }
}


// GOOGLE LOGIN CONTROLLER
export const googleLogin = async (req, res) => {
    try {
        const { email } = req.body;
        console.log("email", email);

        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ success: false, message: "User not registered. Try with different email" });

        await authenticate(req, res, user);
        return res.status(200).json({ success: true, user: user });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message || "Google login failed"
        })
    }
}


// ADMIN LOGIN CONTROLLER
// export const adminLogin = async (req, res) => {
//     try {
//         const {email, password} = req.body;
//         if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//             const adminToken = createAccessTokenAdmin(email);
//             // console.log(adminToken)

//             res.cookie("admin_token", adminToken, {
//                 httpOnly: true,
//                 secure: false,
//                 sameSite: "strict",
//                 maxAge: 7 * 24 * 60 * 60 * 1000
//             })
//             return res.status(200).json({success: true, message: adminToken});
//         }
//         return res.status(400).json({success: false, message: "Invalid Credentials"});

//     } catch (error) {
//         return res
//             .status(400)
//             .json({
//                 success: false,
//                 message: error.message || "admin login controller error"
//             })
//     }
// }

