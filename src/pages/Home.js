import React from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom'

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
height:10px;
align-items:center;
margin: 10px 10px 10px 10px;
border:1px solid silver;
display:flex;
justify-content:space-between;

`
let Img = styled.img`
width:80px;
height:70px;
`


export const Home = () => {



  return (
  <Root>
    <Rootbody>
      <Container>
        <Title>무엇을 할까요?</Title>
          <Link to={'/Work/add'}  style={{paddingLeft: 13, textDecoration: 'none',color:'black'}} title="집 아이콘" >
            <Div >할일 기록하기
                <Img src='https://cdn.dribbble.com/users/5976/screenshots/3139396/media/bdef4821ccf483c6e2c2fa4b200b5971.png?compress=1&resize=400x300&vertical=top'/>
            </Div> 
          </Link>
          <Link to={'/Works'}  style={{paddingLeft: 13, textDecoration: 'none', color:'black'}} title="집 아이콘" >
            <Div>TODO LIST
                <Img src='https://cdn.dribbble.com/users/5976/screenshots/3139396/media/bdef4821ccf483c6e2c2fa4b200b5971.png?compress=1&resize=400x300&vertical=top'/>
            </Div> 
          </Link>
      </Container>
    </Rootbody>
  </Root>
  )
}

export default Home;


/*
쉬운것부터
메인페이지:
헤더부분을 컴포넌트화(Header components를 만들어서)해서 app.js헤더 
부분에 공통적으로 들어가는 Home 투두리스트를

*/