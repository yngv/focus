import { useState, useEffect } from "react"
// import styles from "./Container.module.scss"
import ContainerStyle, { StartButton } from "./styles"
import Timer from "../Timer"
import Input from "../Input"

const Container = () => {

    const theme = 'red'

    const [final, setFinal] = useState(15)
    const [time, setTime] = useState(15)
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState('')
    const [mode, setMode] = useState(false)

    useEffect(() => {

        let interval = setInterval(() => {
            clearInterval(interval)
            if (mode === true) {
                time < 1 ? setTime(0) : setTime(time - 1)
                counter >= final ? setMode(false) : setCounter(counter + 1)
                console.log(counter)
            }
        }, 1000)



    }, [mode, time, counter, final])

    const handleMode = () => {
        setMode(!mode)
    }



    return (
        // <div className={styles.container}>
        //     <Timer />
        // </div>
        <>
            <ContainerStyle theme={theme} time={time} >
                <Input />
                <Timer time={(360 / 60) * time} final={final} counter={counter} />

                <StartButton onClick={handleMode} time={time} >
                    <p>start</p>
                    {`${Math.floor(time / 60)}:${((time % 60) >= 10) ? (time % 60) : '0' + (time % 60)}`}
                </StartButton>
                {/* <StartButton onClick={handleReset} time={time} >
                    <p>reset</p>

                </StartButton> */}

            </ContainerStyle >

        </>

    )
}

export default Container