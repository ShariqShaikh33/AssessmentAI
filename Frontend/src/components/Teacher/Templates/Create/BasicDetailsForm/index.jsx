import React from 'react'
import CustomInput from '../../../../common/inputs/CustomInput';
import { InputTypes } from '../../../../common/inputs/CustomInput/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setTemplateKey, templateSelector} from '../../../../../store/features/template/templateSlice';

function  TemplatesBasicDetailsForm() {
    const dispatch = useDispatch();
    const {title, description, subject, gradeLevel} = useSelector(templateSelector);

    const handleChange=(key,value)=>{
        dispatch(setTemplateKey({key, value}));
    }
    return (
    <div>
       <div className='flex flex-col gap-2 w-full border-1 p-2 rounded-xl'>
            <h1 className='text-lg font-bold border-b pb-2'>Basic Details</h1>
            <form className='flex flex-col'>
                <CustomInput 
                    inputType={InputTypes.TEXT} 
                    value={title}
                    label="Title" 
                    onChange={(e)=>handleChange("title", e.target.value)}
                    placeholder="This is a placeholder"
                />
                <CustomInput 
                    inputType={InputTypes.MULTILINE} 
                    type="text"
                    value={description}
                    label="Description" 
                    onChange={(e)=>handleChange("description", e.target.value)}
                    placeholder="Enter a Description"
                />

                <div className='flex gap-4 w-full'>
                    <CustomInput 
                        inputType={InputTypes.MULTILINE} 
                        value={subject}
                        label="Subject" 
                        onChange={(e)=>handleChange("subject", e.target.value)}
                        placeholder="e.g. Mathematics, Science, etc."
                    />
                    <CustomInput 
                        inputType={InputTypes.MULTILINE}
                        value={gradeLevel }
                        label="Grade" 
                        onChange={(e)=>handleChange("gradeLevel", e.targetvalue)}
                        placeholder="e.g. 10th Grade, 12th Grade, etc."
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default TemplatesBasicDetailsForm;