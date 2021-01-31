import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext} from 'react-icons/lib';
import {Nav,
NavbarContainer,
Logo,
Burger,
Menu,
Item,
NavLinksA,
Img
// NavLinks,
} from './NavbarElements';
import logoblue from '../Imgs/logoWAJ1.jpg'

const Navbar = () => {
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);


    return (
        <>
        <IconContext.Provider value={{color: 'white'}}>
         <Nav>
        <NavbarContainer>
       <Logo to="/">
        <Img src={logoblue} alt="my imgs"/>
        </Logo>
     
           
       
       <Burger onClick={handleClick}> 
           {click ? <FaTimes size={20} color="#003D77"/> : <FaBars size={20} color="#003D77" />}
       </Burger>
       <Menu onClick={handleClick} click={click}>
           <Item>
               <NavLinksA href="#home" >Home</NavLinksA>
           </Item>
       
           <Item>

               <NavLinksA href='#services'>Services</NavLinksA>
           </Item>

           <Item>
               <NavLinksA href='#about'>About Me</NavLinksA>
           </Item>

           <Item>
               <NavLinksA href='#work'>Certifications</NavLinksA>
           </Item>
           </Menu>
        </NavbarContainer>
        </Nav>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar
