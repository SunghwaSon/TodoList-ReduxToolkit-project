import React from 'react';
import { Route, Routes }from "react-router-dom"
import { Header } from './pages/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Works from './pages/Works';
import WorkAdd from './pages/WorkAdd';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element = {<Home />} /> 
      {/* 메인페이지 */}
      <Route path="/Work/add" element = {<WorkAdd />} /> 
      {/* 할 일 기록하기 */}
      <Route path="/Works" element = {<Works />} /> 
      {/* todolist의 내 할일 */}
      <Route path="/Works/:id" element = {<Work />} />
      {/* todolist의 상세페이지 */}
    </Routes>
    </>
  );
}

export default App;