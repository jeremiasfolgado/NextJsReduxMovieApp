import Link from 'next/link';
import SearchBar from './searchBar.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { FaBars, FaTimes } from "react-icons/fa";


const NavbarContainer = styled.div`
    width:100%;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: white;
    
` 
const NavbarWrapper = styled.div`
    margin:auto;
    width:100%;
    max-width: 1200px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const NavBar = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px){
        width:100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click})=> click ? 0 : '-100%'};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: white;
    }
` 
const NavItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: grey;
    &:hover{
        border-bottom: 0.2rem solid grey;
        transition: 0.2s ease-in;
        
    }
    @media screen and (max-width:900px){
        width:100%;
        height:70px;
        &:hover{
        border-bottom: none;
        font-size: 1.3rem;
      
    }

    }
    
`
const IconMenuMobile = styled.div`
    display: none;
    
    @media screen and ( max-width:900px){
        display:flex;
        color:grey;
        font-size: 2rem ;
    }
`


export function Nav(){
    const [click, setClick] =  useState(false);
    const router = useRouter()
   
    const handleMenu = () =>{
        setClick(!click)
    }

    
    return(
      
       <NavbarContainer>
           <NavbarWrapper>
                <SearchBar />
                <IconMenuMobile onClick={handleMenu}>
                    {click ? <FaTimes/> : <FaBars/>}
                    
                </IconMenuMobile>
                <NavBar click={click}>
                    <NavItem onClick={handleMenu}>
                        <Link href="/">Home</Link>
                    </NavItem>
                    <NavItem onClick={handleMenu}>
                        <Link href="/favorites">Favorites</Link>
                    </NavItem>
                    <NavItem onClick={handleMenu}>
                        <Link href="/About">About</Link>
                    </NavItem>
                </NavBar>
           </NavbarWrapper>
       </NavbarContainer>
      
    )
}





               




export default Nav;
           
            
              
     
          
        



