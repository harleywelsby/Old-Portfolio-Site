import React, { useState } from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { LinkLogoWrapper } from "../styles/styledComponents";

interface LinkLogoProps {
  iconName: IconDefinition;
  link: string;
  label?: string;
  newTab?: boolean;
  isUserOnMobile: boolean | RegExpMatchArray;
}

// Icon/Logo with a label and link to a given URL.
function LinkLogo({
  iconName,
  link,
  label,
  newTab,
  isUserOnMobile,
}: LinkLogoProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <a href={link} target={newTab ? "_blank" : ""} rel="noreferrer">
      <LinkLogoWrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <FontAwesomeIcon
          icon={iconName}
          size={isUserOnMobile ? "4x" : "5x"}
          className={isHover ? "linkLogoHover" : ""}
          color="white"
        />
        <p
          className={
            isHover ? "linkLogoHover labelMargin" : "linkLogoText labelMargin"
          }
        >
          {label || null}
        </p>
      </LinkLogoWrapper>
    </a>
  );
}

export default LinkLogo;
