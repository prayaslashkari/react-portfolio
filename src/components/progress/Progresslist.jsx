import React from 'react';
import Progress from './Progress';
import styles from './Progresslist.module.css'

const Progresslist = () => {
    const list = [
        {id: 1,
        name: "Youtubers Statistics",
        description: "Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt ex explicabo inventore, unde dignissimos assumenda, perferendis laboriosam consequuntur illum incidunt exercitationem? Dolorum blanditiis ullam ducimus est, dolor ea dolores ullam ducimus est, dolor ea dolores. ullam ducimus est, dolor ea doloresunde dignissimos assumenda, perferendis laboriosam consequuntur illum incidunt exercitationem? Dolorum blanditiis ullam ducimus est, dolor ea dolores ullam ducimus est, dolor ea dolores. ullam ducimus est, dolor ea dolores..",
        techstack: "JavaScript, ReactJs, Route",
        url: "www.google.com"
         },

        {id: 2,
        name: "React Portfolio",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt ex explicabo inventore, unde dignissimos assumenda, perferendis laboriosam consequuntur illum incidunt exercitationem? Dolorum blanditiis ullam ducimus est, dolor ea dolores ullam ducimus est, dolor ea dolores. ullam ducimus est, dolor ea dolores. ",
        techstack: "JavaScript, ReactJs, Route",
        url: "www.google.com"
            },

        {id: 3,
        name: "Covid App",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt ex explicabo inventore, unde dignissimos assumenda, perferendis laboriosam consequuntur illum incidunt exercitationem? Dolorum blanditiis ullam ducimus est, dolor ea dolores.",
        techstack: "JavaScript, ReactJs, Route",
        url: "www.xyz.com"
            },
        
        {id: 4,
            name: "PSD to HTML/CSS",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt ex explicabo inventore, unde dignissimos assumenda, perferendis laboriosam consequuntur illum incidunt exercitationem? Dolorum blanditiis ullam ducimus est, dolor ea dolores.",
            techstack: "HTML, CSS,Flexbox, CSS Grid",
            url: "www.xyz.com"
            },
    ]




    return ( 
        <div className={styles.container}>

            <div className={styles.upper}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Projects</h1>
                    <h2 className={styles.subtitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat, maiores quas distinctio ad quia sint assumenda sapiente ex fuga?</h2>
                </div>
            </div>

            <div className={styles.list}>
            {list.map((each)=>
                <Progress key={each.id} id={each.id} name={each.name} des={each.description} tech={each.techstack} url={each.url} />)}
            </div>
        
        </div>
     );
}
 
export default Progresslist;