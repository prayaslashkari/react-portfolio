import React, {useEffect,useRef, useState} from 'react';
import styles from './LiveProject.module.css';
import cx from 'classnames';

import {gsap,Power3, TweenMax} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "restart pause resume restart"
    });
  
    
    const LiveProject = () => {          
    /* DEFINING NODE */
      let item1 = useRef(null)
      let item2 = useRef(null)
      let item3 = useRef(null)
      let item4 = useRef(null)
      let item5 = useRef(null)
      let item6 = useRef(null)
      
      let image = useRef(null)
      let link = useRef(null)

    /* DEFINING NODE */
    

    /* MICROINTERATIONS */

    let handleclick = (e) =>
      {
        e.preventDefault();
        setTimeout(function(url) { window.location = url }, 4000, e.target.href);
   
        gsap.to(image, 1,{opacity: 1,xPercent:-50, left:"50%", yPercent:-50, top:"50%", x:0, y:0, ease: Power3.easeInOut})

        gsap.to(image, 1,{rotation: 360, scale:1.1, ease: Power3.easeInOut, repeat:2, delay:1})

        gsap.to(link, 1,{y: -10, opacity: 0, ease: Power3.easeInOut,delay:-1})
        console.log(e.target.href)
    }

    /* MICROINTERATIONS */
    
    useEffect(()=>{
        gsap.from([item1,item2,item3,item4,item5,item6], 
            1,
            { 
                    scrollTrigger : {
                    trigger:  [item1,item2,item3,item4,item5,item6],
                    scrub: false,
                    markers: false,
                    start: "-=600px",
                    end: "+=800",
                    toggleActions: "restart pause resume reset",
          },
          /* scale: 0.9, */
          y: -20, 
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
                            <div  className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>
                                    <img ref={el => image = el}  className={styles.linkthum} src="https://img.icons8.com/fluent/24/000000/link.png"/>
                                    <a ref={el => link = el} onClick={handleclick} className={styles.linklink} href="https://www.google.com">www.abc.com</a>
                                </div>
                            </div>
                        </div>

                        <div ref={el => item2 = el} className={styles.item}>
                            <div  className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>
                                    <img className={styles.linkthum} src="https://img.icons8.com/fluent/24/000000/link.png"/>
                                    <a className={styles.linklink} href="https://www.google.com">www.xyz.com</a>
                                </div>
                            </div>
                        </div>

                        <div ref={el => item3 = el} className={styles.item}>
                            <div  className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>
                                    <img className={styles.linkthum} src="https://img.icons8.com/fluent/24/000000/link.png"/>
                                    <a className={styles.linklink} href="https://www.google.com">www.xyz.com</a>
                                </div>
                            </div>
                        </div>

                        <div ref={el => item4 = el} className={styles.item}>
                            <div  className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>
                                    <img className={styles.linkthum} src="https://img.icons8.com/fluent/24/000000/link.png"/>
                                    <a className={styles.linklink} href="https://www.google.com">www.xyz.com</a>
                                </div>
                            </div>
                        </div>

                        <div ref={el => item5 = el} className={styles.item}>
                            <div  className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>
                                    <img className={styles.linkthum} src="https://img.icons8.com/fluent/24/000000/link.png"/>
                                    <a className={styles.linklink} href="https://www.google.com">www.xyz.com</a>
                                </div>
                            </div>
                        </div>

                        <div ref={el => item6 = el} className={styles.item}>
                            <div  className={styles.iteminner}>
                                <img className={styles.image} src="https://mattfarley.ca/img/logos/kybercore.svg" alt="project"/>
                                <h2 className={styles.imagetext}>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</h2>
                                <div className={styles.spanspan}>
                                    <img className={styles.linkthum} src="https://img.icons8.com/fluent/24/000000/link.png"/>
                                    <a className={styles.linklink} href="https://www.google.com">www.xyz.com</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LiveProject;
