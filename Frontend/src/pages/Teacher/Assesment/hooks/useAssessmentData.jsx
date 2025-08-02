import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";
import {useNavigate, Link} from 'react-router-dom'
import { useGetAllAssessmentsQuery } from "../../../../store/features/assessment/api/getAllAssessmentApi";
import { useDeleteAssessmentMutation } from "../../../../store/features/assessment/api/deleteAssessmentApi";

export const useAssessmentData =()=>{
    const navigate = useNavigate();
    const {data=[]} = useGetAllAssessmentsQuery();
    const [triggerDelete] = useDeleteAssessmentMutation();
    

    const rows = data?.map((assessment)=>(
        {
            ...assessment,
            template: assessment?.template ? 
            (<Link className="text-blue-500 hover:text-blue-700 cursor-pointer underline" to={`/teacher/template/${assessment.template?._id}`}>{assessment?.template?.title}</Link>
            ):null
        }
    ));

    const actions = [
        {
            icon: <EyeIcon size={20} className="text-blue-500"/>,
            onClick: (row)=>{
                navigate(`/teacher/assessment/${row._id}`);
            },
        },
        {
            icon: <TrashIcon size={20} className="text-red-500"/>,
            onClick: (row)=>{
                triggerDelete(row._id);
            },
        }
    ]

    return {
        rows,
        actions
    }
}