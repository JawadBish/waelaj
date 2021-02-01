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
ImgEnd,
Img
} from './NavbarElements';
import logo from '../Imgs/logoWAJ1.jpg'
import logoEnd from '../Imgs/portologo.jpg'

const Navbar = () => {
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);


    return (
        <>
        <IconContext.Provider value={{color: 'white'}}>
         <Nav>
        <NavbarContainer>
       {/* <Logo to="#home">
        <Img src={logo} alt="my imgs"/>
        </Logo>
      */}
           
       
       <Burger onClick={handleClick}> 
           {click ? <FaTimes size={40} color="white"/> : <FaBars size={40} color="white" />}
       </Burger>
       <Menu onClick={handleClick} click={click}>

       <ImgEnd src={logoEnd} alt="end nav"/>
           <Item>
               <NavLinksA href="#home" >Home</NavLinksA>
           </Item>

           <Item>
               <NavLinksA href='#about'>About Me</NavLinksA>
           </Item>

           <Item>
               <NavLinksA href='#gallery'>Gallery</NavLinksA>
           </Item>

           <Item>
               <NavLinksA href='#services'>Services</NavLinksA>
           </Item>
           <Item>
               <NavLinksA href='#contact'>Contact</NavLinksA>
           </Item>

         

           </Menu>
        </NavbarContainer>
        </Nav>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar
