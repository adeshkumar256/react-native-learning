import { HTTP_METHODS } from "../modules/libs/api-middleware"


// Initial State
const initialState = {
  todos: [],
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload.events,
      }
    default:
      return state
  }
}

export const loginUser = async (user) => {
  let url = 'users/signin';
  let headers = {
    'Content-Type': 'application/json',
  };
  let body = {
    user,
  };
  return callApi(url, headers, 'POST', body);
};
