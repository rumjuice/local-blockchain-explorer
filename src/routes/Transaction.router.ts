import { SendTransactionParam } from "@models/Transaction.model";
import TransactionService from "@services/Transaction.service";
import { Request, Response, Router } from "express";
import StatusCodes from "http-status-codes";

// Constants
const router = Router();
const { CREATED, INTERNAL_SERVER_ERROR } = StatusCodes;

// Paths
export const p = {
  send: "/send",
} as const;

/**
 * Send transaction
 */
router.post(
  p.send,
  async (req: Request<SendTransactionParam>, res: Response) => {
    try {
      const tx = await TransactionService.sendTransaction(req.body);
      console.log("return", tx);
      return res.status(CREATED).json(tx);
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).json(error);
    }
  }
);

export default router;
