import React from 'react'
import { useHeading } from '../../../hooks';

function CreateTemplatePage() {
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Template");
    setSubheading("Create a new template for your assessments");
    return (
        <div>
            Create Template Page
        </div>
    )
}

export default CreateTemplatePage;
