import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/common/Loading";
import { useHeading } from "../../../../hooks";
import { useSelector } from "react-redux";
import { assessmentsSelector } from "../../../../store/features/assessment/selectors";
import { useGetAssessmentQuery } from "../../../../store/features/assessment/api/getAssessmentApi";
import Progress from "../../../../components/Student/TakeAssessment/Progress";
import AssesmentQuestion from "../../../../components/Student/TakeAssessment/AssessmentQuestion";
import Question from "../../../../components/common/Question";

function TakeAssesmentPage() {
  const { setHeading, setSubheading } = useHeading();
  const { title, description } = useSelector(assessmentsSelector);
  setHeading("Take Assesment");
  setSubheading(description);
  const {questions} = useSelector(assessmentsSelector);
  const { id } = useParams();
  const { isLoading } = useGetAssessmentQuery(id, {
    skip: !id,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex h-full">
      <AssesmentQuestion />
      <Progress />
    </div>
  );
}

export default TakeAssesmentPage;