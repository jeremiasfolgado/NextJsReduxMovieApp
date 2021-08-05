import Head from 'next/head';
import Nav from './nav.js';
import Footer from './Footer.js';
import styled from 'styled-components';
import AlertModal from './AlertModal.js';
import { useSelector } from 'react-redux';

const AppContainer = styled.div`

width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;

align-items: center;
justify-content: space-between;

`

const Container = (props) => {
    const modalAlert = useSelector(state => state.get.alertModal)
    return (
        <div>
            <Head>
                <title>NextJS-Redux Movie App</title>
                
                
                
                
            </Head>
            <AppContainer >
                <Nav/>
                    {modalAlert && <AlertModal></AlertModal>}
                        {props.children}
                   
                <Footer/>
            </AppContainer>

        </div>
    )
}

export default Container;
            
