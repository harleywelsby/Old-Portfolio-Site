import styled from "styled-components";
import "animate.css";

interface ICrossPlatformComponent {
  className: string;
}

export const PageWrapper = styled.div<ICrossPlatformComponent>`
  background-color: #282a3a;
  min-height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const NameText = styled.h1<ICrossPlatformComponent>`
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
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 150px;
`;

export const LinkLogoWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CaptchaContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

export const CaptchaText = styled.h1<ICrossPlatformComponent>`
  color: #ffffff;
  text-align: center;
`;

export const InfoBoxContent = styled.p`
  width: 80%;
  text-align: center;
  padding: 20px;
  border: solid;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionText = styled.p`
  font-size: 25px;
  margin: 0.5;
  text-align: center;
  padding: 5px;
`;
