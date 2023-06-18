import styled from "styled-components";
import "animate.css";

interface ICrossPlatformComponent {
  className?: string;
  isMobile?: boolean;
}

/******************************
 *  Page/Component Wrappers   *
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

export const ProjectInfoBoxWrapper = styled.div`
  font-family: "Trebuchet MS", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 3px;
`;

export const LinkLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const InfoBoxContent = styled.div<ICrossPlatformComponent>`
  width: 80%;
  text-align: ${(props) => (props.isMobile ? "center" : "left")};
  padding: 20px;
  border: 1.5px solid;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
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
  text-align: ${(props) => (props.isMobile ? "center" : "left")};
  font-size: ${(props) => (props.isMobile ? "25px" : "50px")};
`;

export const DescriptionText = styled.p<ICrossPlatformComponent>`
  margin-top: ${(props) => (props.isMobile ? "-0.5rem" : "0rem")};
  margin-left: ${(props) => (props.isMobile ? "0.2rem" : "-0.2rem")};
  margin-right: 0.2rem;
  margin-bottom: 1rem;
  text-align: ${(props) => (props.isMobile ? "center" : "left")};
  font-size: ${(props) => (props.isMobile ? "12px" : "25px")};
  padding: ${(props) => (props.isMobile ? "0px" : "5px")};
`;

/******************************
 *         Flexboxes          *
 ******************************/

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
