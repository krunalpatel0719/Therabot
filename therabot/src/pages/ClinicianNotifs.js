import React from 'react';
import Eclipse from '../components/Eclipse';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

function ClinicianNotifications({ notifications }) {
  if (!Array.isArray(notifications)) {
    console.error('Notifications prop should be an array:', notifications);
    return <div>Error: Invalid notifications</div>;
  }

  return (
    <div className="bg-gradient-to-b from-NOTIFICATIONS_GRADIENT dark:from-[#669271] to-white dark:to-[#0b3f25]">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">
        <Eclipse className="bg-NOTIFICATIONS_ECLIPSE dark:bg-[#246144] opacity-20 dark:opacity-60" />

        <div className="flex flex-col h-screen justify-start items-center z-10 relative">
          <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <p className=" sm:text-5xl">Notifications</p>
          </div>
          <div className="mt-24 sm:mt-32 flex flex-col space-y-8 overflow-y-auto scrollbar-none scale-90 sm:scale-100 sm:pl-4">
            {notifications.map((notification, index) => (
              <div key={index}>{JSON.stringify(notification)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicianNotifications;
