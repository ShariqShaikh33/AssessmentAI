import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";
import {useNavigate} from 'react-router-dom'
import { useDeleteTemplateMutation, useGetAllTemplatesQuery } from "../../../../store/features/template/api";

export const useTemplateData =()=>{
    const navigate = useNavigate();
    const {data=[]} = useGetAllTemplatesQuery();
    const [triggerDelete] = useDeleteTemplateMutation();

    const rows = data?.map((template)=>({
        ...template,
        title: template.title,
        subject: template.subject,
        gradeLevel: template.gradeLevel
    })
    );

    const actions = [
        {
            icon: <EyeIcon size={20} className="text-green-500"/>,
            onClick: (row)=>{
                navigate(`/teacher/template/${row._id}`);
            },
        },
        {
            icon: <EditIcon size={20} className="text-blue-500"/>,
            onClick: (row)=>{
                console.log(row);
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