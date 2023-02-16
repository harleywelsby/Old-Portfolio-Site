import { ContentWrapper, InfoBoxText } from "@/styles/styledComponents";
import React from "react";

// Handles meta info for the site
function InfoBox() {
  return (
    <ContentWrapper>
      <InfoBoxText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        vulputate pretium feugiat. Vivamus interdum lacinia orci. Morbi orci
        lacus, rhoncus eget interdum vel, commodo condimentum nulla. Aliquam
        ante mi, blandit id eros in, rhoncus malesuada odio. Integer dapibus
        purus ante, quis tristique ligula finibus eu. Nunc rhoncus dolor vitae
        porttitor ornare. Aliquam convallis risus odio, ac condimentum ex
        ullamcorper a. Sed euismod sapien nulla, nec dapibus diam vestibulum ut.
      </InfoBoxText>
    </ContentWrapper>
  );
}

export default InfoBox;
