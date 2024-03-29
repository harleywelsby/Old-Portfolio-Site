import {
  DescriptionText,
  FlexColumn,
  InfoBoxContent,
  ProjectInfoBoxWrapper,
  ProjectTitleText,
} from "@/styles/styledComponents";
import React, { useContext } from "react";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LinkLogo from "./LinkLogo";
import { MobileUserContext } from "./MobileUserContext";

interface ProjectInfoBoxProps {
  title: string;
  description: string;
  imagePath: string;
  link: string;
}

function ProjectInfoBox({
  title,
  description,
  imagePath,
  link,
}: ProjectInfoBoxProps) {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <ProjectInfoBoxWrapper>
      <InfoBoxContent isMobile={isUserOnMobile}>
        {!isUserOnMobile && (
          <Image
            /* Styles are different here as styled components 
             can't build on top of the next/Image component */
            className="projectPhoto"
            src={imagePath}
            alt="ProjectDemo"
            width={300}
            height={300}
            priority={true}
            loading="eager"
          />
        )}
        <FlexColumn>
          <ProjectTitleText isMobile={isUserOnMobile}>{title}</ProjectTitleText>
          {isUserOnMobile && (
            <LinkLogo
              iconName={faGithub}
              link={link}
              size={"2x"}
              newTab
              padding
            />
          )}
          <DescriptionText isMobile={isUserOnMobile}>
            {description}
          </DescriptionText>
          {isUserOnMobile && (
            <Image
              /* Styles are different here as styled components 
                 can't build on top of the next/Image component */
              className="profilePhoto mobileProjectPhoto"
              src={imagePath}
              alt="ProjectDemo"
              width={200}
              height={200}
              priority={true}
              loading="eager"
            />
          )}
        </FlexColumn>
        {!isUserOnMobile && (
          <LinkLogo iconName={faGithub} link={link} size={"2x"} newTab />
        )}
      </InfoBoxContent>
    </ProjectInfoBoxWrapper>
  );
}

export default ProjectInfoBox;
