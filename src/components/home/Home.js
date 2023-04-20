import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

//부모로 부터 받아온 데이터로 스타일링을 동적으로 할것이라면
const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//같은  버튼을 만들고 싶은데 색이나 폰트 등 일정 부분만 바꾸고 싶을 때 (상속받아서 사용할 수 있음)
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`;

//Function 방식
const Home = (props) => {
  //props 전체가 넘어온다.
  // console.log('props: ', props);

  //props에서 boards만 넘어온다.
  //const boards = props.boards;
  //console.log('boards: ', boards);

  //구조분할 할당
  //주의: 앞에서 boards 라는 이름으로 보냈으면, 중괄호 내에 boards 라고 써줘야 받을 수 있다.
  const { boards, setBoards, number, setNumber, user } = props;

  console.log('user: ', props.user);

  return (
    <div>
      <h1>홈: {number}</h1>
      <Button variant="primary">Primary</Button>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호 증가
      </button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton
        user={user}
        onClick={() => {
          setBoards([]);
        }}
      >
        전체 삭제
      </StyledDeleteButton>
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
