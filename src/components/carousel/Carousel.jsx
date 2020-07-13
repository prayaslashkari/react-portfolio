import React, {useEffect, useState, useRef} from 'react';
import styles from './Carousel.module.scss';

import { TweenLite, Power3 } from 'gsap';
import cx from 'classnames';

const data = [
    {
        name: "First Person",
        title: "CEO, Morena Industries",
        image: "https://dummyimage.com/400x600/AA2/fff&text=image1",
        quote:
        "Every design he mades reflects his hardwork and dedication for Designing",
    },
    {
        name: "Second Person",
        title: "CEO, Saddy & Price",
        image: "https://dummyimage.com/400x600/fa0000/fff&text=image2",
        quote:
        "Works deligently and is fit for design work.",
    },
    {
        name: "Third Person",
        title: "CEO, Gojek Industries",
        image: "https://dummyimage.com/400x600/001dfa/fff&text=image3",
        quote:
        "I dont know what I am writing, I guess its randomest text ever ever!! Hire him",
    }
];



const Carousel = () => {
    let imageList = useRef(null)
    let testimonialList = useRef(null);

    const imageWidth = 340;

    const [state,setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
    });

    useEffect(()=>{
        TweenLite.to(testimonialList.children[0],0,
            {opacity : 1,
            })
    }, [])

    //Function for next and prev slide

    const slideLeft = (index, duration, multiplied = 1 ) => {
        TweenLite.to(imageList.children[index],duration,{
            x: -imageWidth * multiplied,
            ease: Power3.easeOut,
        });
    }

    const slideRight = (index, duration, multiplied = 1, delay=0 ) => {
        TweenLite.to(imageList.children[index],duration,{
            x: +imageWidth * multiplied,
            ease: Power3.easeOut,
            delay: delay,
        });
    }

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index],duration,{
            scale:1.5,
            ease: Power3.easeOut,
        })
    }

    const prevSlide = () =>{
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive3: true });
            //Image transition
            slideLeft(2, 0, 3);
            slideLeft(2, 1, 2);
            scale(2, 1);
            slideRight(0, 1);
            slideRight(1, 1);
            //content transtion
            FadeOut(0, 1);
            FadeIn(2, 1);
          } 
          else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive1: true });
            //Image transition
            slideLeft(0, 0);
            slideRight(0, 1, 0);
            slideRight(1, 1, 0);
            slideRight(2, 1, 2);
            scale(0, 1);
            //content transtion
            FadeOut(1, 1);
            FadeIn(0, 1);
          } 
          else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive2: true, isActive3: false });
            slideLeft(2, 1);
            slideLeft(1, 0, 2);
            slideLeft(1, 1);
            scale(1, 1);
            //content transtion
            FadeOut(2, 1);
            FadeIn(1, 1);
          }
        };

    const FadeOut = (index, duration) =>{
        TweenLite.to(testimonialList.children[index],duration,{
            opacity: 0,
            ease: Power3.easeOut,
        })
    }

    const FadeIn = (index, duration) =>{
        TweenLite.to(testimonialList.children[index],duration,{
            opacity: 1,
            ease: Power3.easeOut,
            delay: 0.5,
        })
    }

    const nextSlide = () =>{
        
        if(imageList.children[0].classList.contains('active'))
        {
            setState({isActive1: false, isActive2:true}); 
            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0);
            FadeOut(0,1);
            FadeIn(1,1);
            
        }
        else if(imageList.children[1].classList.contains('active'))
        {
            setState({isActive2: false, isActive3:true});
            slideRight(0, 1,1);
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            //content transition
            FadeOut(1, 1);
            FadeIn(2, 1);
        }
        else if(imageList.children[2].classList.contains('active'))
        {
            setState({isActive1: true, isActive3:false});
            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);

            FadeOut(2, 1);
            FadeIn(0, 1);

            console.log("third loop")
        }
    };



    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <div onClick={prevSlide} className={cx(styles.arrows, styles.left)}>
                    <span>
                        <img src="https://img.icons8.com/ios-filled/40/000000/long-arrow-left.png" alt="left arrow"/>
                    </span>    
                </div>

                <div className={styles.middle}>
                    <div className={styles.mImage}>
                        <ul ref={el=> (imageList = el)}>
                            <li className={state.isActive1 ? "active" : ""}>
                                <img src={data[0].image} alt="first image"/>
                            </li>

                            <li className={state.isActive2 ? "active" : ''}>
                                <img src={data[1].image} alt="second image"/>
                            </li>

                            <li className={state.isActive3 ? "active" : ''}>
                                <img src={data[2].image} alt="third image"/>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mContent}>
                        <ul ref={el=> (testimonialList = el)}>
                            <li>
                                <div className={styles.contentInner}>
                                    <p className={styles.quote}>{data[0].quote}</p>
                                    <h3 className={styles.name}>{data[0].name}</h3>
                                    <h4 className={styles.title}>{data[0].title}</h4>
                                </div>
                            </li>

                            <li>
                                <div className={styles.contentInner}>
                                    <p className={styles.quote}>{data[1].quote}</p>
                                    <h3 className={styles.name}>{data[1].name}</h3>
                                    <h4 className={styles.title}>{data[1].title}</h4>
                                </div>
                            </li>

                            <li>
                                <div className={styles.contentInner}>
                                    <p className={styles.quote}>{data[2].quote}</p>
                                    <h3 className={styles.name}>{data[2].name}</h3>
                                    <h4 className={styles.title}>{data[2].title}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div onClick={nextSlide} className={cx(styles.arrows, styles.right)}>
                    <span>
                        <img src="https://img.icons8.com/ios-filled/40/000000/long-arrow-right.png" alt="right arrow"/>
                    </span>    
                </div>
                
            </div>
        </div>
     );
}
 
export default Carousel;
