import express from "express";
import controller from "../controllers/TransactionsController.js";

const transactionRouter = express.Router();

transactionRouter.get("/", controller.rootRoute);

export default transactionRouter;
