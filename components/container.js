import Head from 'next/head';
import Nav from './nav.js';
import Footer from './footer.js';
import SearchBar from './searchBar.js';

const Container = (props) => {
    return (
        <div>
            <Head>
                <title>NextJS-Redux Movie App</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'/>
            </Head>
            <Nav>
            </Nav>
            
            <div className="container p-4">
                {props.children}
            </div>
            <Footer className="comtainer p-4"/>
        </div>
    )
}

export default Container;