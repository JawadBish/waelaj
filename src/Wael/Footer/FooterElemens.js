import styled from 'styled-components';



/*   
 --clr-light: #fff;
    --clr-dark: #002F56 ;
    --clr-accent: #003D77;
    --clr-less: #3880C5;

    */

export const FooterContainer = styled.div`
  background-color: #130E12;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  padding-bottom: 1px;
  /* border: 1px ridge #1A4301; */
  margin-top: 3px;
  @media screen and (max-width: 380px) {
    display: none;
    
  }
`;







export const SocialMedia = styled.section`
  max-width: 1000px;

`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 10px auto 0 auto;
`;



export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 35px;

:hover {
  color: #02C2FF;
  transition: all 0.3s ease-out;

}  
`;


export const WebsiteRights = styled.small`
  color: white;
  margin-bottom: 16px;
`;