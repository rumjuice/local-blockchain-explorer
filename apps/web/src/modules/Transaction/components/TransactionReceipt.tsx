import {utils} from 'ethers';
import {FC, memo, ReactElement} from 'react';
import {Receipt} from '../Types';
import StatusLabel from './StatusLabel';

interface SectionProps {
  title: string;
  value: string | number | ReactElement;
}
const Section: FC<SectionProps> = ({title, value}): ReactElement => {
  return (
    <div className="flex flex-row text-sm gap-4 items-center space-y-1 py-2">
      <div className="basis-20 font-medium">{title}:</div>
      <div>{value}</div>
    </div>
  );
};

const TransactionReceipt: FC<Receipt> = ({
  receiptHash,
  status,
  timestamp,
  source,
  destination,
  amount,
  gasUsed,
  block,
  blockHash,
}) => {
  return (
    <div className="divide-y rounded-xl shadow-md p-4 bg-white">
      <div className="pb-2">
        {receiptHash && <Section title="Hash" value={receiptHash} />}
        <Section title="Status" value={<StatusLabel status={status} />} />
        {timestamp && (
          <Section title="Date" value={new Date(timestamp).toLocaleString()} />
        )}
        {block && <Section title="Block" value={block} />}
        {blockHash && <Section title="Block Hash" value={blockHash} />}
      </div>
      <div className="py-2">
        <Section title="From" value={source} />
        <Section title="To" value={destination} />
      </div>
      <div className="pt-2">
        <Section
          title="Value"
          value={`${utils.formatEther(
            amount.toLocaleString('en-us', {useGrouping: false}),
          )} ETH`}
        />
        {gasUsed && <Section title="Gas" value={gasUsed} />}
      </div>
    </div>
  );
};

export default memo(TransactionReceipt);
