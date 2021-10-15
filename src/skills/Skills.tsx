import React from 'react';
import style from './Skills.module.css'
import styleContainer from "./../common/styles/Container.module.css";
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                <Skill title={'JS'} description={'TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.'}/>
                <Skill title={'CSS'} description={'Cascading Style Sheets,  is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.'}/>
                <Skill title={'REACT'} description={'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'}/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
