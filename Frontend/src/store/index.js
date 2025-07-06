import {configureStore} from '@reduxjs/toolkit';
import CommonSlice from './features/common/commonSlice';
import templateSlice from './features/template/templateSlice';

export const store = configureStore({
  reducer: {
    common: CommonSlice,
    template: templateSlice,
  },
});
