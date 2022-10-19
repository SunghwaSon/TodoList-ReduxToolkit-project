import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuidv4} from "uuid";

import styled from 'styled-components';
import { addTodo } from '../redux/modules/todos';


const WorkAdd = () => {
  const todolist = useSelector(state=>state.todos.todoList)
  
  const dispatch = useDispatch();



  const [todoLists,setTodoLists] = useState({
    id: 0,
    user:"",
    title: "",
    content: "",
  });
  // 이니셜 스테이트 -> todoLists-> 핸들러에 배열 뿌림
  
  const onChangeHandler = (event) =>{
    const{name,value} = event.target;
    setTodoLists({...todoLists,[name]:value});
  };

  // 체인지 핸들러 밑에 name,value 전에 user title content 썼었음, 세 개 event target 먹으라고
  // todolists => 객체 => 키,값
  // todolists spread name value라고 버튼에 썼음

  
  const onsubmitHandler = (event) =>{
    event.preventDefault()
    if (
      todoLists.user.trim() === "" ||
      todoLists.title.trim() === "" ||
      todoLists.content.trim() === ""
      
    )    return alert ("입력해라")

    dispatch(addTodo({...todoLists,id: uuidv4()}));
    setTodoLists({
      id: 0,
      user:"",
      title: "",
      content: "",
    });

    
  
 
  };
  


  return (
    <StContainer>
        <StAddForm action="" onSubmit={onsubmitHandler}>
        <h2>작성자</h2>
        <StInputGroup 
        type="text" 
        name="user" 
        value={todoLists.user} 
        onChange={onChangeHandler}
        placeholder="이름을 입력해주세요"
        />
        <h2>제목</h2>
        <StInputGroup 
        type="text" 
        name="title" 
        value={todoLists.title} 
        onChange={onChangeHandler} 
        placeholder="제목을 입력해주세요"
        />
        <h2>내용</h2>
        <Textarea
        type="text" 
        name="content" 
        value={todoLists.content} 
        onChange={onChangeHandler}
        placeholder="내용을 입력해주세요"
        />
        <button size="large">추가하기</button>
      </StAddForm>
      </StContainer>
     
      
    )
}

export default WorkAdd;


const StInputGroup = styled.input`
width: 100%;
height: 50px;
font-size: 14px;
border: 2px solid #eee;
`

const StAddForm = styled.form`
  width: 100%;
  height: 100%;
  font-size: 14px;
  cursor: pointer;
`;
const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
  
`;

const StContainer = styled.div`
  height: 100%;
`;
