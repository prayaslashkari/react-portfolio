import React, { Component } from 'react';
import styles from './Education.module.css';
import cx from 'classnames'

class Education extends Component {
    constructor(){
        super();
        this.state={
            slide:false,
        }
    }

    onSlide = () =>
    {
        this.setState({slide:true})
    }
    
    render() {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                
                <div className={styles.left}>
                    <h1 className={styles.title}>Education</h1>
                    <h2 className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sint!</h2>
                </div>

                <div className={styles.main}>
                    <div styles= {{zIndex:"2"}} onClick = {this.onSlide} className={this.state.slide? cx(styles.card, styles.slide) : cx(styles.card) }>
                    LEFT
                    </div>

                    <div styles= {{zIndex:"1"}} onClick = {this.onSlide} className={this.state.slide? cx(styles.card, styles.rslide, styles.rotate) : cx(styles.card, styles.rotate) }>
                    RIGHT
                    </div>
                </div>
                
            
            </div>

        </div> 
        
        );
    }
}
 
export default Education;
