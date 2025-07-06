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

