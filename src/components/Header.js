import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

//Link 등 styled로 할수없는 것은 상속해서 동적인 스타일을 줄 수 있다.
const StyeldHeadLink = styled(Link)`
  color: red;
`;

//Link 속성을 통해 path로 이동해 해당 페이지로 교체하는 태그이다.
//a태그의 경우 계속 새로고침하는 특징이 있는 반면, Link는 교체하는 형식이기 때문에 새로고침이 일어나지 않는다.
const Header = () => {
  return (
    <>
      <StyledHeaderDiv backgroundColor={'yellow'}>
        <ul>
          <li>
            <StyeldHeadLink to={'/'}>홈</StyeldHeadLink>
          </li>
          <li>
            <Link to={'/login/10'}>로그인</Link>
          </li>
        </ul>
      </StyledHeaderDiv>

      <>
        <br />
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login/10" className="nav-link">
                login
              </Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />
      </>
    </>
  );
};

export default Header;
