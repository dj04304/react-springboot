import logo from './logo.svg';
import './App.css';

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
  let c;
  let d = undefined;
  console.log(1, c);

  const myStyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={myStyle}>안녕 {a === 10 ? '10입니다.' : '10이아닙니다.'}</div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
      <hr />
    </div>
  );
}

export default App;
