import accountService from '@services/Account.service';
import {Request, Response, Router} from 'express';
import StatusCodes from 'http-status-codes';

// Constants
const router = Router();
const {OK, BAD_REQUEST} = StatusCodes;

// Paths
export const p = {
  address: '/address',
  balance: '/balance',
} as const;

/**
 * Get all accounts.
 */
router.get(p.address, async (_: Request, res: Response) => {
  const acc = await accountService.getAccounts();
  return res.status(OK).json(acc);
});

/**
 * Get account balance.
 */
router.get(
  p.balance,
  async (req: Request<{address: string}>, res: Response) => {
    const address = req.query.address;
    if (address) {
      const acc = await accountService.getBalance(address as string);
      return res.status(OK).json(acc);
    }
    return res.status(BAD_REQUEST).json('Address param is missing');
  },
);

export default router;
