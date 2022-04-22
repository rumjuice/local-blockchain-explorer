import { Router } from "express";
import accountRouter from "./Account.router";
import transactionRouter from "./Transaction.router";

const baseRouter = Router();

// Setup routers
baseRouter.use("/account", accountRouter);
baseRouter.use("/transaction", transactionRouter);

export default baseRouter;
