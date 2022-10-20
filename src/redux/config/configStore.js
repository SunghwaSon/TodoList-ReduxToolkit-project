import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from '../modules/todos';
import { productSlice } from "../modules/todos";



/*const rootReducer = combineReducers({
  todos
});
const store = createStore(rootReducer);
기존
*/

const store = configureStore({
  reducer:{
    todos:todos
  },
})


export default store;



//14:34초