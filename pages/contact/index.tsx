import LinkLogo from "@/components/LinkLogo";
import { MobileUserContext } from "@/components/MobileUserContext";
import {
  AboutMeUrl,
  CodeUrl,
  GithubLabel,
  GithubUrl,
  LinkedinLabel,
  LinkedinUrl,
} from "@/components/constants/constants";
import {
  ContactPageWrapper,
  ContentWrapper,
  FlexRow,
  FreePageText,
  NameText,
} from "@/styles/styledComponents";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faComment,
  faLaptopCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { useContext } from "react";

function Contact() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <>
      <Head>Harley Welsby | Contact</Head>
      <ContactPageWrapper>
        <ContentWrapper>
          <NameText isMobile={isUserOnMobile}>Contact</NameText>
        </ContentWrapper>
        <FlexRow>
          <LinkLogo iconName={faHouse} link="/" padding size="2x" />
          <LinkLogo iconName={faUser} link={AboutMeUrl} padding size="2x" />
          <LinkLogo iconName={faLaptopCode} link={CodeUrl} padding size="2x" />
          <LinkLogo
            iconName={faComment}
            link={""}
            padding
            size="2x"
            isSelected
          />
        </FlexRow>
        <FreePageText isMobile={isUserOnMobile}>
          I always love to meet more people in the IT and Technology space in
          New Zealand, so feel free to get in touch with me at the links below:
        </FreePageText>
        <FlexRow>
          <LinkLogo
            iconName={faLinkedin}
            link={LinkedinUrl}
            label={LinkedinLabel}
            size={isUserOnMobile ? "4x" : "5x"}
            padding
          />
          <LinkLogo
            iconName={faGithub}
            link={GithubUrl}
            label={GithubLabel}
            size={isUserOnMobile ? "4x" : "5x"}
            padding
          />
        </FlexRow>
      </ContactPageWrapper>
    </>
  );
}

export default Contact;
