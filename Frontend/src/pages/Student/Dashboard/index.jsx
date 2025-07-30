import React from 'react'
import { useHeading } from '../../../hooks';

function StudentDashboard() {
  const {setHeading,setSubheading} = useHeading();
  setHeading("Dashboard");
  setSubheading("View your assessments, templates, and more");
  return (
    <div>
      Student Dashboard
    </div>
  )
}

export default StudentDashboard;