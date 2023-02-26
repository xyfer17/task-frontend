import React from "react";
import styled from "styled-components";
import avatar from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Section>
          <Items>
            <img src={avatar} alt="" />
            <span>Login</span>
            <Form onSubmit={() => navigate("/home")}>
              <Input type="text" placeholder="username" required />

              <Input type="password" placeholder="password" required />
              <Button type="submit">Login</Button>
            </Form>
          </Items>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;

  padding: 10px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.55);
  border-radius: 16px;
  box-shadow: 0 4px 30px #f80c0cec;
  backdrop-filter: blur(7.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px 7px;
  width: 30%;
  height: 400px;

  &:hover {
    box-shadow: 0 4px 30px #151bcb;
  }

  @media (max-width: 768px) {
    width: 1110px;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 48px;
    height: 48px;
    padding: 10px;
  }

  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 20px;
  border: none;
  box-shadow: 0 2px 10px #dc6666eb;
  border-radius: 10px;
  padding: 20px;
  font-size: 15px;
  font-weight: 400;
  width: 100%;

  &:focus {
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }

  &:hover {
    box-shadow: 0 2px 10px #151bcb;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  width: 90%;
  border-radius: 18px;
  font-weight: 600;
  border: none;
  background-color: rgba(222, 1, 1, 0.6);
  color: rgb(236, 227, 227);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.07);

  &:hover {
    background-color: rgba(20, 56, 214, 0.842);
  }
`;

export default Login;
