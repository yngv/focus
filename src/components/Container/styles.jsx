import styled from "styled-components"

const px = 500;

const ContainerStyle = styled.div`
    margin: 0 auto;
    width: /*${props => (props.time * px)}*/500px;
    height: 100%;
    background: ${props => props.theme === "blue" ? "orange" : 'rgb(243, 148, 148)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StartButton = styled.button`
    width:  80px;
    height: 80px;
    padding: 4px;
    background-color: tomato;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    & p{
        color: #ffffff;
    }
`

const TimerCountDown = styled.div`
    width: 200px;
    height: 50px;
    color: ${props => props.timeE < 60 ? "red" : "white"};
    text-align: center;
    font-size: 2rem;
/* margin: 0 auto; */
`

export { StartButton, TimerCountDown }

export default ContainerStyle


