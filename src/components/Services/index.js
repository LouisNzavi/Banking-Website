import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import {
  SericesP,
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1> Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Business Goals</ServicesH2>
          <SericesP>
            Increase your online brand awareness.
          </SericesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Social Media Goals</ServicesH2>
          <SericesP>Increase engagement and brand adovates on different social channels.</SericesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Results</ServicesH2>
          <SericesP>An all-around understanding of your brand voice, what is and isn't working.</SericesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
