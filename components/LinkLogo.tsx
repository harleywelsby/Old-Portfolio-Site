import React, { useState } from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { LinkLogoWrapper } from "../styles/styledComponents";
import Link from "next/link";

interface LinkLogoProps {
  iconName: IconDefinition;
  link: string;
  label?: string;
  newTab?: boolean;
  size: "2x" | "4x" | "5x";
  padding?: boolean;
}

// Icon/Logo with a label and link to a given URL.
function LinkLogo({
  iconName,
  link,
  label,
  newTab,
  size,
  padding,
}: LinkLogoProps) {
  // Custom hover check. We don't use :hover in CSS for this
  // as doing it custom can make both the icon and label change
  // colour at the same time.
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link href={link} target={newTab ? "_blank" : ""} rel="noreferrer">
      <LinkLogoWrapper
        className={`${padding && "linkLogoPadding"}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <FontAwesomeIcon
          icon={iconName}
          size={size}
          className={`${isHover && "linkLogoHover"}`}
          color="white"
        />
        <p
          className={`labelMargin ${
            isHover ? "linkLogoHover" : "linkLogoText"
          }`}
        >
          {label}
        </p>
      </LinkLogoWrapper>
    </Link>
  );
}

export default LinkLogo;
