import React from 'react'

function CustomCheckbox({value, onChange}) {
  return (
    <div>
      <input type="checkbox" checked={value} onChange={onChange}/>
    </div>
  )
}

export default CustomCheckbox
