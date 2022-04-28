import React from "react";
import styles from './MoreDesc.module.scss'

const MoreDesc = (props) => {

	return (
		<div>
			<h3 className={styles.stat}>Stat</h3>

			<div className={styles.cont}>
				<div className={styles.cont1}>
					<p>Height is : {props.heightpok * 10} cm.</p>
					<p>{props.pokstat1} : {props.posbs1}</p>
					<p>{props.pokstat2} : {props.posbs2}</p>
					<p>{props.pokstat3} : {props.posbs3}</p>
				</div>

				<div className={styles.cont2}>
					<p>Weight is : {props.weightpok * 0.1} kg</p>
					<p>{props.pokstat4} : {props.posbs4}</p>
					<p>{props.pokstat5} : {props.posbs5}</p>
					<p>{props.pokstat6} : {props.posbs6}</p>
				</div>
			</div>
		</div>

	)
}

export default MoreDesc;
