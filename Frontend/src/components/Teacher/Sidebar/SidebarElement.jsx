import React from 'react'
import { NavLink } from 'react-router-dom'
import { commonSelector } from '../../../store/features/common/selectors'
import { useSelector } from 'react-redux'

function SidebarElement({to,icon,label}) {
  const {isSidebarOpen} = useSelector(commonSelector);
  return (
    <NavLink to={to} 
        className={({isActive})=>isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}>
        <div className='flex flex-row gap-2 items-center p-4 pl-5 hover:bg-gray-100'>
            <span>{icon}</span>
            {isSidebarOpen && label}
        </div>
    </NavLink>
  )
}

export default SidebarElement;
