import React from 'react'
import CustomInput from '../../../common/inputs/CustomInput'
import { InputTypes } from '../../../common/inputs/CustomInput/utils'

function Options() {
  const options=[
    {
      id: "includeHints",
      label: "Include Hints"
    },
    {
      id: "includeExplanation",
      label: "Include Explanation"
    },
    {
      id: "shuffleOptions",
      label: "Shuffle Options"
    },
    {
      id: "enableNegativeMarking",
      label: "Enable Negative Marking"
    },
  ]

  return (
    <div>
      <h2 className='test-md font-semibold'>Options</h2>
      {
        options.map((option)=>{
          return <CustomInput
          inputType={InputTypes.CHECKBOX}
          key={option.id}
          id={option.id}
          label={option.label}
          check = {"flex flex-row-reverse gap-2 justify-end items-start"}
          value={false}
          onChange={()=>{}}
          />
        })
      }
    </div>
  )
}

export default Options;
