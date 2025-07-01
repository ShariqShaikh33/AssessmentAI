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
        <label htmlFor={id} className={`${className} text-gray-700 font-semibold mb-1`}>
            {label}
        </label>
        <textarea 
            id={id}
            value={value}
            onChange={(e)=>onChange(e.target.value)} 
            type='text' 
            placeholder={placeholder}
            className={`${className} w-full border p-1 rounded-md`} 
            {...props}
        />
    </>
  )
}

