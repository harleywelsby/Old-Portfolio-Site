import {
  ContentWrapper,
  DescriptionText,
  FlexColumn,
  InfoBoxContent,
  NameText,
} from "@/styles/styledComponents";
import React from "react";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LinkLogo from "../LinkLogo";
import { ProjectInfoBoxProps } from "./ProjectInfoBoxProps";

function ProjectInfoBox({
  title,
  description,
  imagePath,
  link,
}: ProjectInfoBoxProps) {
  return (
    <ContentWrapper className="projectBoxPadding">
      <InfoBoxContent>
        <Image
          className="profilePhoto selfCenter whiteOutline"
          src={imagePath}
          alt="ProjectDemo"
          width={300}
          height={300}
          priority={true}
          loading="eager"
        />
        <FlexColumn>
          <NameText className="mobileNameText">{title}</NameText>
          <DescriptionText className="webDescriptionText">
            {description}
          </DescriptionText>
        </FlexColumn>
        <LinkLogo iconName={faGithub} link={link} size={"2x"} newTab />
      </InfoBoxContent>
    </ContentWrapper>
  );
}

export default ProjectInfoBox;
