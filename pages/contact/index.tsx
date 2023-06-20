import LinkLogo from "@/components/LinkLogo";
import { MobileUserContext } from "@/components/MobileUserContext";
import {
  AboutMeUrl,
  CodeUrl,
  GithubUrl,
  LinkedinUrl,
} from "@/components/constants/constants";
import {
  ContactPageWrapper,
  ContentWrapper,
  FlexRow,
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
      </ContactPageWrapper>
    </>
  );
}

export default Contact;
