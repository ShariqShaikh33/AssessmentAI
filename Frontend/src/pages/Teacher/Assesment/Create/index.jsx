import React, { useEffect, useState } from 'react'
import { useHeading } from '../../../../hooks';
import CustomInput from '../../../../components/common/inputs/CustomInput';
import { InputTypes } from '../../../../components/common/inputs/CustomInput/utils';
import { useDispatch, useSelector } from 'react-redux';
import { assessmentsSelector } from '../../../../store/features/assessment/selectors';
import { resetAssessmentState, setAssessmentsKey } from '../../../../store/features/assessment/assessmentsSlice';
import { useParams } from 'react-router-dom';
import { useGetAssessmentQuery } from '../../../../store/features/assessment/api/getAssessmentApi';
import { useGetAllTemplatesQuery } from '../../../../store/features/template/api';
import CreateAssessmentButton from '../../../../components/Teacher/Assessment/CreateAssessmentButton';

function CreateAssessmentPage() {
    const { id } = useParams();
    const {isLoading} = useGetAssessmentQuery(id, {
        refetchOnMountOrArgChange: true,
        skip: !id,
    });

    const {data: templates=[]}= useGetAllTemplatesQuery()

    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Assessment");
    setSubheading("This will help you create assessments");
    
    const dispatch = useDispatch();
    
    const {template, title, description} = useSelector(assessmentsSelector);
    
    const handleChange=(key, value)=>{
        dispatch(setAssessmentsKey({key,value}));
    }

    useEffect(()=>{
        return ()=>{
            dispatch(resetAssessmentState());
        }
    },[])

    
    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <form className='flex flex-col gap-4 p-2'>
                <CustomInput
                    inputType={InputTypes.DROPDOWN}
                    value={template || "Choose from Template"} 
                    label={"Select Template"}
                    onChange = {(e)=>handleChange("template", e)}
                    options = {templates.map((template)=>({
                        id: template._id,
                        label: template.title,
                        ...template,
                    }))}
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

                <CreateAssessmentButton/>

            </form>
        </div>
    )
}

export default CreateAssessmentPage;