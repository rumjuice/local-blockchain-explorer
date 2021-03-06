import ky from 'ky';
import {BASE_URL} from '../../../Config';
import {Receipt, TransactionPath} from '../Types';

/**
 * Get all transactions.
 *
 * @returns
 */
async function getTransactionHistory(): Promise<Receipt[]> {
  return await ky.get(`${BASE_URL}${TransactionPath.History}`).json();
}

export default getTransactionHistory;
