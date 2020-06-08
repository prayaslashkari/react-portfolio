import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../img/toplogo.png'

const Navbar = () => {
    return ( 
        <div className= {styles.container}>
            <div className= {styles.inner}>
                <div className={styles.brand}>
                    <a>
                        <img src={logo} alt=""/>
                    </a>
                </div>

                <div className={styles.menu}>
                    <div >
                        <a className={styles.item2} href="/">Hireme</a>
                    </div>
                    <div>
                        <a className={styles.item2} href="/">Skills</a>
                    </div>
                    <div className={styles.mainDiv}>
                        <a className={styles.item} href="/">Resume</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;