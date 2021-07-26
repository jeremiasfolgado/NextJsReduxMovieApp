import Link from 'next/link';
import SearchBar from './searchBar.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import styled from 'styled-components';

const NavBar = styled.div`
width: 100%;
display: flex;

justify-content: space-between;
align-items: center;
flex-wrap: wrap;
height: 5rem;
border-bottom: 1px solid black;
`
const ActionLInks = styled.div`
min-width: 40%;
display: flex;
justify-content: space-around;

`





export function Nav(){
   const router = useRouter()
   

    
    return(
        <NavBar >
              <ActionLInks>
                    <Link href="/">
                        <a className={`m-1 nav-link ${router.pathname === '/' && 'active'}`} aria-current="page" >Home </a>
                    </Link>
                    <Link href="/favorites">
                        <a className={`m-1 nav-link ${router.pathname === '/favorites' && 'active'} `} >Favorites</a>
                    </Link>
                    <Link href="/About">
                        <a className={`m-1 nav-link ${router.pathname === '/About' && 'active'} `} >About </a>
                    </Link>
                </ActionLInks>
                <SearchBar className="w-25"/>
       
    </NavBar>
    )
}



export default Nav;
           
            
              
             
               
                    
          
        



