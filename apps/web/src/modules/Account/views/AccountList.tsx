import {FC, useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {listAccount} from '../repos';
import {AccountPath} from '../Types';

const AccountList: FC = () => {
  const [accounts, setAccounts] = useState<string[]>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const data = await listAccount();
      setAccounts(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="divide-y rounded-xl shadow-md px-4 py-2 bg-white">
      {accounts ? (
        accounts.map((account) => (
          <div key={account} className="flex text-sm leading-loose py-2">
            <span>{account}</span>
            <button
              onClick={() =>
                navigate(`${AccountPath.Send}/${account}`, {
                  state: {address: account},
                })
              }
              className="ml-auto max-w-fit inline-flex justify-center px-4 py-1 text-sm font-medium text-sky-900 bg-sky-100 border border-transparent rounded-md hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500">
              Send
            </button>
          </div>
        ))
      ) : (
        <div>Fetching data...</div>
      )}
    </div>
  );
};

export default AccountList;
