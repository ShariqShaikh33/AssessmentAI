import React from 'react'
import CustomDropdown from '../../CustomDropdown'
import { CheckIcon, ChevronDown } from 'lucide-react'

function CustomDropdownInput({value,label,options,onChange}) {

  return (
    <CustomDropdown trigger={<div className='flex justify-between border p-2 w-full rounded-sm'>
            {label}
            <ChevronDown className='text-gray-500'/>
        </div>}>
        <div >
            {
                options.map((option) => (
                    <div key={option.id} onClick={()=>onChange(option.id)} className='flex items-center text-sm p-1 hover:bg-gray-100 w-full cursor-pointer'>
                        {value === option.id && <CheckIcon/>}
                        <span>{option.label}</span>
                    </div>
                ))
            }
        </div>
    </CustomDropdown>
  )
}

export default CustomDropdownInput
