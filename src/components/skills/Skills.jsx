import React,{useEffect, useRef} from 'react';
import styles from './Skills.module.css'

import {gsap,TweenMax, Power3} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });
  



const Skills = () => {
    let card1 = useRef(null);
    let card2 = useRef(null);
    let card3 = useRef(null);

    useEffect(()=>{
            gsap.fromTo(
                [card1,card2,card3],
                2,
                {rotationY: -90},
                {      
                       scrollTrigger: {
                       trigger:  [card1,card2,card3],
                       scrub: true,
                       markers: false,
                       start: "-=600px",
                       end: "+=500",
                     },
                    yoyo: true,
                    opacity: 1,
                    rotateY: 0,
                    y: 0,
                    ease: Power3.easeOut,
                    stagger:0.5,
                   }) 
    })
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div ref={el => {card1 = el}} className={styles.card}>
                    <figure className={styles.image}><img src="https://img.icons8.com/nolan/64/designer.png" alt="thumb"/></figure>
                    <h1 className={styles.title}> Design</h1>
                    <p className={styles.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam, repudiandae modi deserunt excepturi quia?</p>
                    
                    <ul>
                        <li><img alt="thumb" src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png"/> <img alt="thumb" src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"/><img alt="thumb" src="https://img.icons8.com/color/48/000000/adobe-after-effects.png"/></li>
                        <li><img alt="thumb" src="https://img.icons8.com/windows/48/000000/figma.png"/></li>
                        <li><img alt="thumb" src="https://img.icons8.com/color/48/000000/adobe-xd.png"/></li>
                    </ul>
                </div>

                <div ref={el => {card2 = el}} className={styles.card}>
                <figure className={styles.image}><img alt="thumb" src="https://img.icons8.com/nolan/64/development-skill.png"/></figure>
                    <h1 className={styles.title}> Development</h1>
                    <p className={styles.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam, repudiandae modi deserunt excepturi quia?</p>
                    
                    <ul>
                        <li><img  alt="thumb" src="https://img.icons8.com/color/48/000000/html-5.png"/><img alt="thumb" src="https://img.icons8.com/color/48/000000/css3.png"/><img src="https://img.icons8.com/color/48/000000/javascript.png" alt="thumb"/></li>

                        <li><img alt="thumb" src="https://img.icons8.com/ultraviolet/48/000000/react.png"/></li>
                        
                        <li><img alt="thumb" src="https://img.icons8.com/color/54/000000/nodejs.png"/> <img alt="thumb" src="https://img.icons8.com/color/54/000000/npm.png"/></li>

                        <li><img alt="thumb" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/></li>
                    </ul>
                </div>

                <div ref={el => {card3 = el}} className={styles.card}>
                <figure className={styles.image}><img alt="thumb" src="https://img.icons8.com/nolan/64/idea-sharing.png"/></figure>

                    <h1 className={styles.title}> Creative</h1>
                    <p className={styles.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam, repudiandae modi deserunt excepturi quia?</p>
                    <ul>
                        <li>Problem Solver</li>
                        <li>Curious</li>
                        <li>Brain Storm</li>
                        <li>AfterEffec</li>
                    </ul>
                </div>
        
            </div>
        </div>
     );
}
 
export default Skills;