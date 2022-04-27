import {FC, useCallback, useState} from 'react';
import {useParams} from 'react-router-dom';
import {TransactionReceipt} from '../../Transaction/components';
import {Receipt} from '../../Transaction/Types';
import {WalletProvider} from '../../Wallet/repos';
import TransferForm from '../components';
import {sendMoney} from '../repos';
import {TransferParam} from '../Types';

const Transfer: FC = () => {
  const {address} = useParams();
  const [receipt, setReceipt] = useState<Receipt>();

  const onSubmit = useCallback(async (data: TransferParam) => {
    try {
      const send = await sendMoney(data);
      setReceipt(send);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center rounded-xl shadow-md px-4 py-2 bg-white">
        {address && (
          <TransferForm
            from={WalletProvider.address}
            to={address}
            onSubmit={onSubmit}
          />
        )}
      </div>
      <div className="mt-4">
        {receipt && <TransactionReceipt {...receipt} />}
      </div>
    </div>
  );
};

export default Transfer;
