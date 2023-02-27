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

        <span>Task Manager APP</span>

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
  padding: 1px 20px;

  span {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 25px;
    color: #28c7cc;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const Logo = styled.div`
  padding: 3px;
  border-radius: 5px;
  img {
    height: 3rem;

    border-radius: 0.3rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.07);
    }

    @media (max-width: 768px) {
      height: 2rem;
    }
  }
`;

export default Header;
