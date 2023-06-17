import {
  ContentWrapper,
  FlexRow,
  NameText,
  ProjectsPageWrapper,
} from "@/styles/styledComponents";
import ProjectInfoBox from "@/components/ProjectInfoBox";
import {
  BlueAvocadoDescription,
  BlueAvocadoGithubLink,
  BlueAvocadoImage,
  BlueAvocadoTitle,
  HwDevDescription,
  HwDevGithubLink,
  HwDevImage,
  HwDevTitle,
} from "@/components/constants/projectsConstants";
import LinkLogo from "@/components/LinkLogo";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GithubUrl, LinkedinUrl } from "@/components/constants/constants";
import { useContext } from "react";
import { MobileUserContext } from "@/components/MobileUserContext";

function Projects() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <>
      <title>Harley Welsby | Projects</title>
      <ProjectsPageWrapper>
        <ContentWrapper>
          <NameText isMobile={isUserOnMobile}>Projects</NameText>
        </ContentWrapper>
        <FlexRow>
          <LinkLogo iconName={faHouse} link="/" padding size="2x" />
          <LinkLogo
            iconName={faLinkedin}
            link={LinkedinUrl}
            padding
            size="2x"
            newTab
          />
          <LinkLogo
            iconName={faGithub}
            link={GithubUrl}
            padding
            size="2x"
            newTab
          />
        </FlexRow>
        <div>
          <ProjectInfoBox
            title={BlueAvocadoTitle}
            description={BlueAvocadoDescription}
            imagePath={BlueAvocadoImage}
            link={BlueAvocadoGithubLink}
          />
          <ProjectInfoBox
            title={HwDevTitle}
            description={HwDevDescription}
            imagePath={HwDevImage}
            link={HwDevGithubLink}
          />
        </div>
      </ProjectsPageWrapper>
    </>
  );
}

export default Projects;
