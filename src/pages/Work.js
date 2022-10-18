import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';


const Work = () => {
  const navigate = useNavigate()
  const params = useParams()
  // console.log(params)
  const select = useSelector(state => state)
  // console.log(select)
  const todoList = (select.todos.todoList)
  // console.log(todoList)
  const todo = todoList.find(todo => todo.id === Number(params.id))
  // console.log(todo)
  
  const [content, setContent] = useState(todo.content)
  // console.log(todo.content)
  const [readonly, setReadOnly] = useState(true); //true 일 때 읽기 상태

  const handleEdit = () => {
    setReadOnly(true)
    setContent(todo.content)
  }

  return (
    <AllBox>
      <IdBtn>
        <Params_Id>id:{params.id}</Params_Id>
        <WorksBtn onClick={ () => navigate('/Works')}>이전으로</WorksBtn>
      </IdBtn>
      <Title>{todo.title}</Title>
      <ContentBox>
          { readonly? ( // {상태값? (ture) : (false)}
            <ContentBox>{content}</ContentBox> 
          ) : (
            <TextBox
              rows="10" 
              maxlength="200"
              value={content}
              onChange={(e) => setContent(e.target.value)}  
            />
          )}
      </ContentBox>
      <UpdateBox>
        {readonly? (
          //읽기 상태
            <UpdateBtn  onClick={() => setReadOnly(!readonly)}>수정</UpdateBtn>
        ) : (
          //수정 상태
          <>
            <UpdateBtn  onClick={() => setReadOnly(!readonly)}>완료</UpdateBtn>
            <UpdateBtn onClick={handleEdit}>취소</UpdateBtn>
          </>
        )}
      </UpdateBox>
    </AllBox>
  )
}

export default Work;

const AllBox = styled.div`
    height: calc(100vh - 45px);
    background-color: rgb(255, 255, 255);
    padding: 24px;
`
const IdBtn = styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 32px;
`
const Params_Id = styled.div`
  font-size: 24px;
`
const WorksBtn = styled.div`
    text-decoration: underline;
    color: teal;
    cursor: pointer;
    font-size: 24px;
`
const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
`
const UpdateBox = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
`
const UpdateBtn = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  height: 46px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
`
const ContentBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  min-height: 550px;
  line-height: 1.5;
  font-size: 18px;
`
const TextBox = styled.textarea`
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  padding: 12px;
  font-size: 14px;
  line-height: 1.5;
  font-size: 18px;
`

// 먼저, html, Css 모양부터 만들기
// 리덕스의 useSelector과 find(id)해서 가져오기
// 이전기능 버튼과 기능 만들기
// 수정을 누르면 두가지 기능
//   1.타이핑 할 수 있는 상태
//   2.저장 & 취소버튼 
//   취소는 원래의 내용(수정과 반대) 
//   저장은 dispatch를 이용해 리덕스 -> 내용변경