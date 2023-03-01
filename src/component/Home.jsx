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

          <DataItem>
            <Item>
              <span>test</span>
              <button>submit</button>
            </Item>

            <Item>
              <span>test</span>
              <button>submit</button>
            </Item>
            <Item>
              <span>test</span>
              <button>submit</button>
            </Item>
            <Item>
              <span>test</span>
              <button>submit</button>
            </Item>
          </DataItem>
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
  align-items: center;
  flex-direction: column;
`;

const Section = styled.section`
  background-color: white;
  padding: 60px 180px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 50px;
  }

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  span {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 12px;
    margin-top: -12px;
  }
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  background: #fafbfc;
  border-color: transparent;
  border: 1px solid #dbe0ea;
`;

const Button = styled.button`
  padding: 8px 15px;
  border-radius: 0 7px 7px 0;
  border: none;

  z-index: 15;
  margin-left: -1px;
  background-color: #3455b8;
  color: white;
  &:hover {
    background-color: #1d50e9;
  }
`;

const Item = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 60px 180px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 50px;
  }
  width: 100%;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const DataItem = styled.div`
  margin-top: 90px;
`;

export default Home;
