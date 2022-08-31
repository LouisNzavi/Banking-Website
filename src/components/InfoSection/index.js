import React from "react";
import {
  Coloumn2,
  InfoContainer,
  InfoWrapper,
  Coloumn1,
  TextWrapper,
  TopLine,
  BtnWrap,
  ImgWrap,
  Img,
  InfoRow,
  Heading,
  Subtitle,
} from "./InfoElements";

import { Button } from "../ButtonElements";

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  img,
  alt,
  buttonLabel,
  darkText,
  lightText,
  headline,
  description,
  id,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Coloumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Coloumn1>
            <Coloumn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Coloumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
