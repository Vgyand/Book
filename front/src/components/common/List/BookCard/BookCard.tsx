import { FC } from 'react'
import Button from '../../Button/Button'
import style from './BookCard.module.scss'

type BookType = {
    imgUrl: string,
    name: string,
    author: string
}

const BookCard: FC<BookType> = ({ imgUrl, name, author }) => {
    return (
        <div className={`${style.bookCard} col-md-2 p-3`}>
            <img src={imgUrl} alt="" />
            <p className={style.bookCard__name}>{name}</p>
            <p className={style.bookCard__author}>{author}</p>
            <Button text="Add" />
        </div>
    )
}

export default BookCard