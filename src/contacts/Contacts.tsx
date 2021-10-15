import React from "react";
import style from './Contacts.module.css'

function Contacts () {
    return (
        <div className={style.contactBlock}>
            <div className={style.contact}>
                <span className={style.titleContact}>Contacts</span>
        <input/>
        <input/>
    <textarea className={style.textarea}/>
            </div>
        </div>
    )
}

export default Contacts