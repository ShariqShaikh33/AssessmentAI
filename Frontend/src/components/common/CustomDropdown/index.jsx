import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

function CustomDropdown({trigger, children}) {
  return (
    <div className='relative w-full'>
      <Tippy
        interactive={true} 
        placement="bottom-start"
        arrow={false}
        className='!bg-white !text-black !max-w-full cursor-pointer border shadow-md rounded-md p-2'
        trigger="click"
        content={children}
      >
        {trigger}
      </Tippy>
    </div>
  )
}

export default CustomDropdown
