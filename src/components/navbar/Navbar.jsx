import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../icons/toplogo.png'
import svg from '../../icons/logo.svg'

const Navbar = () => {
    return ( 
        <div className= {styles.container}>
            <div className= {styles.inner}>

                <div className={styles.menu}>
                    <div >
                        <a className={styles.item2} href="/">About Me</a>
                    </div>

                    <div>
                        <a className={styles.item2} href="/">Project</a>
                    </div>
                </div>

                <div className={styles.brand}> 
                    <a>
                        <img src={svg} alt=""/>
                    </a>
                </div>

                <div className={styles.mainDiv}>
                        <a className={styles.item} href="/">Resume</a>
                </div>   
            </div>
        </div>
     );
}
 
export default Navbar;