import express from 'express';
import {
    getUserData,
    googleLogin,
    googleSignUp,
    login,
    logout,
    register
} from '../controllers/auth.controller.js';
import { isAuth } from '../middlewares/isAuth.js';

const authRouter = express.Router();

authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.post('/logout', isAuth, logout);

authRouter.get('/getUserData', isAuth ,getUserData);

authRouter.post('/googleSignup', googleSignUp);

authRouter.post('/googleLogin', googleLogin);


export default authRouter;