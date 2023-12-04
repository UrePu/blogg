import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛?집';
// 넣을때 중괄호 넣으면 됨 - 데이터바인딩
  let [title1, a] = useState('남자 코트 추천')
  let [title2, b] = useState('여자 코트 추천')
  let [title3, c] = useState('맛집추천')

  return (
    <div className="App">
      <div className="black-nav">
        <h2>블로그~</h2>
      </div>
      <div className="list">
        <h4>{title1}</h4>
        <p>2월 17일 발?행</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>2월 18일 발?행</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>2월 19일 발?행</p>
      </div>

    </div>
  );
}

export default App;
