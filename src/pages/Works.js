import React from "react";
import  styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import {delete_todo} from '../redux/modules/todos'

let Root = styled.div`
width:100%;
height:100%;
`
let Rootbody = styled.div`
`
let Container = styled.div`
width:100%;
height:800px;
`

let Title = styled.div`
padding:35px;
font-size:30px;
width:100%;
height:30px;
`

let Div = styled.div`
width:300px;
padding:40px;
font-size:20px;
width:95%;
height:20px;
align-items:center;
margin: 10px 0px 0px 10px;
border:1px solid silver;
display:flex;
flex-direction:low;
justify-content:space-between;
border-radius:20px;
`

let DivItem = styled.div`
width:300px;
padding:0px;
padding-bottom:60px;
font-size:20px;
width:95%;
height:10px;
align-items:center;
margin: 10px 10px 0px 0px;
flex-direction:low;
justify-content:space-between;
`
let Img  = styled.img`
width:60px;
height:60px;
background-color:white;
`
let Button = styled.button`
background-color:white;
border:0px;
`



const Works = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const list_box = todos.todoList.map((todo) =>
      <Div key={todo.id}>
        <Link to={`/Works/${todo.id}`}  style={{paddingLeft: 13, textDecoration: 'none',color:'black',width:'90%'}} title="집 아이콘" >
              <DivItem>
                <div>제목:{todo.title}</div>
                <div>작성자:{todo.user}</div>
              </DivItem>
          </Link>
              <Button onClick={()=>{
                dispatch(
                  delete_todo(
                    todo,
                  )
                )
                
              }}>
                  <Img src='https://cdn-icons-png.flaticon.com/512/12/12960.png'/>
              </Button>
    </Div>
  )


  //함수 만드는중 id값 console.log해보기 map안에서
  //여기까지. 값나오는거 확인하기 
  return (
<Root>
    <Rootbody>
      <Container>
        <Title>내 할일</Title>
        {list_box}
      </Container>
    </Rootbody>
  </Root>

)
  
};

export default Works;

/* 

요구사항
1.모듈안에있는 initalstate 배열안에 5개의 값을 기본으로 두고 테스트용으로 쓰자고해서
원규님이 다만들때까지 기다리는게 아닌 그데이터값으로 활용하기
2.할일목록 전체 뿌리기(렌더링)하기
3.클릭하면 상세페이지로 이동한다.
4.삭제버튼을 누르면 삭제된다
5.todos.js 5개 넣기 마스터에다가 push해서 다른분들이 pull받을수있게

*/