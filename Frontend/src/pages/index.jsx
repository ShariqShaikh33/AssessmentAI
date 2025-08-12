import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomButton from '../components/common/CustomButton'

function index() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full min-h-screen'>
        
        <h1 className='font-bold text-3xl'>
          Welcome to QuizzUP!!
        </h1>
        <NavLink to={"/teacher/dashboard"}>
          <CustomButton>Enter</CustomButton>
        </NavLink>
    </div>
  )
}

export default index
