import React from "react";
import { assessmentsSelector } from "../../../../store/features/assessment/selectors";
import { useSelector } from "react-redux";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import Question from "../../../common/Question";

function AssesmentQuestion() {
  const { questions, currentQuestionIndex } = useSelector(assessmentsSelector);
  return (
    <main className="flex-1 h-full p-2 pl-0 overflow-auto">
      {/* <ChipComponent
        question={questions[currentQuestionIndex]}
        index={currentQuestionIndex}
      /> */}
      <Question
        question={questions[currentQuestionIndex]}
        config={{
          showAnswer: false,
          letUserAnswer: true,
        }}
      />

      <div className="flex gap-2 mt-6 justify-end">
        <PreviousButton />
        {/* <NextButton /> */}
      </div>
    </main>
  );
}

export default AssesmentQuestion;