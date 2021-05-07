import styles from "./Timer.module.scss"

import Spin from "./styles"

const Timer = (props) => {

    return (
        <div className={styles.timer}>
            <Spin focusE={props.timeE} totalTimer={props.totalTimer} counter={props.counter}><i className="fas fa-long-arrow-alt-up"></i></Spin>
        </div>
    )
}

export default Timer