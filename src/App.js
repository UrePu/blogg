// eslint-disable 

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛?집';
// 넣을때 중괄호 넣으면 됨 - 데이터바인딩
  // let [title1, a] = useState('남자 코트 추천')
  // let [title2, b] = useState('여자 코트 추천')
  // let [title3, c] = useState('맛집추천')

  let [글제목, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학'])
  let [좋아요, 좋아요변경] = useState(0);

  // function addLike() {
  //   console.log(좋아요);
  //   좋아요 += 1;
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h2>블로그~</h2>
      </div>

      <button onClick={()=> {
        let titleCopy = [...글제목];
        titleCopy.sort();
        b(titleCopy);
      }}>
        가나다 정?렬
      </button>

      <span onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        b(copy);
        }}>글 수정</span>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=> {좋아요변경(좋아요 + 1)}}>👍</span>{좋아요}</h4>
        <p>2월 17일 발?행</p>
      </div>


      <div className="list">
        <h4>{글제목[1]} </h4>
        <p>2월 18일 발?행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발?행</p>
      </div>

    </div>
  );
}

export default App;
