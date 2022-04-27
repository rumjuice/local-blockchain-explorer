import ky from 'ky';
import {BASE_URL} from '../../../Config';
import {Receipt} from '../../Transaction/Types';
import {TransferParam} from '../Types';

/**
 * Send ETH.
 *
 * @params params
 * @returns
 */
async function sendMoney(params: TransferParam): Promise<Receipt> {
  return await ky
    .post(`${BASE_URL}/transaction/send`, {json: {...params}})
    .json();
}

export default sendMoney;
