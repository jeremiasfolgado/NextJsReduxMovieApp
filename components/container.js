import Head from 'next/head';
import Nav from './nav.js';
import Footer from './Footer.js';
import styled from 'styled-components';

const AppContainer = styled.div`

width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;

align-items: center;
justify-content: space-between;

`

const Container = (props) => {
    return (
        <div>
            <Head>
                <title>NextJS-Redux Movie App</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;900&display=swap');
                </style> 
                <link rel="stylesheet" href="../styles/global.css"></link>
                
                
            </Head>
            <AppContainer >
                <Nav/>
                    <div className=" p-4">
                        {props.children}
                    </div>
                <Footer/>
            </AppContainer>

        </div>
    )
}

export default Container;
            
