import styles from './MorePok.module.scss'
import React, { useState } from "react";
import MoreDesc from "../MoreDesc/MoreDesc";
import Modal from '../Modal/Modal';

const MorePok = (props) => {
	const [modalActive, setModalActive] = useState(false)

	return (
		<div className={styles.thumb_container}>
			<div className={styles.number}></div>

			<div onClick={() => setModalActive(true)} >
				<img src={props.image} alt={props.name} />
				<h3>{props.name}</h3>
			</div>

			<Modal active={modalActive} setActive={setModalActive}>
				<img src={props.image} alt={props.name} />
				<h3>{props.name}</h3>
				<MoreDesc
					weightpok={props.weight}
					heightpok={props.height}
					pokstat1={props.stat1}
					pokstat2={props.stat2}
					pokstat3={props.stat3}
					pokstat4={props.stat4}
					pokstat5={props.stat5}
					pokstat6={props.stat6}
					posbs1={props.bs1}
					posbs2={props.bs2}
					posbs3={props.bs3}
					posbs4={props.bs4}
					posbs5={props.bs5}
					posbs6={props.bs6}
				/>
			</Modal>
		</div>
	);
};

export default MorePok;
