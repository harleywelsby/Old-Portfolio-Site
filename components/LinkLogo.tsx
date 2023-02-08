import React from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { LinkLogoWrapper } from "../styles/styledComponents";

interface LinkLogoProps {
  iconName: IconDefinition;
  link: string;
  isUserOnMobile: boolean | RegExpMatchArray;
}

function LinkLogo({ iconName, link, isUserOnMobile }: LinkLogoProps) {
  return (
    <LinkLogoWrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <LinkLogoWrapper>
          <FontAwesomeIcon
            icon={iconName}
            size={isUserOnMobile ? "4x" : "5x"}
            className="linkLogo"
            color="white"
          />
        </LinkLogoWrapper>
      </a>
    </LinkLogoWrapper>
  );
}

export default LinkLogo;
