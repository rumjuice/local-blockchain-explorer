import accountService from "@services/Account.service";
import { Request, Response, Router } from "express";
import StatusCodes from "http-status-codes";

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  address: "/address",
  balance: "/balance",
  update: "/update",
  delete: "/delete/:id",
} as const;

/**
 * Get all accounts.
 */
router.get(p.address, async (_: Request, res: Response) => {
  const acc = await accountService.getAll();
  return res.status(OK).json(acc);
});

/**
 * Get account balance.
 */
router.get(
  p.balance,
  async (req: Request<{ address: string }>, res: Response) => {
    const address = req.query.address;
    const acc = await accountService.getBalance(address as string);
    return res.status(OK).json(acc);
  }
);

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
