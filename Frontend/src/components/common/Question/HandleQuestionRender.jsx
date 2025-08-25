import React from 'react'
import MultipheChoiceQuestion from './MultipleChoiceQuestion';
import ShortAnswerQuestion from './ShortAnswerQuestion';
import LongAnswerQuestion from './LongAnswerQuestion';
import { QuestionTypes } from '../../../types';

function HandleQuestionRender({question}) {
    switch(question.type){
        case QuestionTypes.MULTIPLE_CHOICE:
            return <MultipheChoiceQuestion question={question}/>;
        case QuestionTypes.SHORT_ANSWER:
            return <ShortAnswerQuestion/>;
        case QuestionTypes.LONG_ANSWER:
            return <LongAnswerQuestion/>;
    }
}

export default HandleQuestionRender;
