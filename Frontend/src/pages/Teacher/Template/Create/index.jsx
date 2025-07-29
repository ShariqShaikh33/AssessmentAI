import React, { useEffect, useState } from 'react'
import { useHeading } from '../../../../hooks';
import TemplatesBasicDetailsForm from '../../../../components/Teacher/Templates/Create/BasicDetailsForm';
import AddQuestionType from '../../../../components/Teacher/Templates/Create/AddQuestionType';
import QuestionTypesList from '../../../../components/Teacher/Templates/QuestionTypesList';
import { useDispatch } from 'react-redux';
import { resetTemplateState } from '../../../../store/features/template/templateSlice';
import { useParams } from 'react-router-dom';
import { useGetTemplateQuery } from '../../../../store/api';

function CreateTemplatePage() {
    const { id } = useParams();
    const {isLoading} = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
        skip: !id,
    });
    const dispatch = useDispatch();
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Template");
    setSubheading("Create a new template for your assessments");

    useEffect(()=>{
        return ()=>{
        dispatch(resetTemplateState());};
    },[]);

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col gap-4 p-2'>
            <TemplatesBasicDetailsForm/>

            <QuestionTypesList/>

            <AddQuestionType/>            
        </div>
    )
}

export default CreateTemplatePage;
