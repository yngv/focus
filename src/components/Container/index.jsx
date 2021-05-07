import { useState, useEffect } from "react"
// import styles from "./Container.module.scss"
import ContainerStyle, { StartButton, TimerCountDown } from "./styles"
import Timer from "../Timer"
import Input from "../Input"

const Container = () => {

    const theme = 'red'

    /// TOTAL
    const [focusMin, setFocusMin] = useState(0)
    const [breakMin, setBreakMin] = useState(0)
    const [relaxMin, setRelaxMin] = useState(0)
    ///

    /// ELAPSED
    const [timeE, setTimeE] = useState(0)
    ///

    /// timer counter
    const [counter, setCounter] = useState(0)

    // done
    const [mode, setMode] = useState(false)

    // counters
    const [focusCounter, setFocusCounter] = useState(0)
    const [breakCounter, setBreakCounter] = useState(0)
    const [focus, setFocus] = useState(true)
    const [totalTimer, setTotalTimer] = useState(0)
    //



    useEffect(() => {
        setTimeE(focusMin)
        setTotalTimer(focusMin)
    }, [focusMin])

    useEffect(() => {


        let interval = setInterval(() => {
            clearInterval(interval)
            if (mode === true && focus === true) {
                if (timeE < 1) {
                    setMode(false)
                    timeE === 0 ? (setFocus(false)) : setFocus(focus)
                    setFocusCounter(focusCounter + 1)
                    breakCounter < 3 ? setTimeE(breakMin) : setTimeE(relaxMin)
                    breakCounter < 3 ? setTotalTimer(breakMin) : setTotalTimer(relaxMin)
                    setCounter(0)

                } else {
                    setTimeE(timeE - 1)
                    setCounter(counter + 1)


                }
                console.log(timeE + "<<timeE")

            }
            if (mode === true && focus === false && breakCounter < 3) {
                console.log('zap')
                if (timeE < 1) {
                    setMode(false)
                    setFocus(true)
                    setBreakCounter(breakCounter + 1)
                    setTimeE(focusMin)
                    setTotalTimer(focusMin)
                    setCounter(0)
                }
                else {
                    setTimeE(timeE - 1)
                    setCounter(counter + 1)
                }
            }

            if (mode === true && focus === false && breakCounter === 3) {
                console.log("DEU CERTO")
                if (timeE < 1) {
                    setMode(false)
                    setFocus(true)
                    setBreakCounter(breakCounter + 1)
                    setTimeE(focusMin)
                    setTotalTimer(focusMin)
                    setCounter(0)
                    setFocusCounter(0)
                    setBreakCounter(0)
                }
                else {
                    setTimeE(timeE - 1)
                    setCounter(counter + 1)
                }
            }
        }, 1000)
        console.log(focusCounter + "<<< Focus counter")
        console.log(breakCounter + "<<< Break counter")

    }/*[focusMin, breakMin, relaxMin, mode, focusE, counter, focusCounter] */)



    const handleMode = () => {
        setMode(!mode)
    }


    return (

        <>
            <ContainerStyle theme={theme} time={timeE} >
                <Input setFocusMin={setFocusMin} setBreakMin={setBreakMin} setRelaxMin={setRelaxMin} mode={mode} />
                {`${focusMin} | ${breakMin} | ${relaxMin}`}
                <Timer timeE={(360 / 60) * timeE} totalTimer={totalTimer} counter={counter} />

                {/* <StartButton onClick={handleReset} time={time} >
                    <p>reset</p>

                </StartButton> */}
                <TimerCountDown timeE={timeE}>{`${Math.floor(timeE / 60)}:${((timeE % 60) >= 10) ? (timeE % 60) : '0' + (timeE % 60)}`}</TimerCountDown>

                <StartButton onClick={handleMode} time={timeE} >
                    <p>start</p>
                </StartButton>
            </ContainerStyle >

        </>

    )
}

export default Container