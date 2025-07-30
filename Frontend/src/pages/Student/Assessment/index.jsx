import CustomTable from '../../../components/common/CustomTable';
import { useHeading } from '../../../hooks';
import { useAssessmentData } from '../../Teacher/Assesment/hooks';
import { assessmentsColumn } from '../../Teacher/Assesment/utils';


function StudentAssessmentPage() {
const { setHeading,setSubheading } = useHeading();
  setHeading("Assessment");
  setSubheading("Create and Manage your Assessments");


  const {rows=[], actions=[]} = useAssessmentData();

  return (
    <div>
      <CustomTable columns={assessmentsColumn} data={rows} actions={actions}/>
    </div>
  )
}

export default StudentAssessmentPage