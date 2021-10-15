import React from 'react';
import style from './Project.module.css'

type ProjectType = {
    urlImg : string
    projectName: string
    description: string
}

function Project(props: ProjectType) {
    return (
        <div className={style.projectBlock}>
            <div  className={style.img}>
            <button className={style.button}>See project</button>
            </div >
            <div className={style.description}>
            <h3>{props.projectName}</h3>
            <span>{props.description}</span>
        </div>
        </div>
    )
}

export default Project