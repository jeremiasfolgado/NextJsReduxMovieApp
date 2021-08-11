import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {removeAlertMessage} from '../store/actions/getActions'
import {  FaTimes } from "react-icons/fa";

const AlertContainer = styled.div`
width:100vw;
height: 100vh;
border: 1px solid grey;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:80px;



`
const MessageContainer = styled.div`
    width:350px;
    height: 200px;
    border: 1px solid grey;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position:relative;
    background-color:white;
    z-index: 80;
    @media screen and (max-width:500px){
        width: 100%;
        height: 100%;
    }
`
const CrossContainer = styled.div`
    position: absolute;
    top:1rem;
    right:1rem;
    color:grey;
    &:hover{
        color: #2E9AFE;
        text-decoration: underline #2E9AFE;
    }
`

const AlertModal = () => {
    const alertMessage = useSelector(state => state.get.alertModal )
    const dispatch = useDispatch()
    
    if(alertMessage){
        return (
            <AlertContainer onClick={(e)=> dispatch(removeAlertMessage(e))}>
                <MessageContainer>
                    <CrossContainer>
                        <FaTimes>
                            
                        </FaTimes>

                    </CrossContainer>
                    <h2>{alertMessage}</h2>
                </MessageContainer>

            </AlertContainer>
        )
    }
    return (
        <div>

        </div>
    )
}

export default AlertModal