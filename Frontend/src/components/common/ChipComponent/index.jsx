import React from 'react'

function ChipComponent({text=""}) {
    if(!text) return;

    return (
        <div className='min-w-25 pl-2 pr-2 text-center rounded-2xl border text-xs bg-gray-100'>
            {text}
        </div>
    )
}

export default ChipComponent
