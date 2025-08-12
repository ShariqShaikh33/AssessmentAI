import { Lightbulb } from 'lucide-react'
import React, { useState } from 'react'
import { useToggle } from '../../../../../hooks'


function HintComponent({hints = []}) {
    const {isVisible, toggle} = useToggle();
    if(hints.length === 0) return ;

    return (
        <div className='flex flex-col gap-2'>
            <h3 
                onClick={toggle}
                className='flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm cursor-pointer'>
                <Lightbulb/> {isVisible ? "Hide Hint" : "Show Hint"}
            </h3>

            {isVisible && 
            <div className='text-xs flex flex-col gap-2  border border-blue=500 bg-blue-50 rounded-lg p-4 max-h-[200px] overflow-y-auto'>
                {hints.map((hint)=>(
                    <p className='flex items-center gap-1'>
                        <Lightbulb size={15}/> {hint}
                    </p>
                ))}
            </div>
            }
        </div>
    )
}

export default HintComponent
