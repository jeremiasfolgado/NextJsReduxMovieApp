import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {removeAlertMessage} from '../store/actions/getActions'

const AlertContainer = styled.div`
width:100vw;
height: 100vh;
border: 1px solid grey;
display: flex;
justify-content: center;
align-items: center;
position: relative;

`

const AlertModal = () => {
    const alertMessage = useSelector(state => state.get.alertModal )
    const dispatch = useDispatch()
    console.log("holis", alertMessage)
    if(alertMessage){
        return (
            <AlertContainer onClick={(e)=> dispatch(removeAlertMessage(e))}>
                <h2>{alertMessage}</h2>
            </AlertContainer>
        )
    }
    return (
        <div>

        </div>
    )
}

export default AlertModal