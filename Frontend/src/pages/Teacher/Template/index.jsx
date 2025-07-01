import React from 'react'
import { useHeading } from '../../../hooks';

function TeacherTemplatePage() {
  const { setHeading,setSubheading } = useHeading();
  setHeading("Template");
  setSubheading("Manage your assessment templates");
  return (
    <div>
      Teacher Template
    </div>
  )
}

export default TeacherTemplatePage
