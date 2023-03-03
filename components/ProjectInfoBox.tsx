import {
  ContentWrapper,
  DescriptionText,
  FlexColumn,
  InfoBoxContent,
  NameText,
} from "@/styles/styledComponents";
import React from "react";
import Image from "next/image";

interface ProjectInfoBoxProps {
  title: string;
  description: string;
  imagePath: string;
  link?: string;
}

function ProjectInfoBox({
  title,
  description,
  imagePath,
  link,
}: ProjectInfoBoxProps) {
  return (
    <ContentWrapper>
      <InfoBoxContent>
        <Image
          className="profilePhoto"
          src={imagePath}
          alt="ProjectDemo"
          width={300}
          height={300}
          priority={true}
          loading="eager"
        />
        <FlexColumn>
          <NameText className="mobileNameText">{title}</NameText>
          <DescriptionText>{description}</DescriptionText>
        </FlexColumn>
      </InfoBoxContent>
    </ContentWrapper>
  );
}

export default ProjectInfoBox;
