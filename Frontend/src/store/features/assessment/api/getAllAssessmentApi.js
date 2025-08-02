import { GET_ALL_ASSESSMENT_URL } from "../../../../constants";
import { apiSlice } from "../../../api";


const getAllAssessmentApi = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        getAllAssessments: build.query({
            query: ()=>({
                url: `${GET_ALL_ASSESSMENT_URL}`,
                method: "GET",
            }),
            transformResponse: (response)=>{
                return response.data ?? [];
            },
            providesTags: ["Assessments"],
        }),
    })
});

export const {useGetAllAssessmentsQuery} = getAllAssessmentApi;