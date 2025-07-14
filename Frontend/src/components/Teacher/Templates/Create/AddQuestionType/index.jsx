import React from 'react'
import CustomInput from '../../../../common/inputs/CustomInput'
import { InputTypes } from '../../../../common/inputs/CustomInput/utils'
import { addNewQuestionType } from '../../../../../store/features/template/templateSlice';
import { useDispatch } from 'react-redux';
import { questionOptions } from '../../../../../utlis';
import { PlusIcon } from 'lucide-react';

function AddQuestionType() {
    const dispatch = useDispatch();
    const handleAddQuestionType = (value) =>{

    dispatch(addNewQuestionType({questionType: value}));
    }
    return (
    <CustomInput 
        inputType={InputTypes.DROPDOWN} 
        value={"Add Question Types"}
        onChange={handleAddQuestionType}
        showLabel={false}
        options={questionOptions}
        label={<div className='flex'>
            <PlusIcon/> Add Question Types
            </div>}
    />
  )
}

export default AddQuestionType
