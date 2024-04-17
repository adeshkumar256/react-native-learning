import { createSlice } from '@reduxjs/toolkit'
const noError = {
  isError: false,
  message: ""
}
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: {
      error: noError,
      userDetail: {},
      loading: false
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.user.userDetail = action.payload,
      state.user.error = noError
    },
    setUserLoading: (state, action) => {
      state.user.loading = action.payload
    },
    setUserError: (state, action) => {
      state.user.error = action.payload,
      state.user.userDetail = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setUserLoading, setUserError } = userSlice.actions

export default userSlice.reducer

export const userSelector = (state) => (
  state.userSlice
)