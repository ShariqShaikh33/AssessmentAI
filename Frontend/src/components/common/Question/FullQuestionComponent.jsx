import React from 'react'
import Question from '.'
import ChipComponent from '../ChipComponent'
import { useSelector } from 'react-redux'
import { assessmentsSelector } from '../../../store/features/assessment/selectors'
import { questionOptions } from '../../../utlis/questionOptions'

function FullQuestionComponent({question, index}) {
    const {questions = [] } = useSelector(assessmentsSelector);
  return (
    <div className='border rounded-lg p-4 bg-white'>
        <div className='flex gap-2 items-center my-2'>
            <ChipComponent text={`Question ${index+1} of ${questions.length}`}/>
            <ChipComponent text={`${questionOptions.find(q=>q.id===question.type).label}`}/>
        </div>
        <Question question={question}/>
      
    </div>
  )
}

export default FullQuestionComponent
