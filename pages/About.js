import Container from '../components/container.js';
import { useSelector } from 'react-redux';

const List = () => {
    
    return (
        <Container>
            <div className="vw-90 vh-100 d-flex flex-column justify-content-center align-items-center">
                <div 
                className=" text-center col-md-5 p-3 border border-warning border-3  rounded-3"
                >
                    <h1 className="text-warning font-monospace" >
Hi! This App was developed in order to learn how to use NextJS</h1>

                </div>
                    <span className=" mt-3">if you want to know more about me ...</span>

                <a href="https://www.linkedin.com/in/jeremias-folgado-fullstack-developer/" className="btn btn-warning mt-4 col-md-2" >LinkedIn</a>
                <a href="https://www.linkedin.com/in/jeremias-folgado-fullstack-developer/" className="btn btn-warning mt-4 col-md-2" >LinkedIn</a>
            </div>

    </Container>
    )
}

export default List;