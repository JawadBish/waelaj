import styled from 'styled-components'

import { Link } from 'react-router-dom';




export const Container = styled.div`
  z-index: 1;
  @media screen and (max-width: 600px) {
  }
`;


export const Nav = styled.nav`
background-color: #130E12;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
 z-index: 5;
@media screen and (max-width:1170px) {
  transition:0.8s all ease;
}
`;
export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-around;
background-color:  #130E12;
width : 100%;
${Container}
`;

export const Logo = styled(Link)`
font-family: 'Finger Paint', cursive;
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



export const ImgEnd = styled.img`
  width : 120px;
  height: 120px;
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
  justify-content: start;
  list-style: none;


  @media screen and (max-width: 1170px) {
    display: flex;
    flex-direction: column;
    height: 95vh;
    position: absolute;
    top: 70px;     
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    width : 100%;
    transition: all 0.5s ease;
    background: #130E12;
    
  }
`;

export const Item = styled.li`
  border-bottom: 3px solid transparent;
 

  &:hover {
      border-bottom: 2px solid white; 
  }

  @media screen and (max-width: 1170px) {
  

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

    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
 font-family: 'Cairo', sans-serif;
  color: white;
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
   
    display: table;

    &:hover {
      text-shadow : 2px 2px white;
      transition: all 0.5s ease;
    }
  }
`;



export const NavLinksA = styled.a`
 font-family: 'Finger Paint', cursive;
  color: white;
  display: flex;
  font-size: 18px;
  font-weight:bold;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 1170px) {
    text-align: center;
    padding: 2rem;
    font-size: 1.4rem;
    
    display: table;

    &:hover {
      color: white;
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

  border: none;
  outline: none;
`;

