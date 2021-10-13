import React from "react";
import style from './FreeWork.module.css'

type FreeWorkType = {
    description: string
}

function FreeWork(props: FreeWorkType) {
    return (
            <div className={style.FreeWorkBlock}>
                <span className={style.WorkBlock}>{props.description}
                <button className={style.button}>Text me</button>
                    </span>
            </div>
    )
}

export default FreeWork