import React from 'react'

function CustomButton({children, className, ...props}) {
  return (
    <div>
      <button className={`${className} p-1 w-50 h-10 cursor-pointer text-md bg-blue-500 border-white text-white rounded-md hover:bg-blue-600`} {...props}>{children}</button>        
    </div>
  )
}

export default CustomButton
