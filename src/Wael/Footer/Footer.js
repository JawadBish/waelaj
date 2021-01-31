import React from 'react';
import {
    FaFacebook,
    FaInstagram,

  } from 'react-icons/fa';

  import {HiOutlineMail} from 'react-icons/hi';

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
            <SocialIconLink href='https://www.facebook.com/wjabal' 
            target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/waelabujabal/?hl=en' 
            target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='' 
            target='_blank' aria-label='sendMail'>
              <HiOutlineMail />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>

      </FooterContainer>
      
            </>
        )
    
}


export default Footer;