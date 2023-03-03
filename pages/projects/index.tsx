import NameAndRole from "@/components/NameAndRole";
import { PageWrapper } from "@/styles/styledComponents";
import ProjectInfoBox from "@/components/ProjectInfoBox";
function Projects() {
  return (
    <PageWrapper className={"projectsPageWrapper"}>
      <NameAndRole />
      <ProjectInfoBox />
    </PageWrapper>
  );
}

export default Projects;
