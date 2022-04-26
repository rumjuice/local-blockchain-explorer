import {SendTransactionParam} from '@models/Transaction.model';
import TransactionService from '@services/Transaction.service';
import {Request, Response, Router} from 'express';
import StatusCodes from 'http-status-codes';

// Constants
const router = Router();
const {CREATED, INTERNAL_SERVER_ERROR, OK} = StatusCodes;

// Paths
export const p = {
  history: '',
  send: '/send',
} as const;

/**
 * Get transaction history
 */
router.get(p.history, async (_: Request, res: Response) => {
  try {
    const tx = await TransactionService.getTransactionHistory();
    return res.status(OK).json(tx);
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Send transaction
 */
router.post(
  p.send,
  async (req: Request<SendTransactionParam>, res: Response) => {
    try {
      const tx = await TransactionService.sendTransaction(req.body);
      return res.status(CREATED).json(tx);
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).json(error);
    }
  },
);

export default router;
