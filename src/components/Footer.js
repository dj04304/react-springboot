import React from 'react';
import styled from 'styled-components';

const StyledFooterDiv = styled.div`
  border: 2px solid blue;
`;

const Footer = () => {
  return (
    <div>
      <StyledFooterDiv>
        <div>오시는 길: 부산광역시...</div>
        <div>전화번호: 00000000</div>
      </StyledFooterDiv>
    </div>
  );
};

export default Footer;
