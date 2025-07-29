import React from 'react'
import CustomButton from '../../../../common/CustomButton'
import { Save } from 'lucide-react'
import { useCreateTemplateMutation } from '../../../../../store/features/template/api/createTemplateApi'
import { useSelector } from 'react-redux';
import { templateSelector } from '../../../../../store/features/template/selectors';
import { stateToTemplate } from '../../../../../store/features/template/utils/parser';
import { useNavigate } from 'react-router-dom';

function CreateTemplateButton() {
  const navigate = useNavigate();
  const [triggerCreate,{isLoading}]=useCreateTemplateMutation();
  const template = useSelector(templateSelector);
  
  const handleClick =async()=>{
    if (isLoading) return ;
    try{
      await triggerCreate(stateToTemplate(template)).unwrap();
      navigate("/teacher/template");
    }
    catch(error){
      console.log("There was an error creating template: ",error);
    }
  }
  return (
    <div>
      <CustomButton disabled={isLoading} className={"my-2"} onClick={handleClick}>
        <Save size={15}/> Save Template
      </CustomButton>
    </div>
  )
}

export default CreateTemplateButton;