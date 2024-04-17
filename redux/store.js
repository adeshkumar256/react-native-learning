import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice';

const reducers = {
  userSlice
}

export default configureStore({
  reducer: reducers,
});