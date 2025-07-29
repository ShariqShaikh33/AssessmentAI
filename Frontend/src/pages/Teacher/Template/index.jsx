import React from 'react'
import { useHeading } from '../../../hooks';
import CustomTable from '../../../components/common/CustomTable';
import CustomButton from '../../../components/common/CustomButton';
import { templatesColumn } from './utils/templatesCoulmns';
import { useTemplateData } from './hooks';
import { PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGetAllTemplatesQuery } from '../../../store/features/template/api';

function TeacherTemplatePage() {
  const { setHeading,setSubheading } = useHeading();
  setHeading("Template");
  setSubheading("Manage your assessment templates");
  const navigate = useNavigate();

  const {data} = useGetAllTemplatesQuery();
  
  const handleClick=()=>{
  console.log("clicked");
  navigate("/teacher/template/create");
  }
  
  const {rows=[], actions=[]} = useTemplateData();
  
  return (
    <div>
      <div className='mb-2'>
        <CustomButton onClick={handleClick}>
          <PlusIcon size={20}/> Create Template
        </CustomButton>
      </div>
      <CustomTable columns={templatesColumn} data={rows} actions={actions}/>
    </div>
  )
}

export default TeacherTemplatePage
