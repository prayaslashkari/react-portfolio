import React from 'react';
import styles from './Footer.module.css';
import cx from 'classnames';


const Footer = () => {
    return ( 
        <div className={cx(styles.container)}>
            <div className={styles.inner}>
                <div className={styles.box}>
                    <a className={styles.logo} href="/">
                        <img src="https://mattfarley.ca/img/mf-logo-white.svg" alt="Matt Farley | Designer, Front-end Developer &amp; Mentor" height="48"/>
                    </a>
        
                    <div className={styles.heading}>
                        <h1 className={styles.fooheader}>Living, learning, &amp; leveling up one day at a time.</h1>
                    </div>

                    <div className={styles.subbox}>
                        <div className={styles.socialicons}>
                            <a><img src="https://img.icons8.com/bubbles/40/000000/360-view.png"/></a>
                            <a><img src="https://img.icons8.com/bubbles/40/000000/360-view.png"/></a>
                            <a><img src="https://img.icons8.com/bubbles/40/000000/360-view.png"/></a>
                            <a><img src="https://img.icons8.com/bubbles/40/000000/360-view.png"/></a>
                            <a><img src="https://img.icons8.com/bubbles/40/000000/360-view.png"/></a>
                            <a><img src="https://img.icons8.com/bubbles/40/000000/360-view.png"/></a>
                        </div>
                    </div>

                    <div className={styles.copyright}>
                    Handcrafted by me<span className={styles.copyicon}> <img src="https://img.icons8.com/metro/20/FFFFFF/copyright.png"/></span>
                     twentytwenty</div>


                </div>
            </div>
        
        </div>
     );
}
 
export default Footer;