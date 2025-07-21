import React from 'react'

function CustomCheckbox({value, onChange}) {
  return (
    <div>
      <input type="checkbox" checked={value} onClick={()=>onChange(!value)}/>
    </div>
  )
}

export default CustomCheckbox;
