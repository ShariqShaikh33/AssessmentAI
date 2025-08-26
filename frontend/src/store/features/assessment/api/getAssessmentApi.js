import { GET_ASSESSMENT_URL } from "../../../../constants";
import { apiSlice } from "../../../api";
import { setAssessment } from "../assessmentsSlice";


const getAssessmentApi = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        getAssessment: build.query({
            query: (id)=>({
                url: `${GET_ASSESSMENT_URL}/${id}`,
                method: "GET",
            }),
            transformResponse: (response)=>{
                return response.data ?? {};
            },
            onQueryStarted: async (_,{queryFulfilled, dispatch})=>{
                const {data} = await queryFulfilled;
                console.log("data",data);
                dispatch(
                    setAssessment({
                    value: data
                }),
            );
            },
            providesTags: ["Assessments"],
        }),
    })
});

export const {useGetAssessmentQuery} = getAssessmentApi;