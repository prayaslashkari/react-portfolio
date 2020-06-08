import React, {useEffect,useRef} from 'react';
import styles from './Main.module.css'
import { gsap,Power3,Power2,sine} from 'gsap';

import logo from '../../icons/toplogo.png';
import hero from '../../icons/hero.svg';

const Main = () => {

    let simage = useRef(null)

    useEffect(()=>{
        gsap.from(
            simage,
            2,
            {
            x: -10,
            y:+10,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            yoyoEase: true,
        })
    })
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.upper}>
                    <div className={styles.upperin}>
                        <h1 className={styles.title}>Graphic Designer, Frontend Developer, Motion Graphic</h1>
                        <h2 className={styles.subtitle}>I design and code beautifully simple things, and I love what I do.</h2>
                        <img ref = {el => {simage=el}} className={styles.avatar} src={logo}/> 
                    </div>
                </div>

                <div className={styles.lower}>
                    <div className={styles.lowerin}>
                        <img className={styles.imagebot} src={hero}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;