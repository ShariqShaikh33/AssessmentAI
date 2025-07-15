import React from 'react'
import CustomInput from '../../../common/inputs/CustomInput'
import { InputTypes } from '../../../common/inputs/CustomInput/utils'
import { useDispatch, useSelector } from 'react-redux'
import { templateSelector } from '../../../../store/features/template/selectors'
import { updateQuestionTypeOptions } from '../../../../store/features/template/templateSlice'
import { QuestionTypes } from '../../../../types'
import { getQuestionTypeOptions } from './utils'

function Options({index}) {
  const dispatch = useDispatch()
  const {questionTypes} = useSelector(templateSelector);
  const questionType = questionTypes[index];
  const options = getQuestionTypeOptions(questionType.type);
  if(!questionType) return null

  const handleChange=(key,value)=>{
    dispatch(updateQuestionTypeOptions({index, key, value}))
  }

  

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
          value={questionType.data.options[option.id]}
          onChange={(e)=>{handleChange(option.id,e)}}
          />
        })
      }
    </div>
  )
}

export default Options;
