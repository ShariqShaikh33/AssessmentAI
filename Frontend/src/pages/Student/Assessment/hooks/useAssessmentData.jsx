import { useNavigate } from "react-router-dom";
import { useGetAllAssessmentsQuery } from "../../../../store/features/assessment/api/getAllAssessmentApi";
import { useDeleteAssessmentMutation } from "../../../../store/features/assessment/api/deleteAssessmentApi";
import { EyeIcon } from "lucide-react";

export const useAssessmentData =()=>{
    const navigate = useNavigate();
    const {data=[]} = useGetAllAssessmentsQuery();

const rows = data?.map((assessment)=>(
        {
            ...assessment,
        }
    ));
 const actions = [
        {
            icon: <EyeIcon size={20} className="text-blue-500"/>,
            onClick: (row)=>{
                navigate(`/student/assessment/${row._id}`);
            },
        },
    ]
    return {
        rows,
        actions
    }
}