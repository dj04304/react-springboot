import React from 'react';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height 300px;
`;

const Header = () => {
  return (
    <div>
      <StyledHeaderDiv>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      </StyledHeaderDiv>
    </div>
  );
};

export default Header;
