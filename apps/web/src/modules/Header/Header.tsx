import {Tab} from '@headlessui/react';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {AccountTab} from '../Account/Types';
import {TransactionTab} from '../Transaction/Types';
import {WalletTab} from '../Wallet/Types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header: FC = () => {
  const tabs = [TransactionTab, AccountTab, WalletTab];

  const navigate = useNavigate();

  const handleTabs = (i: number) => {
    navigate(tabs[i].route);
  };

  return (
    <div className="w-full">
      <Tab.Group onChange={handleTabs}>
        <Tab.List className="flex p-1 space-x-1 bg-sky-600 rounded-xl">
          {tabs.map((tab) => (
            <Tab
              key={tab.route}
              className={({selected}) =>
                classNames(
                  'w-full py-2.5 leading-5 font-medium text-sky-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-sky-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : ' text-sky-100 hover:bg-white/[0.12] hover:text-white',
                )
              }>
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Header;
