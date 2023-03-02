import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import editIcon from "../assets/edit-pen-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";
import axios from "axios";

const Home = () => {
  const [rows, setRows] = useState([]);
  const [namev, setNamev] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/tasks");

    if (res.status === 200) {
      setRows(res.data.tasks);
    }
  };

  const postData = (e) => {
    axios.post("http://localhost:5000/api/v1/tasks", { name: namev });
  };

  const DeleteData = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/tasks/${id}`
    );
    const success = response.status === 200;
    if (success) {
      window.location.reload(200);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <Section>
            <span>Add the Tasks</span>
            <Form onSubmit={postData}>
              <Input
                type="text"
                placeholder="Add the Task Here"
                value={namev}
                onChange={(e) => setNamev(e.target.value)}
              />
              <Button>Add</Button>
            </Form>
          </Section>

          <DataItem>
            {rows.map((row, i) => {
              return (
                <Item key={i}>
                  <span>{row.name}</span>
                  <Edit>
                    <img src={editIcon} alt="" />

                    <img
                      src={deleteIcon}
                      alt=""
                      onClick={() => DeleteData(row._id)}
                    />
                  </Edit>
                </Item>
              );
            })}
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

const Form = styled.form`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

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
  background-color: #da4711;
  color: white;
  &:hover {
    background-color: #1d50e9;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 50%;
    border-radius: 7px;
  }
`;

const Item = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 30px 13px;

  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 30px;
  }

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const DataItem = styled.div`
  margin-top: 90px;
  width: 100%;
`;

const Edit = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-left: -20px;
    margin-right: 15px;
    padding: 0 10px;
    width: 18px;
    cursor: pointer;
    height: 18px;
  }
`;

export default Home;
