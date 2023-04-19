import React from 'react';
import './StyledCom.css';
import styled from 'styled-components';

// const a = {
//   backgroundColor: 'red',
// };

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledCom = () => {
  return (
    <div>
      <div className="box-styled">리액트</div>
      <div>안녕</div>
      <Title>안녕하세요</Title>
    </div>
  );
};

export default StyledCom;
