// eslint-disable

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

    let post = '강남 우동 맛?집';
    // 넣을때 중괄호 넣으면 됨 - 데이터바인딩 let [title1, a] = useState('남자 코트 추천') let [title2, b]
    // = useState('여자 코트 추천') let [title3, c] = useState('맛집추천')

    let [글제목, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학'])
    let [좋아요, 좋아요변경] = useState(0);
    let [modal, setModal] = useState(false)

   
    // [1,2,3].map(function(){
    //   console.log(1);
    // })


    var 글수정 = function() {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        b(copy);
    }
    
    // function addLike() {   console.log(좋아요);   좋아요 += 1; }

    return (
        <div className="App">
            <div className="black-nav">
                <h2>블로그~</h2>
            </div>

            <button
                onClick={() => {
                    let titleCopy = [...글제목];
                    titleCopy.sort();
                    b(titleCopy);
                }}>
                가나다 정?렬
            </button>

            <span
                onClick={글수정}>글 수정</span>
                
            {
            글제목.map(function(a,i){
                return(
                    <div className='list' key={i}>
                        <h4 onClick={()=>{
                            if(modal){
                                setModal(false)
                                
                            }else{
                                setModal(true)
                            }
                        }}> {글제목[i]} 
                        <span onClick={()=>{좋아요변경(좋아요 + 1)}}>👍</span> {좋아요}
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>
                )
            }) 
        }

            {/* <div className='modal'>
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
              </div> */
            }
            {
                
                modal == true
                    ? <Modal color={'skyblue'} 글수정={글수정} 글제목={글제목}/>
                    : null
            }

        </div>
    );
}

function Modal(props) {
    //component 문법! 의미없는 div가 아닌 그냥 묶는법<> </>
    return (
        <div className='modal' style={{background : props.color}}>
            <h4>{props.글제목[i]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={props.글수정}>글 수정</button>
        </div>
    )
}

export default App;
