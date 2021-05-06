import styles from "./Timer.module.scss"

import Giro from "./styles"

const Timer = (props) => {

    return (
        <div className={styles.timer}>
            <Giro time={props.time} final={props.final} counter={props.counter}><i class="fas fa-long-arrow-alt-up"></i></Giro>
        </div>
    )
}

export default Timer