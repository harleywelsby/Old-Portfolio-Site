import NameAndRole from "@/components/NameAndRole";
import { PageWrapper } from "@/styles/styledComponents";
import ProjectInfoBox from "@/components/ProjectInfoBox";
import {
  BlueAvocadoDescription,
  BlueAvocadoImage,
  BlueAvocadoTitle,
} from "@/components/constants";
function Projects() {
  return (
    <PageWrapper className={"projectsPageWrapper"}>
      <NameAndRole />
      <ProjectInfoBox
        title={BlueAvocadoTitle}
        description={BlueAvocadoDescription}
        imagePath={BlueAvocadoImage}
      />
    </PageWrapper>
  );
}

export default Projects;
