import { Router } from "express";
import accountRouter from "./Account.router";

const baseRouter = Router();

// Setup routers
baseRouter.use("/account", accountRouter);

export default baseRouter;
