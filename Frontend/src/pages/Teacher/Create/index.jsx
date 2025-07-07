import React, { useState } from 'react'
import { useHeading } from '../../../hooks';
import TemplatesBasicDetailsForm from '../../../components/Teacher/Templates/Create/BasicDetailsForm';
import CustomDropdownInput from '../../../components/common/inputs/CustomDropDownInput';
import CustomInput from '../../../components/common/inputs/CustomInput';
import { InputTypes } from '../../../components/common/inputs/CustomInput/utils';
import { PlusIcon } from 'lucide-react';
import { questionOptions } from '../../../utlis';
import { useDispatch } from 'react-redux';
import { addNewQuestionType } from '../../../store/features/template/templateSlice';

function CreateTemplatePage() {
    const dispatch = useDispatch();
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Template");
    setSubheading("Create a new template for your assessments");
    
    const handleAddQuestionType = (value) =>{
        console.log(`Add question type: ${value}`);
        dispatch(addNewQuestionType(value));
    }

    return (
        <div>
            <TemplatesBasicDetailsForm/>
            <CustomInput 
                inputType={InputTypes.DROPDOWN} 
                value={""}
                onChange={handleAddQuestionType}
                showLabel={false}
                options={questionOptions}
                label={<div className='flex'>
                    <PlusIcon/> Add Question Types
                    </div>}/>
        </div>
    )
}

export default CreateTemplatePage;
