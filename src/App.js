import logo from './logo.svg';
import './App.css';
import Spread from './spread';
import { useState, useEffect } from 'react';
import Sub from './Sub';
import { effecNum } from './Effec';
import Effec from './Effec';
import MemoSub from './MemoSub';
import RefSub from './RefSub';
import StyledCom from './StyledCom';
import HomePage from './pages/HomePage';

//  0. React 엔진 = 데이터 변경 감지에서 UI 그려주는 엔진
//  1. 실행과정 (index.html) - SPA(싱글 페이지 어플리케이션) => a태그 사용불가
//  2. JSX 문법 ex) <App/>
//  3. 바벨(자바스크립트 ES5) -> ES6(화살표 함수 가능)

//  JSX문법은 HTML과 유사한 구조를 가지고 있어 객관적이고 사용하기 간편하다. 자바스크립트에 HTML을 넣는다고 생각하면 됨

//  (1) react는 하나의 DOM return해준다.
//  (2) 변수선언은 let 혹은 const로만 한다.
//  (3) if 사용 불가능 -> 삼항연산자는 가능 (조건 ? true: false)
//  (4) 조건부 렌더링 -> (조건 && true) false면 아예 보여주지 않는다.
/**
 *  (5) css 디자인
 *    -내부에 적는 방법 -> 비추천
 *    -외부 파일에 적는 방법
 *    -라이브러리 사용 (부트스트랩, component-styled)
 * */

let a = 10; // 변수
const b = 20; // 상수

function App() {
  // let c;
  // let d = undefined;
  // let b = [1, 2, 3, 4];
  // console.log(1, c);

  const myStyle = {
    color: 'red',
  };

  // let number = 1; //상태 값 아님
  const [number, setNumber] = useState(2); // React 안에 hooks 라이브러리 상태값이 된다.

  const add = () => {
    setNumber(number + 1); //++은 자신에게 더하는거기 때문에 + 1 로 해줘야 한다. 이는 React한테 number값 변경할께 하고 요청한다.
    console.log('add', number);
  };

  console.log('App 실행됨');

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '홍길동2' },
    { id: 4, name: '홍길동3' },
  ];

  const [num, setNum] = useState(5);

  //다운로드 받음
  const [users, setUsers] = useState(sample); //레퍼런스가 변경돼야 동작한다. [...sample] 스프레드를 이용하면 강제로 레퍼런스를 변경시키는 동작을 할 수 있다.

  const download = () => {
    // fetch().then().then()
    const a = sample.concat({ id: num, name: '홍길동4' });
    // setUsers([...sample, { id: num, name: '홍길동4' }]);
    setUsers(a);
    setNum(num + 1);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <div style={myStyle}>안녕 {a === 10 ? '10입니다.' : '10이아닙니다.'}</div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
      <div>{b[0]}</div>
      <hr />

      <Spread />
      <hr />
      <div>
        <h1>숫자: {number}</h1>
        <button onClick={add}>더하기</button>
        <Sub />
      </div>
      <hr />

      <div>
        <button onClick={download}>다운로드</button>
        {users.map((u) => {
          return (
            <h1>
              {u.id}, {u.name}
            </h1>
          );
        })}
      </div>

      <hr />
      {effecNum}
      <Effec />
      <hr />

      <MemoSub />
      <hr />

      <RefSub />
      <hr />

      <StyledCom />

      <hr />
      <hr />

      <HomePage />
    </div>
  );
}

export default App;
