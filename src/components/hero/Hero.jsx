import React from 'react';

import styles from './Hero.module.css'
/* import image from './brush.png' */

const Hero = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.title}>Hi, I'm Prayas. Nice to meet you. </h1>
                <h2 className={styles.subtitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod repellendus aut accusamus hic adipisci quia atque velit non quis ipsum ipsa 

                <span className={styles.spantest}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" preserveAspectRatio="none" className={styles.squiggle} style= {{transform: "rotate(-2deg)"}} aria-hidden="true"><path d="M5.73 0S.09.9-.25 4.9c-.34 4 2.45 4.81 5.36 5.1 2.9.29 5.6-.49 5.09-4.74C9.67 1.02 5.18.1 2.58 0M2.2-.03a3.84 3.84 0 01-.4-.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" vectorEffect="non-scaling-stroke"></path></svg>
                <mark>blanditiis&nbsp;ugl</mark>
                </span>
                
                veniam accusantium eaque voluptatem omnis soluta esse incidunt nesciunt molestias nemo, voluptatum aperiam eligendi? Et modi magni ipsum magnam quam illum fuga? Est quod aliquid ea similique officiis?</h2>
            </div>
        
        
        </div>
     );
}
 
export default Hero;