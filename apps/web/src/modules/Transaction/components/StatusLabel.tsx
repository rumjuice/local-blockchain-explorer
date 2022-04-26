import {
  CheckCircleIcon,
  RefreshIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import {FC} from 'react';
import {Status} from '../Types';

interface Props {
  status: Status;
}
const StatusLabel: FC<Props> = ({status}) => {
  const renderLabel = () => {
    switch (status) {
      case Status.SUCCESS:
        return (
          <div className="bg-teal-100 rounded-md py-0.5 px-1 inline-flex items-center gap-1">
            <CheckCircleIcon className="h-4 w-4 text-teal-600" />
            <span className="text-teal-600 font-medium">Success</span>
          </div>
        );
      case Status.FAILED:
        return (
          <div className="bg-red-100 rounded-md py-0.5 px-1 inline-flex items-center gap-1">
            <XCircleIcon className="h-4 w-4 text-red-600" />
            <span className="text-red-600 font-medium">Failed</span>
          </div>
        );
      default:
        return (
          <div className="bg-amber-100 rounded-md py-0.5 px-1 inline-flex items-center gap-1">
            <RefreshIcon className="h-4 w-4 text-amber-600" />
            <span className="text-amber-600 font-medium">In Process</span>
          </div>
        );
    }
  };
  return renderLabel();
};

export default StatusLabel;
