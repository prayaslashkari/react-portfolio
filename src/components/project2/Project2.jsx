import React, {useState,useEffect,useRef} from 'react';
import styles from './Project2.module.css';
import { gsap,Power3,TweenMax} from 'gsap';


const Project2 = () => {
    const [toggle, setToggle] = useState(true);
    
    let button = useRef("null")

        useEffect(()=>{
        })
        
        let handleclick = () =>
        {
                TweenMax.fromTo(
                    button,
                    1,
                    {
                        marginTop: 0,
                        height: 0,
                        opacity: 0,
                        ease: Power3.easeInOut,
                        /* fontSize: "1rem", */
                    },
                    {
                        display: "block",
                        marginTop: "100",
                        opacity: 1,
                        height: "auto",
                        ease: Power3.easeInOut,
                        /* reversed: true */
                        /* fontSize: "2.5rem", */
                    }
                    )
                    setToggle(!toggle)
    }

    let reverseclick = () =>
    {
            TweenMax.fromTo(
                button,
                1,
                {
                    marginTop: 0,
                    height: 0,
                    opacity: 0,
                    ease: Power3.easeInOut,
                    /* fontSize: "1rem", */
                },
                {
                    display: "block",
                    marginTop: "100",
                    opacity: 1,
                    height: "auto",
                    ease: Power3.easeInOut,
                    runBackwards: true,
                    /* reversed: true */
                    /* fontSize: "2.5rem", */
                }
                )
                setToggle(!toggle)
}


    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.innerF}>
                <h1 onClick={toggle?()=>handleclick() : ()=>reverseclick()} className={styles.title}>
                My Projects
                    </h1>
                    </div>

                {/* Nested Component DIV */}

                <div ref={el=> {button = el}} style={{ height: "0", border: "red solid 1px",color: "white", display: "none"}}>
                I am nested DIV <br></br>
                I am nested DIV<br></br>
                I am nested DIV<br></br>
                I am nested DIV<br></br>
                I am nested DIV<br></br>
                I am nested DIV<br></br>
                I am nested DIV<br></br>I am nested DIV<br></br>I am nested DIV<br></br>I am nested DIV<br></br>

                I am nested DIVI am nested DIVI am nested DIV

                I am nested DIV

                </div>

                {/* toggle ? <Nested ref={el=>{button = el}}/> : console.log("toggle is off") */}
                
            </div>
            </div>
            );
}

export default Project2;
