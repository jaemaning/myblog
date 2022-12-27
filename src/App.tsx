import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <button>상단왼쪽버튼</button>
        <h4 style={{ textAlign: 'center', marginLeft: "auto", marginRight: "auto" }}>Jeam 블로그</h4>
        <button>상단오른쪽버튼</button>
      </div>

      <Routes>
        <Route path="/" element={<div>홈페이지</div>}></Route>
        <Route path="/works" element={<div>작업물페이지</div>}></Route>
      </Routes>


      <div className='footer'>
        <button className='footer-btn left-bottom'>1</button>
        <button className='footer-btn right-bottom'>2</button>
      </div>
    </div>
  );
}

export default App;
