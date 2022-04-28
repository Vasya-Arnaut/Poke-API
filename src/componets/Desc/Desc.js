import React from "react";
import styles from './Desc.module.scss'

function Desc(props) {
    return (
        <>
            <div className={styles.Desc}>
                <img src={props.url} alt={props.name} className={styles.image} />

                <div className={styles.Desc1}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.stats}>Stats</p>

                    <div className={styles.stat1}>
                        <p>{props.stat1}: {props.bs1}</p>
                    </div>
                    <div className={styles.stat2}>
                        <p>{props.stat2}: {props.bs2}</p>
                    </div>
                    <div className={styles.stat3}>
                        <p>{props.stat3}: {props.bs3}</p>
                    </div>
                </div>

                <div className={styles.contain}>
                    <div className={styles.stat4}>
                        <p>{props.stat4}: {props.bs4}</p>
                    </div>
                    <div className={styles.stat5}>
                        <p>{props.stat5}: {props.bs5}</p>
                    </div>
                    <div className={styles.stat6}>
                        <p>{props.stat6}: {props.bs6}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Desc;
