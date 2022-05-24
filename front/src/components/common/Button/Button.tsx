import { FC } from 'react'
import style from './Button.module.scss'

type ButtonType = {
    name: string
}

const Button: FC<ButtonType> = ({ name }) => {
    return (
        <div>
            <button className={style.btn} type="button">{name}</button>
        </div>

    )
}

export default Button