import React, {useEffect,useRef} from 'react';
import styles from './LiveProject.module.css';
import Project from './../project/Project';
import cx from 'classnames';

import { gsap,Power3,TweenMax} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });

const LiveProject = () => {
    let item1 = useRef(null)
    let item2 = useRef(null)
    let item3 = useRef(null)
    let item4 = useRef(null)
    let item5 = useRef(null)
    let item6 = useRef(null)
     
    
    useEffect(()=>{
        gsap.from([item1,item2,item3,item4,item5,item6], 
            0.8,
            { 
                    scrollTrigger : {
                    trigger:  [item1,item2,item3,item4,item5,item6],
                    scrub: false,
                    markers: true,
                    start: "-=600px",
                    end: "+=500",
          },
          y: -10, 
          opacity:0, 
          ease: Power3.easeInOut,
          stagger:0.1,
        })

     })
    return ( 
        <div className={cx(styles.container,styles.red)}>
            <div className={styles.inner}>

                {/* UPPER SECTION */}
                <div className={styles.upper}>
                    <div className={styles.content}>
                        <h1 className={styles.title}> My Startup Project</h1>
                        <h2 className={styles.subtitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat, maiores quas distinctio ad quia sint assumenda sapiente ex fuga?</h2>
                    </div>
                </div>

                {/* LOWER SECTION */}
                <div className={styles.lower}>
                    <div className={styles.grid}>

                        <div ref={el => item1 = el} className={styles.item}>
                            <div className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>ICON AND TEXT</div>
                            </div>
                        </div>
        
                        <div ref={el => item2 = el} className={styles.item}>
                            <div className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>ICON AND TEXT</div>
                            </div>
                        </div>
                        
                        <div ref={el => item3 = el} className={styles.item}>
                            <div className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>ICON AND TEXT</div>
                            </div>
                        </div>
                        
                        <div ref={el => item4 = el} className={styles.item}>
                            <div className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>ICON AND TEXT</div>
                            </div>
                        </div>
                        
                        <div ref={el => item5 = el} className={styles.item}>
                            <div className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>ICON AND TEXT</div>
                            </div>
                        </div>
                        
                        <div ref={el => item6 = el} className={styles.item}>
                            <div className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>ICON AND TEXT</div>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LiveProject;
