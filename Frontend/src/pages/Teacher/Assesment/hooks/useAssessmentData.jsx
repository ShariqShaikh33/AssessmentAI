import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";
import {useNavigate} from 'react-router-dom'

export const useAssessmentData =()=>{
    const navigate = useNavigate();
    const rows = [];

    const actions = [
        {
            icon: <EyeIcon size={20} className="text-blue-500"/>,
            onClick: (row)=>{
                navigate(`/teacher/assessment/${row.id}`);
            },
        },
        {
            icon: <TrashIcon size={20} className="text-red-500"/>,
            onClick: ()=>{},
        }
    ]

    return {
        rows,
        actions
    }
}