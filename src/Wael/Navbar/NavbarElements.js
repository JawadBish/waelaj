import styled from 'styled-components'

import { Link } from 'react-router-dom';
import {Container} from '../globalStyles';

/* 

/*   
    --clr-light: #fff;
    --clr-dark: #002F56 ; 538D22
    --clr-accent: #003D77;
    --clr-less: #3880C5;

    */

export const Nav = styled.nav`
background-color: white;
box-shadow: 20px 20px 40px white;
  height: 90px;
 display: flex;
 justify-content: center;
 align-items: center;
 /* font-size: 1.2rem; */
 position: sticky;
 top: 0;
 z-index: 5;

@media screen and (max-width:1170px) {
  transition:0.8s all ease;
}
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 5;
background-color: white;
/* box-shadow: 12px 10px 10px rgba(37, 34, 34, 0.733); */
${Container}
`;

export const Logo = styled(Link)`
font-family: 'Aref Ruqaa', serif;
  color: #1A4301;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 310px) {
    font-size: 30px;
  }
`;

export const Img = styled.img`
  max-width:300px;
  `;



export const Burger = styled.div`
  display: none;
  
  @media screen and (max-width: 1170px) {
    color: #002F56;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1170px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
  }
`;

export const Item = styled.li`
  height: 80px;
  border-bottom: 3px solid transparent;
 

  &:hover {
      border-bottom: 2px solid #002F56; 
  }

  @media screen and (max-width: 1170px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const ItemBtn = styled.li`
  @media screen and (max-width: 1170px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
 font-family: 'Cairo', sans-serif;
  color: #002F56;
  display: flex;
  font-size: 18px;
  font-weight:bold;
  text-shadow : 1px 1px #1A4301;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 1170px) {
    text-align: center;
    padding: 2rem;
    font-size: 1.4rem;
    width: 100%;
    display: table;

    &:hover {
      color: white;
      text-shadow : 2px 2px #1A4301;
      transition: all 0.5s ease;
    }
  }
`;



export const NavLinksA = styled.a`
 font-family: 'Cairo', sans-serif;
  color: #002F56;
  display: flex;
  font-size: 18px;
  font-weight:bold;
  text-shadow : 1px 1px #1A4301;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 1170px) {
    text-align: center;
    padding: 2rem;
    font-size: 1.4rem;
    width: 100%;
    display: table;

    &:hover {
      color: white;
      text-shadow : 2px 2px #1A4301;
      transition: all 0.5s ease;
    }
  }
`;
















export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const BtnLogout = styled.button`
  border-radius: 22px;
  border : 1px solid #002F56;
  background-color: white;
  color: #002F56;
  text-shadow : 1px 1px #1A4301;
  font-family: 'Cairo', sans-serif;
  white-space: nowrap;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight : bold;

  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: white;
    background-color: #002F56;
  }

  @media screen and (max-width: 1170px) {
    width: 100%;
  }
`;

export const NavButton = styled.button`
  border-radius: 22px;
  border : 1px solid #002F56;
  background-color: white;
  color: #002F56;
  text-shadow : 1px 1px #1A4301;
  font-family: 'Cairo', sans-serif;
  white-space: nowrap;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight : bold;

  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: white;
    background-color: #002F56;
  }

  @media screen and (max-width: 1170px) {
    width: 100%;
  }
`;
