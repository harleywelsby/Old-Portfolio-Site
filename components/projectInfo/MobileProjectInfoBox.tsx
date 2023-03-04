import {
  ContentWrapper,
  DescriptionText,
  FlexColumn,
  InfoBoxContent,
  NameText,
} from "@/styles/styledComponents";
import React from "react";
import Image from "next/image";
import { ProjectInfoBoxProps } from "./ProjectInfoBoxProps";

function MobileProjectInfoBox({
  title,
  description,
  imagePath,
  link,
}: ProjectInfoBoxProps) {
  return (
    <ContentWrapper className="basePadding">
      <InfoBoxContent>
        <FlexColumn>
          <NameText className="mobileProjectNameText">{title}</NameText>
          <DescriptionText className="mobileDescriptionText">
            {description}
          </DescriptionText>
          <Image
            className="profilePhoto selfCenter whiteOutline"
            src={imagePath}
            alt="ProjectDemo"
            width={250}
            height={250}
            priority={true}
            loading="eager"
          />
        </FlexColumn>
      </InfoBoxContent>
    </ContentWrapper>
  );
}

export default MobileProjectInfoBox;
