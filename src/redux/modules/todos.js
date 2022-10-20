//툴킷사용
import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";




const initialState = {
  todos: [],
isLoading: false,
error: null,
};


export const __getTodoDetail = createAsyncThunk(
  "comment/getTodoDetail",
  // async 는 프로미스에 새로운 신문법이다. // 언제끝나는지 알려준다.
async (payload, thunkAPI) => {
  
    try {
      // payload를 데이터를 넣어줄때까지 실행하지 하지않겠다. //비동기
      const data = await axios.get(`http://localhost:3001/todos/${payload}`);

//const data = await axios.get('http://localhost:3001/todos')

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const __getComment = createAsyncThunk(
  "comment/getcomment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const __addComment = createAsyncThunk(
  "comment/addcomment",
  // async 는 프로미스에 새로운 신문법이다. // 언제끝나는지 알려준다.
  async (payload, thunkAPI) => {
    try {
      // payload를 데이터를 넣어줄때까지 실행하지 하지않겠다. //비동기
      const data = await axios.post("http://localhost:3001/todos",payload);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comment/deletecomment",
  // async 는 프로미스에 새로운 신문법이다. // 언제끝나는지 알려준다.
  
  async (payload, thunkAPI) => {

    try {
      // payload를 데이터를 넣어줄때까지 실행하지 하지않겠다. //비동기
      await axios.delete(`http://localhost:3001/todos/${payload}`);
      const data = await axios.get('http://localhost:3001/todos')
      //console.log('페이로드',payload)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchComment = createAsyncThunk(
  "comment/patchcomment",
  // async 는 프로미스에 새로운 신문법이다. // 언제끝나는지 알려준다.
  
  async (payload, thunkAPI) => {
    try {
      // payload를 데이터를 넣어줄때까지 실행하지 하지않겠다. //비동기
      const data = await axios.patch(`http://localhost:3001/todos/${payload.id}`,{content:payload.content});
//const data = await axios.get('http://localhost:3001/todos')
      //console.log('페이로드',payload)
      console.log('DB.JSON',data)
      return thunkAPI.fulfillWithValue(data.data);

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);






export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__patchComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__patchComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      console.log("페이로드",action.payload)
      let index =state.todos.findIndex((item)=>(item.id === action.payload.id)); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      state.todos[index] = action.payload
    },
    [__patchComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    }, 
    //
    [__getTodoDetail.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodoDetail.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.

      state.todos.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodoDetail.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    }, 
    // 
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.

      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    }, 
    // 
    [__addComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addComment.fulfilled]: (state, action) => {

      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
      state.todos.push(action.payload) ; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteComment.fulfilled]: (state, action) => {

      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 

      //스토어랑 
      //서버 각각 삭제.

      state.todos=state.todos.filter((item)=>item.id !== action.payload) // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__patchComment.fulfilled]: (state, action) => {

      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 

      state.todos=state.todos.filter((item)=>item.id !== action.payload) // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__patchComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__patchComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    
  },
});



export const {  } = commentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default commentSlice.reducer;





















/*
export const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      state.todoList=[...state.todoList, action.todo]
        //action.action.todo해야할수도 일단 기본형!쓰기.
      },
    deleteTodo:(state,action)=>{
        state.todoList =[...state.todoList.filter((todo) => todo.id !== action.todo.id)]
    },

  },
})

export const {addTodo,deleteTodo} = productSlice.actions
export default productSlice.reducer

*/
/* 
case ADD_TODO :
      return { 
        ...state,
        todoList : [...state.todoList, action.todo],
      }
*/


/*
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


*/