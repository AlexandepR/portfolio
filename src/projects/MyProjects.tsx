import React from 'react';
import style from './MyProjects.module.css'
import Project from "./project/Project";

function MyProjects() {
    return (
        <div className={style.projectBlock}>
            <div className={style.projectContainer}>
                <h3 className={style.title}> My projects </h3>
                <div className={style.projects}>
                <Project
                    urlImg={'string'}
                    projectName={'First Project'}
                    description={'Description 1'}
                />
                <Project
                    urlImg={'string'}
                    projectName={'Second Project'}
                    description={'Description 2'}
                />
                </div>
            </div>
        </div>
    )
}

export default MyProjects