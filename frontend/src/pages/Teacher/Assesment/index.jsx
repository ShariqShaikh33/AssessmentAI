import CustomTable from '../../../components/common/CustomTable';
import CustomButton from '../../../components/common/CustomButton';
import { useHeading } from '../../../hooks';
import { useAssessmentData } from './hooks';
import { assessmentsColumn } from './utils';
import { PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TeacherAssessmentPage() {
const { setHeading,setSubheading } = useHeading();
  setHeading("Assessment");
  setSubheading("Create and Manage your Assessments");
  const navigate = useNavigate();

  const handleClick=()=>{
    console.log("clicked");
    navigate("/teacher/assessment/create");
  }

  const {rows=[], actions=[]} = useAssessmentData();

  return (
    <div>
      <div className='mb-2'>
        <CustomButton onClick={handleClick}>
          <PlusIcon size={20}/> Create Assessment
        </CustomButton>
      </div>
      <CustomTable columns={assessmentsColumn} data={rows} actions={actions}/>
    </div>
  )
}

export default TeacherAssessmentPage
