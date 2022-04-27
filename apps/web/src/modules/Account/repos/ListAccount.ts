import ky from 'ky';
import {BASE_URL} from '../../../Config';
import {AccountPath} from '../Types';

/**
 * List accounts.
 *
 * @returns
 */
async function listAccount(): Promise<string[]> {
  return await ky.get(`${BASE_URL}/account${AccountPath.List}`).json();
}

export default listAccount;
