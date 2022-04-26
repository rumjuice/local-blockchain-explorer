import ky from 'ky';
import {BASE_URL} from '../../../Config';

/**
 * Get account balance.
 *
 * @returns
 */
async function getBalance(address: string): Promise<string> {
  return await ky.get(`${BASE_URL}/account/balance?address=${address}`).json();
}

export default getBalance;
