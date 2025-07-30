import React, { useEffect, useState } from 'react'
import { useHeading } from '../../../../hooks';
import CustomInput from '../../../../components/common/inputs/CustomInput';
import { InputTypes } from '../../../../components/common/inputs/CustomInput/utils';
import { useDispatch, useSelector } from 'react-redux';
import { assessmentsSelector } from '../../../../store/features/assessment/selectors';
import { resetAssessmentState, setAssessmentsKey } from '../../../../store/features/assessment/assessmentsSlice';

function CreateAssessmentPage() {
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Assessment");
    setSubheading("This will help you create assessments");
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(resetAssessmentState());
    },[])

    const {template, title, description} = useSelector(assessmentsSelector);
    
    const handleChange=(key, value)=>{
        dispatch(setAssessmentsKey({key,value}));
    }

    return (
        <div>
            <form className='flex flex-col gap-4 p-2'>
                <CustomInput
                    inputType={InputTypes.DROPDOWN}
                    value={template || "Choose from Template"} 
                    label={"Select Template"}
                    onChange = {(e)=>handleChange("template", e.target.value)}
                />

                <CustomInput
                    inputType={InputTypes.TEXT}
                    value={title}
                    label={"Assessment Title"}
                    placeholder={"e.g. Math Quiz 1.0"}
                    onChange = {(e)=>handleChange("title", e.target.value)}
                />

                <CustomInput
                    inputType={InputTypes.MULTILINE}
                    value={description}
                    label={"Assessment Description"}
                    placeholder={"e.g. This is a quiz to test your knowledge of Math."}
                    onChange = {(e)=>handleChange("description", e.target.value)}
                />

            </form>
        </div>
    )
}

export default CreateAssessmentPage;