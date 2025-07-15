import React from 'react'
import { useHeading } from '../../../hooks';

function TeacherAssessmentPage() {
const { setHeading,setSubheading } = useHeading();
  setHeading("Assessment");
  setSubheading("Create and Manage your Assessments");
  return (
    <div>
      Teacher Assessment Page
    </div>
  )
}

export default TeacherAssessmentPage
