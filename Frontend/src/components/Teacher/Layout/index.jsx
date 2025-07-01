import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherSidebar from '../Sidebar'
import {commonSelector} from '../../../store/features/common/commonSlice'
import { useSelector } from 'react-redux'
import Header from '../Header'

function TeacherLayout() {
  const {isSidebarOpen} = useSelector(commonSelector);
  return (
    <div className='h-screen w-screen flex'>
        <aside className={`${isSidebarOpen ? "w-52" : "w-15"} h-full border-r`}>
          <TeacherSidebar />
          </aside>
        
        <main className='flex-1 overflow-auto'>
          <Header />
          <div className='m-2'>
            <Outlet />
          </div>
        </main>
    </div>
  )
}

export default TeacherLayout
