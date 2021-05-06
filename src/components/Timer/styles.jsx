import styled from "styled-components"

const Giro = styled.div`
transform: rotate(${props => ((360 / 15) * props.counter)}deg);

`
export default Giro