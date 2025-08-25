import React from "react";
import CustomButton from "../../../common/CustomButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ChevronLeft } from "lucide-react";
import { assessmentsSelector } from "../../../../store/features/assessment/selectors";
import { setAssessmentsKey } from "../../../../store/features/assessment/assessmentsSlice";

function PreviousButton() {
  const { currentQuestionIndex } = useSelector(assessmentsSelector);
  const dispatch = useDispatch();
  const isFirstQuestion = currentQuestionIndex === 0;

  const handlePrevious = () => {
    dispatch(
      setAssessmentsKey({
        key: "currentQuestionIndex",
        value: currentQuestionIndex - 1,
      }),
    );
  };

  return (
    <CustomButton disabled={isFirstQuestion} onClick={handlePrevious}>
      <ChevronLeft size={15} />
      Previous
    </CustomButton>
  );
}

export default PreviousButton;