import Link from 'next/link';
import SearchBar from './searchBar.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';





export function Nav(){
    // const [movie, setMovie] = useState("");
    // const dispatch = useDispatch()
    // function handleSubmit(e){
    //     e.preventDefault();
    //     dispatch(getMovieByName(movie));
    //     setMovie("")
    // }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/">
                        <a className="nav-link active" aria-current="page" >Index</a>
                    </Link>
                    <Link href="/list">
                        <a className="nav-link" >About</a>
                    </Link>
                </div>
                {/* <form onSubmit={e=>{handleSubmit(e)}} >
                    <input className="form-control me-2" type='text' autoComplete='off' value={movie} onChange={e=>setMovie(e.target.value)} ></input>
                    <input type='submit' value='search' className="btn btn-outline-success">Search</input>

                </form> */}
                <SearchBar/>
               
                    
                    
            </div>
        </div>
    </nav>
    )
}



export default Nav;



