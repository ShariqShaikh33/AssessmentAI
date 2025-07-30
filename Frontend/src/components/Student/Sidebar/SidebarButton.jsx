import React from 'react'
import { NavLink } from 'react-router-dom'
import { commonSelector } from '../../../store/features/common/selectors'
import { useSelector } from 'react-redux'

function SidebarButton({ icon, label, onClick }) {
  const {isSidebarOpen} = useSelector(commonSelector);
  return (
        <div onClick={onClick} className='cursor-pointer'>
            <div className='flex flex-row gap-2 items-center p-4 pl-5 hover:bg-gray-100'>
                <span>{icon}</span>
                {isSidebarOpen && label}
            </div>
        </div>
  )
}

export default SidebarButton
