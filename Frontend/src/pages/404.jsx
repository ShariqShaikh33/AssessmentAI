import React from 'react'
import CustomButton from '../components/common/CustomButton'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/", {replace: true});
    }
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 w-full h-screen'>
        <h1 className='text-4xl font-bold'>404</h1>
        <p className='text-lg'>Page Not Found</p>
        <CustomButton onClick={handleClick}>Go to Home</CustomButton>
      </div>
    </div>
  )
}

export default PageNotFound
