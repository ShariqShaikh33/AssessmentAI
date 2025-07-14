import React, { useState } from 'react'
import { useHeading } from '../../../hooks';
import TemplatesBasicDetailsForm from '../../../components/Teacher/Templates/Create/BasicDetailsForm';
import AddQuestionType from '../../../components/Teacher/Templates/Create/AddQuestionType';
import QuestionTypesList from '../../../components/Teacher/Templates/QuestionTypesList';

function CreateTemplatePage() {
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Template");
    setSubheading("Create a new template for your assessments");

    return (
        <div className='flex flex-col gap-4 p-2'>
            <TemplatesBasicDetailsForm/>

            <QuestionTypesList/>

            <AddQuestionType/>            
        </div>
    )
}

export default CreateTemplatePage;
