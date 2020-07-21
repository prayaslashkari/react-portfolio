import React from 'react';
import styles from './Signin.module.css'

const Signin = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.upper}>
                        <h1 className={styles.header}>Thanks for taking the time to reach out. How can I help you?</h1>
                </div>

                <div className={styles.lower}>
                    <div className={styles.topform}>
                        <div className={styles.column}>
                            <div className={styles.field}>
                                <label htmlFor="">Name</label>
                                <div>
                                    <input type="text" name="" id=""/>  
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="">Email</label>
                                <div>
                                    <input type="text" name="" id=""/>  
                                </div>
                            </div>
                            
                        </div> 

                        
                    </div>

                    <div className={styles.bottomform}>
                        <div className={styles.column}>
                            <div className={styles.fields}>
                                <label htmlFor="">Additional Details</label>
                                <div>
                                    <input type="text" name="" id=""/>  
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Signin;