import React, { useState } from 'react'
import { useHeading } from '../../../../hooks';

function CreateAssessmentPage() {
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Assessment");
    setSubheading("This will help you create assessments");

    return (
        <div className='flex flex-col gap-4 p-2'>
            Create Assessment Page
        </div>
    )
}

export default CreateAssessmentPage;
