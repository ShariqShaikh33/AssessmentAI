import React from 'react'

export function CustomTextInput({
    id,
    value, 
    onChange, 
    className,
    label,
    placeholder,
    ...props}) {

    return (
    <>
        <label htmlFor={id} className={`${className} text-gray-700 font-semibold mb-1`}>
            {label}
        </label>
        <input 
            id={id}
            value={value}
            onChange={onChange} 
            type='text' 
            placeholder={placeholder}
            className={`${className} w-full border p-1 rounded-md`} 
            {...props}
        />
    </>
  )
}

