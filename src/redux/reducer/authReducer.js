import { combineReducers } from 'redux';


// Define the initial state and actions for the auth slice
const authInitialState = {
  user: [],
  error: null
};



const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'REGISTER_FAILURE':
      return { ...state, error: action.payload, user: null };
    default:
      return state;
  }
};




// Combine both reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;