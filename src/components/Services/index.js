import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import Icon4 from "../../images/contactus.svg";
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
            Increase your online brand awareness. Measure your KPIs with hard
            data. Make adjustments to facilitate more growth.
          </SericesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Social Media Goals</ServicesH2>
          <SericesP>
            Increase engagement and brand adovates on different social channels.
            Use our knowledge of platforms and keywords to find growth
            opportunities!
          </SericesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Results</ServicesH2>
          <SericesP>
            An all-around understanding of your brand voice, what is and isn't
            working. See what’s working in your industry & what isn’t to
            determine an optimized strategy
          </SericesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Advertising</ServicesH2>
          <SericesP>
            Defined ad auctions, budget allocation for ads, brand poisitionig,
            ad aesthetic, copy on all social media channels!
          </SericesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
