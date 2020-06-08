import React from 'react';

import styles from './Hero.module.css'

/* import image from './brush.png' */

const Hero = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.title}>Hi, I'm Monky. Nice to meet you. </h1>
                <h2 className={styles.subtitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod repellendus aut accusamus hic adipisci quia atque velit non quis ipsum ipsa veniam accusantium eaque voluptatem omnis soluta esse incidunt nesciunt molestias nemo, voluptatum aperiam eligendi? Et modi magni ipsum magnam quam illum fuga? Est quod aliquid ea similique officiis?</h2>
            </div>
        
        
        </div>
     );
}
 
export default Hero;