import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__?.() || ((f: any) => f) // Enable Redux DevTools
);

export default store;
