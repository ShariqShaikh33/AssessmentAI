import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build)=>({
        getAllTemplates: build.query({
            query: ()=>({
                url: "/templates",
                method: "GET",
            }),
            transformResponse: (response)=>{
                return response.data ?? [];
            }
        })
    })
});

export const {useGetAllTemplatesQuery} = apiSlice;