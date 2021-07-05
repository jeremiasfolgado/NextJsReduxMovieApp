import Head from 'next/head';
import Nav from './nav.js';

import SearchBar from './searchBar.js';

const Container = (props) => {
    return (
        <div className="container bg-dark text-white">
            <Head>
                <title>NextJS-Redux Movie App</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'/>
            </Head>
            <Nav>
            </Nav>
            
            <div className=" p-4">
                {props.children}
            </div>

            
        </div>
    )
}

export default Container;