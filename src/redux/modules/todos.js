const ADD_TODO = "ADD_TODO";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE"

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  }
}

export const delete_todo = (todo) => {
  return {
    type: DELETE,
    todo,
  }
}
export const isDone_toggle = (todo) => {
  return {
    type: TOGGLE,
    todo,
  }
}


const initialState = {
  todoList: [
    {
      id: 0,
      user:'tobin',
      title: "반갑습니다 학생",
      content: "C반 토빈입니다",
    },
  ]
};



const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO :
      return { 
        ...state,
        todoList : [...state.todoList, action.todo],
      }

    case DELETE :
      return {
        ...state,
        todoList: [...state.todoList.filter((todo) => todo.id !== action.todo.id)]
      } 
      

    case TOGGLE : 
      return {
        ...state,
        todoList : [...state.todoList.map((todo) => todo.id === action.id? 
                    {...todo, isDone : !todo.isDone} : todo)]
      }

    default:
      return {...state}
  }
};

export default todos;