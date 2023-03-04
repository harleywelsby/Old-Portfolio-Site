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
import LinkLogo from "../LinkLogo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
          <LinkLogo
            iconName={faGithub}
            link={link}
            size={"2x"}
            newTab
            padding
          />
          <DescriptionText className="mobileDescriptionText negative1TopMargin">
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
