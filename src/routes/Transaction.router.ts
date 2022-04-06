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

// const tx = signer.sendTransaction({
//   to: "ricmoo.firefly.eth",
//   value: ethers.utils.parseEther("1.0")
// });

/**
 * Add one user.
 */
// router.post(p.add, async (req: Request, res: Response) => {
//   const { user } = req.body;
//   // Check param
//   if (!user) {
//     throw new ParamMissingError();
//   }
//   // Fetch data
//   await userService.addOne(user);
//   return res.status(CREATED).end();
// });

/**
 * Update one user.
 */
// router.put(p.update, async (req: Request, res: Response) => {
//   const { user } = req.body;
//   // Check param
//   if (!user) {
//     throw new ParamMissingError();
//   }
//   // Fetch data
//   await userService.updateOne(user);
//   return res.status(OK).end();
// });

/**
 * Delete one user.
 */
// router.delete(p.delete, async (req: Request, res: Response) => {
//   const { id } = req.params;
//   // Check param
//   if (!id) {
//     throw new ParamMissingError();
//   }
//   // Fetch data
//   await userService.delete(Number(id));
//   return res.status(OK).end();
// });

// Export default
export default router;
