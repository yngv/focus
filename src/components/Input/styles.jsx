import styled from "styled-components"

const InputStyle = styled.div`

 input{
    width: 60px;
    padding: 1px;
    border-radius: 5px;
    border: 1px solid white;
    margin: 0 auto;
 }

 button {
    padding: 3px;
    border-radius: 5px;
    border: 1px solid #ec3a3a;
    cursor: pointer;
    margin: 0 auto;

    :hover{
        background: #ec3a3a;
        color: white;
    }
 }

`
export default InputStyle