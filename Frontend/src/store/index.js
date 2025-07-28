import {configureStore} from '@reduxjs/toolkit';
import CommonSlice from './features/common/commonSlice';
import templateSlice from './features/template/templateSlice';
import assessmentsSlice from './features/assessment/assessmentsSlice';
import { apiSlice } from './api';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    common: CommonSlice,
    template: templateSlice,
    assessments: assessmentsSlice,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
