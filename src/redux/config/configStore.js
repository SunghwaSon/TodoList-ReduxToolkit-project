import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from '../modules/todos';

<<<<<<< HEAD
const rootReducer = combineReducers({
  todos,
=======

const rootReducer = combineReducers({
  todos
>>>>>>> 81e1519f2a4d81e0b5431ddbcce0389388514dac
});
const store = createStore(rootReducer);

export default store;