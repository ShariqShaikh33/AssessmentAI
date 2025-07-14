import React from 'react'
import { InputTypes } from '../../../common/inputs/CustomInput/utils'
import CustomInput from '../../../common/inputs/CustomInput'
import { questionOptions } from '../../../../utlis'
import { useDispatch, useSelector } from 'react-redux'
import { templateSelector } from '../../../../store/features/template/selectors'
import { updateQuestionTypeData } from '../../../../store/features/template/templateSlice'
import { difficultyOptions } from '../../../../utlis'
import Options from './Options'

function QuestionType({index}) {
    const dispatch = useDispatch();
    const {questionTypes} = useSelector(templateSelector);
    const questionType = questionTypes[index];

    const handleChange = (key,value) => {
        dispatch(updateQuestionTypeData({index,key,value}));
    }
    if(!questionType) return null;
    const questionTitle = questionOptions.find((q)=>q.id === questionType.type)?.label ?? "";
    
    return (
    <div className='border rounded-xl p-2'>
        <h2 className='border-b pb-2'>{questionTitle} Settings</h2>
        <form className='flex flex-col gap-2 space-y-1'>
            <div className='flex justify-between gap-4 mt-2'>
                <CustomInput
                inputType={InputTypes.TEXT} 
                label="Question Count"
                value = {questionType.data.questionCount}
                onChange={(e)=>{handleChange("questionCount",e.target.value)}}
                type = "number"
                placeholder="e.g. 5"
                />
                <CustomInput
                inputType={InputTypes.TEXT}
                label="Marks Per Question"
                value={questionType.data.marksPerQuestion}
                onChange={(e)=>{handleChange("marksPerQuestion",e.target.value)}}
                type="number"
                placeholder="e.g. 2 Marks"
                />
            </div>
            <CustomInput
                inputType={InputTypes.DROPDOWN}
                label="Difficulty Level"
                options = {difficultyOptions}
                value = {questionType.data.difficultyLevel}
                onChange={(e)=>{handleChange("difficultyLevel",e)}}
                
                placeholder="e.g. Medium"
            />
            <CustomInput
                inputType={InputTypes.MULTILINE}
                label="Custom AI Prompt"
                value = {questionType.data.customPrompt}
                onChange={(e)=>{handleChange("customPrompt",e.target.value)}}
                type = "text"
                placeholder="Give a custom prompt to futher drive the AI's outcome"
            />

            <Options/>
        </form>
    </div>
  )
}

export default QuestionType
