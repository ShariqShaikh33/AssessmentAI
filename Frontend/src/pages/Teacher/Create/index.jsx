import React from 'react'
import { useHeading } from '../../../hooks';
import {CustomTextInput,CustomTextArea} from '../../../components/common/inputs';

function CreateTemplatePage() {
    const { setHeading, setSubheading } = useHeading();
    setHeading("Create Template");
    setSubheading("Create a new template for your assessments");
    return (
        <div>
            <div>
                <CustomTextInput label="Title" placeholder="Example template title"/>
                <CustomTextArea label="Description" placeholder="Enter a Description"/>
            </div>
        </div>
    )
}

export default CreateTemplatePage;
