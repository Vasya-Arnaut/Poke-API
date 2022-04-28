import React from "react";
import styles from './Pok.module.scss'

function Pok(props) {
    return(
        <div className={styles.Pok}>
            <img src={props.url} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Pok;
