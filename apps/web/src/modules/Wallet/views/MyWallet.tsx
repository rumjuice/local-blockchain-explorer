import {FC, useCallback, useEffect, useState} from 'react';
import {ADDRESS} from '../../../Config';
import {connectMetamask, getBalance} from '../repos';
import {Wallet} from '../Types';

const MyWallet: FC = () => {
  const [address, setAddress] = useState<string>(ADDRESS as string);
  const [balance, setBalance] = useState<string>();
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const _balance = await getBalance(address);
        setWallet(address, _balance);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setWallet = useCallback((_address: string, _balance: string) => {
    const wallet = new Wallet(_address, _balance);
    setAddress(wallet.address);
    setBalance(wallet.balance);
  }, []);

  const connect = useCallback(async () => {
    const metamask = await connectMetamask();
    setWallet(metamask.address, metamask.balance);
    setConnected(true);
  }, []);

  return (
    <div className="divide-y rounded-xl shadow-md p-4 bg-white">
      <div className="flex flex-col gap-2 items-center">
        <div className="font-semibold">My Address:</div>
        <div className="text-sm">{address}</div>
        <div className="text-xl font-semibold">{balance} ETH</div>
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-sky-900 bg-sky-100 border border-transparent rounded-md hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
          onClick={connect}
          disabled={connected}>
          Connect to Metamask
        </button>
      </div>
    </div>
  );
};

export default MyWallet;
