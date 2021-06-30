import Head from 'next/head';
import Nav from './nav.js';
import Footer from './footer.js';

const Container = (props) => {
    return (
        <div>
            <Head>
                <title>NextJS prueba</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'/>
            </Head>
            <Nav/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Container;