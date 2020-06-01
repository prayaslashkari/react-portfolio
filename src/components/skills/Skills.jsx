import React from 'react';
import styles from './Skills.module.css'

const Skills = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
               
                <div className={styles.card}>
                    <figure className={styles.image}><img src="https://img.icons8.com/nolan/64/designer.png"/></figure>
                    <h1 className={styles.title}> Design</h1>
                    <p className={styles.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam, repudiandae modi deserunt excepturi quia?</p>
                    
                    <ul>
                        <li><img alt="image" src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png"/> <img src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"/><img src="https://img.icons8.com/color/48/000000/adobe-after-effects.png"/></li>
                        <li><img src="https://img.icons8.com/windows/48/000000/figma.png"/></li>
                        <li><img src="https://img.icons8.com/color/48/000000/adobe-xd.png"/></li>
                    </ul>
                </div>

                <div className={styles.card}>
                <figure className={styles.image}><img src="https://img.icons8.com/nolan/64/development-skill.png"/></figure>
                    <h1 className={styles.title}> Development</h1>
                    <p className={styles.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam, repudiandae modi deserunt excepturi quia?</p>
                    
                    <ul>
                        <li><img src="https://img.icons8.com/color/48/000000/html-5.png"/><img src="https://img.icons8.com/color/48/000000/css3.png"/><img src="https://img.icons8.com/color/48/000000/javascript.png"/></li>

                        <li><img src="https://img.icons8.com/ultraviolet/48/000000/react.png"/></li>
                        
                        <li><img src="https://img.icons8.com/color/54/000000/nodejs.png"/> <img src="https://img.icons8.com/color/54/000000/npm.png"/></li>

                        <li><img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/></li>
                    </ul>
                </div>

                <div className={styles.card}>
                <figure className={styles.image}><img src="https://img.icons8.com/nolan/64/idea-sharing.png"/></figure>

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