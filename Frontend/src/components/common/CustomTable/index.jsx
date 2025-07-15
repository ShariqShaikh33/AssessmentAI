import React from 'react'


function CustomTable({columns={}, data={}}) {
  return (
    <div>
        <table className='border border-collapse'>
            <thead>
                <tr>
                    {
                        columns?.map((column)=>(
                            <th className='border' key={column.id}>{column.label}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((row)=>(
                        <tr>
                            {columns?.map((column)=>(
                                <td className='border'>{row[column.id]}</td>
                            ))}
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default CustomTable
