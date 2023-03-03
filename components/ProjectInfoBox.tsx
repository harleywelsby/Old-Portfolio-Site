import {
  ContentWrapper,
  DescriptionText,
  FlexColumn,
  InfoBoxContent,
  NameText,
} from "@/styles/styledComponents";
import React from "react";
import Image from "next/image";

function ProjectInfoBox() {
  return (
    <ContentWrapper>
      <InfoBoxContent>
        <Image
          className="profilePhoto"
          src="/projectDemos/BlueAvocado.png"
          alt="ProfilePhoto"
          width={300}
          height={300}
          priority={true}
          loading="eager"
        />
        <FlexColumn>
          <NameText className="mobileNameText">Blue Avocado</NameText>
          <DescriptionText>
            {'Blue Avocado was a group project entered in the Summer of Tech "Create Camp" Hackathon in 2021. ' +
              "The project was done across two 9-5 days with 3 developers and 3 designers, and built in React.js. " +
              "Blue Avocado helps users achieve their financial goals by visualizing their saving and spending in a fun and interactive way. " +
              'This includes an avocado-shaped pie chart and a savings projection for coming months. The project won the "Technical Award" for best ' +
              "Working features."}
          </DescriptionText>
        </FlexColumn>
      </InfoBoxContent>
    </ContentWrapper>
  );
}

export default ProjectInfoBox;
