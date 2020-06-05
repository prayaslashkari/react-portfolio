import React from 'react';
import styles from './Main.module.css'

const Main = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.upper}>
                    <div className={styles.upperin}>
                        <h1 className={styles.title}>Graphic Designer, Frontend Developer, Motion Graphic</h1>
                        <h2 className={styles.subtitle}>I design and code beautifully simple things, and I love what I do.</h2>
                        <img className={styles.avatar} src="https://mattfarley.ca/img/mf-avatar.svg"/> 
                    </div>
                </div>

                <div className={styles.lower}>
                    <div className={styles.lowerin}>
                        <img className={styles.imagebot} src="https://mattfarley.ca/img/hero.svg"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;