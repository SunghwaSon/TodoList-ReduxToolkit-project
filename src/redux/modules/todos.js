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
    {
      id: 1,
      user:'onebin',
      title: "반갑습니다 영화배우",
      content: "원빈입니다.",
    },
    {
      id: 2,
      user:'nayoung',
      title: "반갑습니다 영화배우",
      content: "나영입니다.",
    },
    {
      id: 3,
      user:'child',
      title: "반갑습니다 교사",
      content: "child 입니다.",
    },
    {
      id: 4,
      user:'yubin',
      title: "반갑습니다 가수",
      content: "yubin입니다.",
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
        todoList: [...state.todoList.filter((todo) => todo.id !== action.id)]
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