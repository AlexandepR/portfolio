import React from "react";
import style from './Footer.module.css'

function Footer () {
    return <div className={style.footerBlock}>
        <div className={style.footer}>
            <span> Alex </span>
            <div className={style.itemBlock}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
            </div>
        <span> Copyright © 2021 All rights reserved </span>
    </div>
    </div>
}

export default Footer