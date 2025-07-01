import React from 'react'
import { NavLink } from 'react-router-dom'
import SidebarElement from './SidebarElement'
import { sidebarTopElements } from './utlis'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SidebarButton from './SidebarButton'
import { commonSelector, toggleSidebar } from '../../../store/features/common/commonSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function TeacherSidebar() {
  const dispatch = useDispatch();

  const handleCollapse = () => {
    dispatch(toggleSidebar());
  }
  const {isSidebarOpen} = useSelector(commonSelector);

  return (
    <div className='h-full w-full flex flex-col'>
        <div className={`${isSidebarOpen ? "p-4 pr-16" : "p-0 "} w-full h-16 transition-all border-b`}>
            <img src={isSidebarOpen ? '/logos/quizzy_horizontal.png' : '/logos/quizzy_logo.png'} alt='quizzy_logo' className='max-w-full'></img>
        </div>
        
        <div className='flex flex-col flex-1'>
          <div className='flex flex-col gap-2 border-b'>
              {sidebarTopElements.map((element)=>{
                  return <SidebarElement key={element.label} {...element} />
              })}
          </div>

          <div className='flex-1'> </div>

          <div className='flex flex-col gap-2'>
            <SidebarButton label={"Collapse"} icon={isSidebarOpen ? <ChevronLeft/> : <ChevronRight/>} onClick={handleCollapse}></SidebarButton>
          </div>
        </div>

    </div>
  )
}

export default TeacherSidebar
