//툴킷사용
import { createSlice } from "@reduxjs/toolkit";

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



export const productSlice = createSlice({
  name:"product",
  initialState,
  reducers: {
    addTodo:(state,action)=>{
      state.todoList=[...state.todoList,action.payload]

      
      },
    deleteTodo:(state,action)=>{
        state.todoList =state.todoList.filter((todo) => todo.id !== action.payload.id)
    },

  },
})

export const {addTodo,deleteTodo} = productSlice.actions
export default productSlice.reducer;