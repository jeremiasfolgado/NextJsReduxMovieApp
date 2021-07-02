import Link from 'next/link';
import SearchBar from './searchBar.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';





export function Nav(){
   
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/">
                        <a className="nav-link active" aria-current="page" >Index</a>
                    </Link>
                    <Link href="/list">
                        <a className="nav-link" >About</a>
                    </Link>
                </div> */}
             
                <SearchBar/>
               
                    
                    
            {/* </div> */}
        </div>
    </nav>
    )
}



export default Nav;



