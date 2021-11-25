import { configureStore } from '@reduxjs/toolkit';
import meetingSlice from './meetingSlice'

const store = configureStore({
	reducer: { meeting: meetingSlice.reducer },
  });
  
  export default store;     