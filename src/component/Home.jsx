import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Content>
          <Section>
            <span>Add the Tasks</span>
            <Form>
              <Input type="text" placeholder="Add the Task Here" />
              <Button>Add</Button>
            </Form>
          </Section>
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

const Section = styled.section`
  background-color: white;
  padding: 30px 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

export default Home;
