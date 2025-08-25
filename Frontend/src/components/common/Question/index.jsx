import React from 'react'
import HandleQuestionRender from './HandleQuestionRender';
import HintComponent from './components/HintComponent';
import AnswerComponent from './components/AnswerComponent';
import ExplanationComponent from './components/ExplanationComponent';
import { extractAnswer } from './utils/extractAnswer';
import { defaultQuestionConfig } from './utils/index.js';

const hints=[
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus ab neque, architecto delectus doloribus et dolor quod corrupti harum ipsa voluptatem iure vero earum laudantium, perferendis culpa molestias aliquam!",        
    ]

function Question({question,config = defaultQuestionConfig}) {
    console.log("Question",question)
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>
                {question.question}
            </h2>

            <HandleQuestionRender question={question}/>

            <HintComponent hints={question.hints}/>

            {config.showAnswer && (
                <div>
                    <AnswerComponent answer={extractAnswer(question)}/>
                </div>
            )}
            
            {config.showExplanation && (
                <div>
                    <ExplanationComponent explanation={question.explanation}/>
                </div>
            )}
        
        </div>
    )
}

export default Question
