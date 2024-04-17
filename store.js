import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'

const reducers = {
  counter: counterReducer
}

export default configureStore({
  reducer: reducers,
});