import { CREATE_ASSESSMENT_URL} from "../../../../constants";
import { apiSlice } from "../../../api";


const createAssessmentUsingAIApi = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        createAssessmentFromUI: build.mutation({
            query: (body)=>({
                url: CREATE_ASSESSMENT_URL,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Assessments"],
        })
    })
});

export const {useCreateAssessmentFromUIMutation} = createAssessmentUsingAIApi;