import {configureStore} from '@reduxjs/toolkit';
import CommonSlice from './features/common/commonSlice';

export const store = configureStore({
  reducer: {
    common: CommonSlice,
  },
});
