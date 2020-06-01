import React from 'react';
import styles from './Project.module.css';

const Project = () => {
    return ( 
        <div className={styles.container}>

            <div className={styles.inner}>
                <div className={styles.headbox}>
                    <h1 className={styles.title}>My Projects</h1>
                    <h2 className={styles.subtitle}>Here are a few design projects I've worked on recently. Want to see more? <a href="mailto:prayas.lashkari98@gmail.com"> Email Me</a> 
                    </h2>
                </div>

                <div className={styles.footbox}>
                    <div className={styles.projectgrid}>

                        <div className={styles.projectitem}>
                            <figure className={styles.item}>
                                <img className={styles.thumb} src="https://mattfarley.ca/img/projects/wfdesignbuild.png" alt=""/>
                                
                                <div className={styles.overlay}></div>
                                <figcaption className={styles.items}>
                                    <h1 class={styles.projtitle}>High-end, custom residential renovaters serving Fraser Valley homeowners.</h1>
                                    <a class={styles.projbutton} href="">Visit Website</a>
                                </figcaption>
                            </figure>
                        </div>

                        <div className={styles.projectitem}>
                        <figure className={styles.item}>
                            <img className={styles.thumb} src="https://mattfarley.ca/img/projects/wfdesignbuild.png" alt=""/>

                            <figcaption className={styles.items}>
                                <h1 class={styles.projtitle}>High-end, custom residential renovaters serving Fraser Valley homeowners.</h1>
                                <a class={styles.projbutton} href=""><span>Visit Website</span></a>
                            </figcaption>
                        </figure>
                    </div>

                        <div className={styles.projectitem}>
                    <figure className={styles.item}>
                        <img className={styles.thumb} src="https://mattfarley.ca/img/projects/wfdesignbuild.png" alt=""/>

                        <figcaption className={styles.items}>
                            <h1 class={styles.projtitle}>High-end, custom residential renovaters serving Fraser Valley homeowners.</h1>
                            <a class={styles.projbutton} href=""><span>Visit Website</span></a>
                        </figcaption>

                    </figure>
                </div>

                        <div className={styles.projectitem}>
                <figure className={styles.item}>
                    <img className={styles.thumb} src="https://mattfarley.ca/img/projects/wfdesignbuild.png" alt=""/>

                    <figcaption className={styles.items}>
                        <h1 class={styles.projtitle}>High-end, custom residential renovaters serving Fraser Valley homeowners.</h1>
                        <a class={styles.projbutton} href=""><span>Visit Website</span></a>
                    </figcaption>

                </figure>
            </div>

                        <div className={styles.projectitem}>
            <figure className={styles.item}>
                <img className={styles.thumb} src="https://mattfarley.ca/img/projects/wfdesignbuild.png" alt=""/>

                <figcaption className={styles.items}>
                    <h1 class={styles.projtitle}>High-end, custom residential renovaters serving Fraser Valley homeowners.</h1>
                    <a class={styles.projbutton} href=""><span>Visit Website</span></a>
                </figcaption>

            </figure>
        </div>

                        <div className={styles.projectitem}>
        <figure className={styles.item}>
            <img className={styles.thumb} src="https://mattfarley.ca/img/projects/wfdesignbuild.png" alt=""/>

            <figcaption className={styles.items}>
                <h1 class={styles.projtitle}>High-end, custom residential renovaters serving Fraser Valley homeowners.</h1>
                <a class={styles.projbutton} href=""><span>Visit Website</span></a>
            </figcaption>

        </figure>
    </div>
                    </div>

                    <div className={styles.button}>
                    <a href=""><span className={styles.icon}></span><span>Checkout my Behance</span></a>
                    </div>

                </div>
                
            </div>
        </div> 
    );
}
 
export default Project;