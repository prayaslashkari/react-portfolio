import React, {useEffect, useRef} from 'react';
import styles from './Demo.module.css'
import cx from "classnames";

import {TweenMax, Power3} from "gsap";
import { Tween } from 'gsap/gsap-core';

const Demo = () => {
    let box = useRef("null")
    
     useEffect(()=>{
         TweenMax.to(
             box,
             2,
             {
                 opacity: 1,
                 y: -10,
                 ease: Power3.easeOut
             })
     })
   
    return (
        <div className={cx(styles.container,styles.red)}>
            <div className={cx(styles.inner,styles.blue)}>
                <div ref={el =>{box = el}} className={styles.item}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, est non odio quod laborum necessitatibus debitis sit veniam quos quia</p></div>
                <div className={styles.item}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, est non odio quod laborum necessitatibus debitis sit veniam quos quia</p></div>
                <div className={styles.item}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, est non odio quod laborum necessitatibus debitis sit veniam quos quia</p></div>
            </div>
        </div>
      );
}
 
export default Demo;