import React from 'react'
import HandleQuestionRender from './HandleQuestionRender';
import HintComponent from './components/HintComponent';
import AnswerComponent from './components/AnswerComponent';
import ExplanationComponent from './components/ExplanationComponent';

const hints=[
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus ab neque, architecto delectus doloribus et dolor quod corrupti harum ipsa voluptatem iure vero earum laudantium, perferendis culpa molestias aliquam!",        
    ]

function Question({question}) {
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>
                What is the primary use of React hooks?
            </h2>

            <HandleQuestionRender type={question.type}/>

            <HintComponent hints={[]}/>

            <AnswerComponent answer='lorem ipsum'/>

            <ExplanationComponent explanation='Lorem ipsum'/>
        
        </div>
    )
}

export default Question
