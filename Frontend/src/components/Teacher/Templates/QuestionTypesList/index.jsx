import React from 'react'
import QuestionType from '../QuestionType'
import { useSelector } from 'react-redux';
import { templateSelector } from '../../../../store/features/template/selectors';

function QuestionTypesList() {
  const {questionTypes} = useSelector(templateSelector);
  
  return (
    <div className='flex flex-col gap-4 w-full rounded-xl'>
        {questionTypes?.map((_,index)=>{
          return <QuestionType key={index} index={index}/>
        })}
    </div>
  )
}

export default QuestionTypesList;
