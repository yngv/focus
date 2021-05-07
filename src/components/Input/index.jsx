import { useState } from "react"
import InputStyle from "./styles"

const Input = ({ setFocusMin, setBreakMin, setRelaxMin, mode }) => {

    const [focusValue, setFocusValue] = useState("")
    const [breakValue, setBreakValue] = useState("")
    const [relaxValue, setRelaxValue] = useState("")




    //
    const handleFocus = (e) => {
        setFocusValue(e.target.value)
        console.log(focusValue)
    }

    const handleBreak = (e) => {
        setBreakValue(e.target.value)
        console.log(breakValue)
    }

    const handleRelax = (e) => {
        setRelaxValue(e.target.value)
        console.log(relaxValue)
    }
    //
    const handleSend = () => {
        setFocusMin(focusValue * 60)
        setBreakMin(breakValue * 60)
        setRelaxMin(relaxValue * 60)
        console.log(setFocusMin(focusValue * 60))
    }

    return (
        <InputStyle>
            focus <input type="number" onChange={handleFocus} />
            break <input type="number" onChange={handleBreak} />
            relax <input type="number" onChange={handleRelax} />
            <button onClick={mode !== true ? handleSend : null}>send</button>



        </InputStyle>
    )
}

export default Input