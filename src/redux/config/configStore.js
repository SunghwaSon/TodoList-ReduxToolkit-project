// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import todos from '../modules/todos';


// const rootReducer = combineReducers({
//   todos
// });
// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../modules/todosSlice';

const store = configureStore({
  reducer: {
    todosSlice,
  }
})

export default store;