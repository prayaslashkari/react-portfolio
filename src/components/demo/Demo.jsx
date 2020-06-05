import React, {useEffect, useRef} from 'react';
import styles from './Demo.module.css'
import cx from "classnames";

import {TweenMax,gsap, Power3} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);


const Demo = () => {
    let box = useRef("null")
    let box2 = useRef("null")
    let box3 = useRef("null")

     useEffect(()=>{
         TweenMax.to(
             [box,box3],
             0.8,
             {
                 opacity: 1,
                 y: -10,
                 rotation: 4,
                 ease: Power3.easeOut
             })
             TweenMax.to(
                 [box2],
                 2,
                 {      
                        scrollTrigger: {
                        trigger: box,
                        scrub: true,
                        markers: false
                      },
                     opacity: 1,
                     y: -10,
                     x: -100,
                     rotation: 360,
                     ease: Power3.easeOut
                    })
                    
            /* TweenMax.to(
                box3,
                1,
                {
                    opacity: 1,
                    y: -10,
                    rotation: 4,
                    ease: Power3.easeOut
                }) */
                    
     })
   
    return (
        <div className={cx(styles.container,/* styles.red */)}>
            <div className={cx(styles.inner,/* styles.blue */)}>
                <div style={{display:"none"}} ref={el =>{box = el}} className={styles.item}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, est non odio quod laborum necessitatibus debitis sit veniam quos quia</p></div>
                <div ref={el =>{box2 = el}} className={styles.item}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, est non odio quod laborum necessitatibus debitis sit veniam quos quia</p></div>
                <div ref={el =>{box3 = el}} className={styles.item}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, est non odio quod laborum necessitatibus debitis sit veniam quos quia</p></div>
            </div>
        </div>
      );
}
 
export default Demo;