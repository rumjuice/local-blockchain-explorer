import {FC, useEffect, useState} from 'react';
import {TransactionReceipt} from '../components';
import {getTransactionHistory} from '../repos';
import {Receipt} from '../Types';

const TransactionHistory: FC = () => {
  const [history, setHistory] = useState<Receipt[]>();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getTransactionHistory();
        setHistory(data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      {history ? (
        history.map((h, i) => <TransactionReceipt key={i} {...h} />)
      ) : (
        <div>Fetching data...</div>
      )}
    </>
  );
};

export default TransactionHistory;
