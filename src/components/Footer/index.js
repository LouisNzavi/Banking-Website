import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  SocialIconLinks,
  SocialIcons,
  SocialMediaWrap,
  SocialLogo,
  SocialMedia,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Services</FooterLink>
              <FooterLink to="/signin">Discover</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}></SocialLogo>
            <WebsiteRights>
              Grajuan Agency@ {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" aria-label="Facebook">
                {" "}
                <FaFacebook />{" "}
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="TikTok">
                <FaTiktok />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="email">
                <FaGoogle />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
