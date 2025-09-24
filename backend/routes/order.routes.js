import express from 'express';
import { getAllOrder, placeOrder } from '../controllers/order.controller.js';
import { isAuth } from '../middlewares/isAuth.js';

const orderRouter = express.Router();

orderRouter.post("/placeorder", isAuth, placeOrder);

orderRouter.get("/getAllOrder", isAuth, getAllOrder);

export default orderRouter;