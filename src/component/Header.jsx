import React from "react";
import styled from "styled-components";
import icon from "../assets/icon.png";
import logout from "../assets/logout-svgrepo-com.svg";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="https://github.com/xyfer17">
            <img src={icon} alt="" />
          </a>
        </Logo>

        <span>Task Manager App</span>

        <Logo>
          <a href="/">
            <img src={logout} alt="" />
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  position: fixed;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  span {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.div`
  box-shadow: 0 2px 7px #dc6666eb;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3px;
  border-radius: 10px;
  img {
    height: 3rem;
    border-radius: 0.5rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.07);
    }
  }
`;

export default Header;
