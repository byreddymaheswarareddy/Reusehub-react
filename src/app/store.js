import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../features/user/userSlice';
// import { authSlice } from '../features/user/userSlice';

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore({
  reducer: {
    auth : authReducer,
  },
});
