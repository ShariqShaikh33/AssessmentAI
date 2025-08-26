import { DELETE_ASSESSMENT_URL } from "../../../../constants";
import { apiSlice } from "../../../api";


const deleteAssessmentApi = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        deleteAssessment: build.mutation({
            query: (id)=>({
                url: `${DELETE_ASSESSMENT_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Assessments"],
        })
    })
});

export const {useDeleteAssessmentMutation} = deleteAssessmentApi;