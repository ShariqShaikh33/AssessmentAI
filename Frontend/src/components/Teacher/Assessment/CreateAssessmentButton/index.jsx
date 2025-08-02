import React from 'react'
import { Save } from 'lucide-react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateAssessmentFromUIMutation } from '../../../../store/features/assessment/api/createAssessmentUsingAIApi';
import { assessmentsSelector } from '../../../../store/features/assessment/selectors';
import CustomButton from '../../../common/CustomButton';

function CreateAssessmentButton() {
  const navigate = useNavigate();
  const [triggerCreate,{isLoading}]=useCreateAssessmentFromUIMutation();
  const assessment = useSelector(assessmentsSelector);
  
  const handleClick =async()=>{
    if (isLoading) return ;
    try{
      await triggerCreate(assessment).unwrap();
      navigate("/teacher/assessment");
    }
    catch(error){
      console.log("There was an error creating assessment: ",error);
    }
  }
  return (
    <div>
      <CustomButton disabled={isLoading} className={"my-2"} onClick={handleClick}>
        <Save size={15}/> Save Assessment
      </CustomButton>
    </div>
  )
}

export default CreateAssessmentButton;