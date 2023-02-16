import React, { useState } from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { LinkLogoLabel, LinkLogoWrapper } from "../styles/styledComponents";

interface LinkLogoProps {
  iconName: IconDefinition;
  link: string;
  isUserOnMobile: boolean | RegExpMatchArray;
}

function LinkLogo({ iconName, link, isUserOnMobile }: LinkLogoProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <LinkLogoWrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <FontAwesomeIcon
          icon={iconName}
          size={isUserOnMobile ? "4x" : "5x"}
          className={isHover ? "linkLogo" : ""}
          color="white"
        />
        <LinkLogoLabel className={isHover ? "linkLogo" : ""}>
          GitHub
        </LinkLogoLabel>
      </LinkLogoWrapper>
    </a>
  );
}

export default LinkLogo;
