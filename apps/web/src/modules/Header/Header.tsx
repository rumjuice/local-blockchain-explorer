import {Tab} from '@headlessui/react';
import {FC} from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header: FC = () => {
  const tabs = [
    {
      id: 1,
      title: 'Transactions',
      route: '/transactions',
    },
    {
      id: 2,
      title: 'Addresses',
      route: '/addresses',
    },
    {
      id: 3,
      title: 'Wallet',
      route: '/wallet',
    },
  ];

  const handleTabs = (i: number) => {
    console.log('clicked', i);
  };

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group onChange={handleTabs}>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              className={({selected}) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
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
