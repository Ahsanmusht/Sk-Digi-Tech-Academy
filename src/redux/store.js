
// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import rootReducer from './reducer/authReducer';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: rootReducer
});

// Extracting dispatch function from the store
const { dispatch } = store;

// Exporting the store and dispatch function
export { store, dispatch };