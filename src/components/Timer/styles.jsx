import styled from "styled-components"

const Spin = styled.div`
transform: rotate(${props => ((360 / props.totalTimer) * props.counter)}deg);

`
export default Spin