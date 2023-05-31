import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './advertsSlice';



const store = configureStore({
  reducer: {
    advertState: advertReducer
  }
})

export default store