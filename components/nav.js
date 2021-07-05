import Link from 'next/link';
import SearchBar from './searchBar.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";





export function Nav(){
   const router = useRouter()
   console.log(router)

    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid d-flex flex-wrap">
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            
                <div className="navbar-nav p-2 d-flex flex-row flex-wrap justify-content-arounds col-md-6">
                    <Link href="/">
                        <a className="m-1 nav-link active" aria-current="page" >Index </a>
                    </Link>
                    <Link href="/favorites">
                        <a className="m-1 nav-link" >Favorites</a>
                    </Link>
                    <Link href="/About">
                        <a className="m-1 nav-link" >About </a>
                    </Link>
                </div>
             
                <SearchBar className="w-25"/>
               
                    
                    
            {/* </div> */}
        </div>
    </nav>
    )
}



export default Nav;



