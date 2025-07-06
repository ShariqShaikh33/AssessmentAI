import React from 'react'

export function CustomTextArea({
    id, 
    value, 
    onChange, 
    className,
    label,
    placeholder,
    ...props
}) {
  return (
    <>
        <textarea 
            id={id}
            value={value}
            onChange={(e)=>onChange(e.target.value)} 
            type='text' 
            placeholder={placeholder}
            className={`${className} w-full border p-1 rounded-md `} 
            {...props}
        />
    </>
  )
}

