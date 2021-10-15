import React from "react";
import style from './FreeWork.module.css'

// type FreeWorkType = {
//     description: string
// }

function FreeWork() {
    return (
            <div className={style.FreeWorkBlock}>
                <div className={style.WorkBlock}>
                <span className={style.title}>I look for work</span>
                <button className={style.button}>Text me</button>
                    </div>
            </div>
    )
}

export default FreeWork