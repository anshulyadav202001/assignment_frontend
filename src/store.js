import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
