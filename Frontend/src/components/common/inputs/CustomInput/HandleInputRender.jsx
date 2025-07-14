import React from 'react'
import { CustomTextInput } from '../CustomTextInput'
import { CustomTextArea } from '../CustomTextArea';
import { InputTypes } from './utils/InputTypes';
import CustomDropdownInput from '../CustomDropDownInput';
import CustomCheckbox from '../CustomCheckbox';

function HandleInputRender({inputType, ...props}) {
  switch (inputType) {
    case InputTypes.TEXT:
        return <CustomTextInput {...props}/>;
    case InputTypes.MULTILINE:
        return <CustomTextArea {...props}/>;
    case InputTypes.DROPDOWN:
        return <CustomDropdownInput {...props}/>;
    case InputTypes.CHECKBOX:
        return <CustomCheckbox {...props}/>;
    default:
        return null;
    }
}

export default HandleInputRender;
