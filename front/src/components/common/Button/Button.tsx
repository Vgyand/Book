import { FC } from 'react'
import style from './Button.module.scss'

type ButtonType = {
    text: string
}

const Button: FC<ButtonType> = ({ text }) => {
    return (
        <div>
            <button className={style.btn} type="button">{text}</button>
        </div>

    )
}

export default Button