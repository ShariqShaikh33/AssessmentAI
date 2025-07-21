import React from 'react'


function CustomTable({columns=[], data=[], actions=[]}) {
    const shouldShowActions = actions.length > 0;
    
  return (
    <div>
        <table className='border border-collapse w-full'>
            <thead >
                <tr className='border bg-gray-200'>
                    {
                        columns.map((column)=>(
                            <th className='border p-1 text-sm text-left uppercase font-light' key={column.id}>{column.label}</th>
                        ))
                    }
                    {
                        shouldShowActions && (
                        <th className='border p-1 text-sm text-left uppercase font-light'>Actions</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {data.length === 0 && (
                    <tr>
                        <td className='text-center' colSpan={shouldShowActions ? columns.length+1 : columns.length}>
                            <div className='flex justify-center items-center h-full p-4'>
                                <p className='text-sm text-gray-500 w-full'>No data found</p>
                            </div>
                        </td>
                    </tr>
                )}
                
                {
                    data.map((row)=>(
                        <tr key={row.id}>
                            {columns.map((column)=>(
                                <td key={column.id} className='border p-1 text-sm'>{row[column.id] ?? "N/A"}</td>
                            ))}
                            
                            {shouldShowActions && (
                                <td className='border p-1 flex items-center gap-2'>
                                    {actions.map((action)=>(
                                        
                                        <div className='cursor-pointer' onClick={()=>action.onClick(row)}>{action.icon}</div>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default CustomTable
