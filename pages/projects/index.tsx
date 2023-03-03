import NameAndRole from "@/components/NameAndRole";
import { FlexRow, PageWrapper } from "@/styles/styledComponents";
import ProjectInfoBox from "@/components/ProjectInfoBox";
import {
  BlueAvocadoDescription,
  BlueAvocadoGithubLink,
  BlueAvocadoImage,
  BlueAvocadoTitle,
  GithubUrl,
  LinkedinUrl,
} from "@/components/constants";
import LinkLogo from "@/components/LinkLogo";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <PageWrapper className={"projectsPageWrapper"}>
      <NameAndRole />
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
      <ProjectInfoBox
        title={BlueAvocadoTitle}
        description={BlueAvocadoDescription}
        imagePath={BlueAvocadoImage}
        link={BlueAvocadoGithubLink}
      />
    </PageWrapper>
  );
}

export default Projects;
