import styled from "styled-components"

const px = 500;

const ContainerStyle = styled.div`
    margin: 0 auto;
    width: /*${props => (props.time * px)}*/500px;
    height: 100%;
    background: ${props => props.theme === "blue" ? "orange" : 'rgb(245, 164, 164)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StartButton = styled.button`
    width:100px;
    padding: 4px;
    border: 1px solid red;
    border-radius: 5px;
    cursor: pointer;
    & p{
        color: blue;
    }
`
export { StartButton }

export default ContainerStyle


