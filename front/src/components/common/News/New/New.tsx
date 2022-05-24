import React, { FC } from 'react'
import style from './New.module.scss'

type NewType = {
    title: string,
    content: string,
    imgUrl: string
}

const New: FC<NewType> = ({ title, content, imgUrl }) => {
    return (
        <div className={`${style.new} col-md-4 `}>
            <div className={style.new_wrapper}>
                <img src={imgUrl} alt="imgUrl" />
                <h3 className={style.new_title}>
                    {title}
                </h3>
                <p className={style.new_content}>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default New