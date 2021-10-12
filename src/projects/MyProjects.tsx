import React from 'react';
import style from './MyProjects.module.css'
import Project from "./project/Project";

function MyProjects() {
    return (
        <div className={style.projectBlock}>
            {/*<div className={style.container}>*/}
                <h3 className={style.title}> My projects </h3>
                <div className={style.projects}>
                <Project
                    url={'string'}
                    projectName={'First Project'}
                    description={'My first project'}
                />
                <Project
                    url={'string'}
                    projectName={'Second Project'}
                    description={'My first project'}
                />
                </div>

            {/*</div>*/}
        </div>
    )
}

export default MyProjects