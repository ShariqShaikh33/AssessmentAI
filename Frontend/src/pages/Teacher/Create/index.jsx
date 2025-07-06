import React, { useState } from 'react'
import { useHeading } from '../../../hooks';
import TemplatesBasicDetailsForm from '../../../components/Teacher/Templates/Create/BasicDetailsForm';
import CustomDropdownInput from '../../../components/common/inputs/CustomDropDownInput';
import CustomInput from '../../../components/common/inputs/CustomInput';
import { InputTypes } from '../../../components/common/inputs/CustomInput/utils';
import { PlusIcon } from 'lucide-react';
import { questionOptions } from '../../../utlis';

function CreateTemplatePage() {
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Template");
    setSubheading("Create a new template for your assessments");
    const [questionType, setQuestionType] = useState("");
    return (
        <div>
            <TemplatesBasicDetailsForm/>
            <CustomInput 
                inputType={InputTypes.DROPDOWN} 
                value={questionType}
                onChange={setQuestionType}
                showLabel={false}
                options={questionOptions}
                label={<div className='flex'>
                    {/* <PlusIcon/> {questionOptions.find((q)=>q.id === questionType).label ?? "Add Question Types"} */}
                    <PlusIcon/>Add Question Types
                    </div>}/>
        </div>
    )
}

export default CreateTemplatePage;
