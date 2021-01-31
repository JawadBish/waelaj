import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
  import {
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
  } from './FooterElemens';


const Footer = () => {
        return (
            <>
            <FooterContainer>
                <SocialMedia>
        <SocialMediaWrap>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/Jawad.Bish' 
            target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/jawadbish/?hl=en' 
            target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/channel/UCon3fko1p-x8CeAU1JSfNmA' 
            target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
                     <SocialIconLink href='https://www.linkedin.com/in/jawad-bisharat-102831117/' 
            target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='https://github.com/JawadBish' 
            target='_blank' aria-label='GitHub'>
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>

      </FooterContainer>
      
            </>
        )
    
}


export default Footer;