import React from "react";
import styles from './Header.module.scss'
import logo from '../../logo.svg'

function Header(props) {
    return(
        <div className={styles.Header}>
            <img src={logo} alt="logo" className={styles.image}/>
        </div>
    )
}

export default Header;
