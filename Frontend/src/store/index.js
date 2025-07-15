import {configureStore} from '@reduxjs/toolkit';
import CommonSlice from './features/common/commonSlice';
import templateSlice from './features/template/templateSlice';
import assessmentsSlice from './features/assessment/assessmentsSlice';

export const store = configureStore({
  reducer: {
    common: CommonSlice,
    template: templateSlice,
    assessments: assessmentsSlice,
  },
});
