import React from 'react'
import { useHeading } from '../../../hooks';

function TeacherDashboard() {
  const {setHeading,setSubheading} = useHeading();
  setHeading("Dashboard");
  setSubheading("View your assessments, templates, and more");
  return (
    <div>
      Teacher Dashboard
    </div>
  )
}

export default TeacherDashboard;