import React from 'react'
import { useHeading } from '../../../hooks';
import CustomTable from '../../../components/common/CustomTable';

const columns = [
    {
        id:"firstName",
        label: "First Name"
    },
    {
        id: "lastName",
        label: "Last Name"
    },
    {
        id: "email",
        label: "Email"
    }
]

const data = [
    {
        firstName: "Akash",
        lastName: "Shreelata",
        email: "123"
    },
    {
        firstName: "Sumit",
        lastName: "Sharma",
        email: "111"
    },
    {
        firstName: "Muthu",
        lastName: "Konar",
        email: "666"
    }
]



function TeacherAssessmentPage() {
const { setHeading,setSubheading } = useHeading();
  setHeading("Assessment");
  setSubheading("Create and Manage your Assessments");
  return (
    <div>
      Teacher Assessment Page
      <CustomTable columns={columns} data={data}/>
    </div>
  )
}

export default TeacherAssessmentPage
