import Link from 'next/link';
import SearchBar from './searchBar.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";





export function Nav(){
   const router = useRouter()
   console.log(router.pathname)

    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid d-flex flex-wrap">
           
            
                <div className="navbar-nav p-2 d-flex flex-row flex-wrap justify-content-arounds col-md-6">
                    <Link href="/">
                        <a className={`m-1 nav-link ${router.pathname === '/' && 'active'}`} aria-current="page" >Home </a>
                    </Link>
                    <Link href="/favorites">
                        <a className={`m-1 nav-link ${router.pathname === '/favorites' && 'active'} `} >Favorites</a>
                    </Link>
                    <Link href="/About">
                        <a className={`m-1 nav-link ${router.pathname === '/About' && 'active'} `} >About </a>
                    </Link>
                </div>
             
                <SearchBar className="w-25"/>
               
                    
          
        </div>
    </nav>
    )
}



export default Nav;



