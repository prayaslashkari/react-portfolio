import React from 'react';
import styles from './Hireme.module.css';


const Hireme = () => {
    return (  
        <div className={styles.container}>
            <div className={styles.inner}>

                <div className={styles.box}>
                    {/* <div className={styles.item}>
                    <h1 className={styles.title}> Start a Project</h1>
                    </div> */}
                    <div className={styles.itemp}>
                    <p> Like my work? Do you think I will add value to your company?</p>
                    </div>
                    <div className={styles.item}>
                    <a href="#" className={styles.hirebtn}>Hire Me</a>
                    </div>
                </div>

            </div>
        </div>
        
    );
}
 
export default Hireme;