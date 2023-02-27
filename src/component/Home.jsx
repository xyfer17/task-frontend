import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Content>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </Content>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding-top: 150px;

  justify-content: center;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
