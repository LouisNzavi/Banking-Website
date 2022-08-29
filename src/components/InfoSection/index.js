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

import { Button } from "../ButtonElement";

const InfoSection = ({
  lightBj,
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
}) => {
  return (
    <>
      <InfoContainer lightBj={lightBj} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Coloumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home"> {buttonLabel} </Button>
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
