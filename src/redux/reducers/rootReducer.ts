import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

// Define and export the RootState type based on the rootReducer
export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
