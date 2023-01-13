import styled from "styled-components";
import "animate.css";

export const PageRoot = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const ProfilePhoto = styled.img`
  width: 30rem;
  display: flex;
  padding: 10px;
  margin-right: 8rem;
  border-radius: 30px;
`;

export const NameText = styled.h1`
  display: flex;
  margin-bottom: 10rem;
  font-size: 90px;
  font-family: "Trebuchet MS", sans-serif;
`;
