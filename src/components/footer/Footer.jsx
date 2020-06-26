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
                            <p className={styles.connect}>Connect :</p>
                            <a href="https://www.linkedin.com/in/prayaslashkari/"><img src="https://img.icons8.com/color/45/000000/linkedin-circled.png"/></a>
                            <a href="https://www.facebook.com/PrayasLashkari/"><img src="https://img.icons8.com/fluent/45/000000/facebook-new.png"/></a>
                            <a href="https://www.behance.net/lazyprayas"><img src="https://img.icons8.com/color/45/000000/behance.png"/></a>
                            <a href="mailto:prayas.lashkari98@gmail.com"><img src="https://img.icons8.com/cotton/45/000000/email-open.png"/></a>
                        </div>
                    </div>

                    <div className={styles.copyright}>
                    Designed Inspired from Matt Farley<span className={styles.copyicon}> <img src="https://img.icons8.com/metro/20/FFFFFF/copyright.png"/></span>
                     twentytwenty</div>

                     <div className={styles.belowcopy}>
                    Disclaimer : This website is purely made for learning purpose, I hold no design rights</div>


                </div>
            </div>
        
        </div>
     );
}
 
export default Footer;