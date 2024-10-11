import React from 'react';
import { NavLink } from 'react-router-dom';

const ComplainNav = () => {
  return (
    <nav className="bg-gray-200 p-4 shadow-md w-full">
      <div className="flex justify-around">
        {/* Process */}
        <NavLink
          to="http://localhost:3000/complaint-process"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#B399DD] text-white px-4 py-2 rounded-full font-semibold shadow-lg transform scale-105'
    : 'text-[#B399DD] font-semibold px-4 py-2 hover:bg-purple-200 rounded-full'
          }
        >
          Process
        </NavLink>

        {/* Complaints */}
        <NavLink
          to="http://localhost:3000/complaint-details"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#B399DD] text-white px-4 py-2 rounded-full font-semibold shadow-lg transform scale-105'
    : 'text-[#B399DD] font-semibold px-4 py-2 hover:bg-purple-200 rounded-full'
          }
        >
          Complaints
        </NavLink>
      </div>
    </nav>
  );
};

export default ComplainNav;
