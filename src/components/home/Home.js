import React from 'react';

//Function 방식
const Home = (props) => {
  //props 전체가 넘어온다.
  // console.log('props: ', props);

  //props에서 boards만 넘어온다.
  //const boards = props.boards;
  //console.log('boards: ', boards);

  //구조분할 할당
  //주의: 앞에서 boards 라는 이름으로 보냈으면, 중괄호 내에 boards 라고 써줘야 받을 수 있다.
  const { boards, setBoards, number, setNumber } = props;
  return (
    <div>
      <h1>홈: {number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호 증가
      </button>
      <button
        onClick={() => {
          setBoards([]);
        }}
      >
        전체 삭제
      </button>
      {boards.map((board) => {
        return (
          <>
            <h1>제목: {board.title}</h1>
            <h3>내용: {board.content}</h3>
          </>
        );
      })}
    </div>
  );
};

export default Home;
