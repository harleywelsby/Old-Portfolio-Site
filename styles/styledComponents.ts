import styled from "styled-components";
import "animate.css";

interface ICrossPlatformComponent {
  className?: string;
  isMobile?: boolean;
}

/******************************
 *       Page Wrappers        *
 ******************************/

export const HomePageWrapper = styled.div<ICrossPlatformComponent>`
  background-color: #282a3a;
  min-height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: ${(props) => (props.isMobile ? "column-reverse" : "row")};
`;

export const ProjectsPageWrapper = styled.div`
  background-color: #282a3a;
  min-height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  font-family: "Trebuchet MS", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ProjectInfoBoxWrapper = styled.div<ICrossPlatformComponent>`
  font-family: "Trebuchet MS", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.isMobile ? "20px" : "3px")};
`;

/******************************
 *            Text            *
 ******************************/

export const NameText = styled.h1<ICrossPlatformComponent>`
  display: contents;
  color: #ffaa4c;
  font-size: ${(props) => (props.isMobile ? "50px" : "90px")};
`;

export const RoleText = styled.p`
  font-size: 35px;
  margin: 0;
  text-align: center;
`;

export const ProjectTitleText = styled.h1<ICrossPlatformComponent>`
  display: contents;
  color: #ffaa4c;
  font-size: ${(props) => (props.isMobile ? "25px" : "50px")};
`; // TODO

export const DescriptionText = styled.p<ICrossPlatformComponent>`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: ${(props) => (props.isMobile ? "12px" : "25px")};
  padding: ${(props) => (props.isMobile ? "0px" : "5px")};
`;

// TODO from below

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

export const InfoBoxContent = styled.div`
  width: 80%;
  text-align: center;
  padding: 20px;
  border: 1.5px solid;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
