import styled from "styled-components";
import "animate.css";

interface ICrossPlatformComponent {
  isUserOnMobile: boolean;
}

export const HomepageRoot = styled.div<ICrossPlatformComponent>`
  background-color: #282a3a;
  min-height: 100vh;
  display: flex;
  flex-direction: ${(props) =>
    props.isUserOnMobile ? "column-reverse" : "row"}
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const ProfilePhoto = styled.img<ICrossPlatformComponent>`
  width: ${(props) => (props.isUserOnMobile ? "16rem" : "30rem")};
  display: flex;
  padding: 10px;
  margin-right: ${(props) => (props.isUserOnMobile ? "0rem" : "8rem")};
  border-radius: 30px;
`;

export const NameText = styled.h1<ICrossPlatformComponent>`
  font-size: ${(props) => (props.isUserOnMobile ? "50px" : "90px")};
  display: contents;
  color: #ffaa4c;
`;

export const RoleText = styled.p`
  font-size: 35px;
  margin: 0;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  font-family: "Trebuchet MS", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const LinkLogoSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 250px;
`;

export const LinkLogoWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
