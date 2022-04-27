import {FC, useCallback, useEffect, useState} from 'react';
import {connectMetamask, getBalance} from '../repos';
import wallet from '../repos/WalletProvider';

const MyWallet: FC = () => {
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const _balance = await getBalance(wallet.address);
        wallet.setBalance(_balance);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const connect = useCallback(async () => {
    const metamask = await connectMetamask();
    wallet.setAddress(metamask.address);
    wallet.setBalance(metamask.balance);
    setConnected(true);
  }, []);

  return (
    <div className="rounded-xl shadow-md p-4 bg-white">
      <div className="flex flex-col gap-2 items-center">
        <div className="font-semibold">My Address:</div>
        <div className="text-sm">{wallet.address}</div>
        <div className="text-xl font-semibold">{wallet.balance} ETH</div>
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-sky-900 bg-sky-100 border border-transparent rounded-md hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
          onClick={connect}
          disabled={connected}>
          {connected ? 'Connected' : 'Connect to Metamask'}
        </button>
      </div>
    </div>
  );
};

export default MyWallet;
